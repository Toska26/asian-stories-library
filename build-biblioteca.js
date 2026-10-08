// build-biblioteca.js (Guardado en la raíz del repositorio)
const fs = require('fs');
const path = require('path');

// --- 1. CONFIGURACIÓN DE RUTAS SEGÚN TU ESTRUCTURA ---
// La carpeta datos contiene 'dramas', los archivos en mayúsculas y 'biblioteca.js'
const carpetaDatos = path.join(__dirname, 'datos');
const carpetaDramas = path.join(carpetaDatos, 'dramas');
const archivoSalida = path.join(carpetaDatos, 'biblioteca.js');

// Archivos globales en mayúsculas dentro de /datos/
const rutaShips = path.join(carpetaDatos, 'SHIPS.js');
const rutaPersonas = path.join(carpetaDatos, 'PERSONAS.js');

// --- 2. CARGAR SHIPS.js Y PERSONAS.js ---
let shipsGlobales = [];
let personasGlobales = [];

function cargarArchivoGlobal(ruta, variableName) {
  if (fs.existsSync(ruta)) {
    try {
      const contenido = fs.readFileSync(ruta, 'utf-8');
      const windowFake = {};
      const evalFunc = new Function('window', 'const ' + variableName + ' = []; ' + contenido + `; return typeof ${variableName} !== 'undefined' ? ${variableName} : (window.${variableName} || []);`);
      return evalFunc(windowFake) || [];
    } catch (e) {
      console.warn(`⚠️ No se pudo cargar ${variableName} desde ${ruta}:`, e.message);
    }
  } else {
    console.warn(`⚠️ Archivo no encontrado: ${ruta}`);
  }
  return [];
}

shipsGlobales = cargarArchivoGlobal(rutaShips, 'ships');
personasGlobales = cargarArchivoGlobal(rutaPersonas, 'personas');

// --- 3. RESOLVER SHIPS PARA CADA DRAMA ---
function obtenerShipsCalculados(drama) {
  if (!drama.ships || !Array.isArray(drama.ships) || drama.ships.length === 0) {
    return [];
  }

  const nombresResueltos = drama.ships.map(itemShip => {
    // CASO A: Ship Oficial con código (ej. SH000002)
    if (itemShip.ship) {
      const shipEncontrado = shipsGlobales.find(s => s.codigo === itemShip.ship);
      if (shipEncontrado && shipEncontrado.nombre) {
        return shipEncontrado.nombre;
      }
    }

    // CASO B: No oficial, cruzando con PERSONAS.js por personaje
    if (itemShip.personajes && Array.isArray(itemShip.personajes) && itemShip.personajes.length >= 2) {
      if (Array.isArray(drama.personas) && drama.personas.length > 0) {
        const codigosPersonas = itemShip.personajes.map(nombrePersonaje => {
          const rel = drama.personas.find(p => p.nombre === nombrePersonaje);
          return rel ? rel.persona : null;
        }).filter(Boolean);

        const nombresArtisticos = codigosPersonas.map(cod => {
          const pEncontrada = personasGlobales.find(p => p.codigo === cod);
          return pEncontrada ? (pEncontrada.nombreArtistico || pEncontrada.nombre) : null;
        }).filter(Boolean);

        if (nombresArtisticos.length > 0) {
          return nombresArtisticos.join(' & ');
        }
      }

      return itemShip.personajes.join(' & ');
    }

    return null;
  }).filter(Boolean);

  return nombresResueltos;
}

// --- 4. LEER /datos/dramas/ Y GENERAR /datos/biblioteca.js ---
if (!fs.existsSync(carpetaDramas)) {
  console.error(`❌ La carpeta '${carpetaDramas}' no existe.`);
  process.exit(1);
}

const archivosDramas = fs.readdirSync(carpetaDramas).filter(f => f.endsWith('.js'));
const listaBiblioteca = [];

archivosDramas.forEach(archivo => {
  const rutaArchivo = path.join(carpetaDramas, archivo);
  const contenido = fs.readFileSync(rutaArchivo, 'utf-8');

  try {
    const windowFake = {};
    const evalFunc = new Function('window', contenido);
    evalFunc(windowFake);

    const d = windowFake.dramaActual || {};

    if (d && d.codigo) {
      const arrayShips = obtenerShipsCalculados(d);
      const portadaPrincipal = Array.isArray(d.multimedia?.portada) && d.multimedia.portada.length > 0 
        ? d.multimedia.portada[0] 
        : `${d.codigo}.jpg`;

      listaBiblioteca.push({
        codigo: d.codigo,
        titulo: d.titulo || '',
        tituloOriginal: d.tituloOriginal || null,
        pais: Array.isArray(d.pais) ? d.pais : [],
        anio: d.anio || null,
        tipo: d.tipo || 'Serie',
        temporada: d.temporada || 1,
        estado: d.estado || 'Finalizado',
        portada: portadaPrincipal,
        activo: d.activo !== undefined ? d.activo : true,

        // Ships
        numShips: arrayShips.length,
        ships: arrayShips,

        // Banderas e indicadores de iconos
        numEspeciales: Array.isArray(d.especiales) ? d.especiales.length : 0,
        tieneSinopsis: typeof d.sinopsis === 'string' && d.sinopsis.trim().length > 0,
        tieneOrigen: Boolean(d.origen),
        tienePersonas: Array.isArray(d.personas) && d.personas.length > 0,
        tieneEntidades: Array.isArray(d.entidades) && d.entidades.length > 0,
        tieneMultimedia: Boolean(
          d.multimedia && (
            (d.multimedia.trailer && d.multimedia.trailer.length > 0) ||
            (d.multimedia.ost && d.multimedia.ost.length > 0) ||
            (d.multimedia.teaser && d.multimedia.teaser.length > 0)
          )
        ),

        // Universos y franquicias
        tieneFranquicia: Boolean(d.franquicia),
        tieneUniverso: Boolean(d.universo),
        tieneSerie: Boolean(d.serie),
        tieneRemake: Boolean(d.remake)
      });
    }
  } catch (err) {
    console.error(`❌ Error al procesar '${archivo}':`, err.message);
  }
});

// --- 5. ESCRIBIR EN /datos/biblioteca.js ---
const contenidoFinal = `/* ARCHIVO GENERADO AUTOMÁTICAMENTE — NO EDITAR A MANO */\nconst biblioteca = ${JSON.stringify(listaBiblioteca, null, 2)};\n`;

fs.writeFileSync(archivoSalida, contenidoFinal, 'utf-8');
console.log(`✅ ¡Éxito! Se ha actualizado 'datos/biblioteca.js' con ${listaBiblioteca.length} drama(s).`);
