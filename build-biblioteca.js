// build-biblioteca.js
const fs = require('fs');
const path = require('path');

// --- 1. CONFIGURACIÓN DE RUTAS ---
const carpetaDramas = path.join(__dirname, 'dramas');
const archivoSalida = path.join(__dirname, 'biblioteca.js');

// Rutas de tus archivos globales existentes (si no existen aún localmente, creamos arrays vacíos)
const rutaShips = path.join(__dirname, 'ships.js');
const rutaPersonas = path.join(__dirname, 'personas.js');

// --- 2. CARGAR DATO GLOBAL: SHIPS Y PERSONAS ---
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
  }
  return [];
}

shipsGlobales = cargarArchivoGlobal(rutaShips, 'ships');
personasGlobales = cargarArchivoGlobal(rutaPersonas, 'personas');

// --- 3. FUNCIÓN AUXILIAR PARA RESOLVER LOS SHIPS ---
function obtenerShipsCalculados(drama) {
  if (!drama.ships || !Array.isArray(drama.ships) || drama.ships.length === 0) {
    return [];
  }

  const nombresResueltos = drama.ships.map(itemShip => {
    // CASO A: Tiene un código de Ship Oficial (ej. { ship: 'SH000002' })
    if (itemShip.ship) {
      const shipEncontrado = shipsGlobales.find(s => s.codigo === itemShip.ship);
      if (shipEncontrado && shipEncontrado.nombre) {
        return shipEncontrado.nombre;
      }
    }

    // CASO B: Relación por personajes y personas (ej. { personajes: ['Sorn', 'Jun'] })
    if (itemShip.personajes && Array.isArray(itemShip.personajes) && itemShip.personajes.length >= 2) {
      if (Array.isArray(drama.personas) && drama.personas.length > 0) {
        // Buscar los códigos de persona asociados a esos personajes
        const codigosPersonas = itemShip.personajes.map(nombrePersonaje => {
          const rel = drama.personas.find(p => p.nombre === nombrePersonaje);
          return rel ? rel.persona : null;
        }).filter(Boolean);

        // Obtener los 'nombreArtistico' de personas.js
        const nombresArtisticos = codigosPersonas.map(cod => {
          const pEncontrada = personasGlobales.find(p => p.codigo === cod);
          return pEncontrada ? (pEncontrada.nombreArtistico || pEncontrada.nombre) : null;
        }).filter(Boolean);

        if (nombresArtisticos.length > 0) {
          return nombresArtisticos.join(' & ');
        }
      }

      // Si no hay mapeo con personas.js, usa los nombres de los personajes directamente
      return itemShip.personajes.join(' & ');
    }

    return null;
  }).filter(Boolean);

  return nombresResueltos;
}

// --- 4. LEER LA CARPETA /DRAMAS/ Y GENERAR LA BIBLIOTECA ---
if (!fs.existsSync(carpetaDramas)) {
  console.error(`❌ La carpeta '/dramas/' no existe. Créala y añade algunos archivos de prueba.`);
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

    // Soporta tanto window.dramaActual como un objeto drama directo
    const d = windowFake.dramaActual || {};

    if (d && d.codigo) {
      const arrayShips = obtenerShipsCalculados(d);
      const portadaPrincipal = Array.isArray(d.multimedia?.portada) && d.multimedia.portada.length > 0 
        ? d.multimedia.portada[0] 
        : `${d.codigo}.jpg`;

      // Construcción del objeto optimizado para biblioteca.js
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
    console.error(`❌ Error al procesar el archivo de prueba ${archivo}:`, err.message);
  }
});

// --- 5. GUARDAR ARCHIVO BIBLIOTECA.JS ---
const contenidoFinal = `/* ARCHIVO GENERADO AUTOMÁTICAMENTE — NO EDITAR A MANO */\nconst biblioteca = ${JSON.stringify(listaBiblioteca, null, 2)};\n`;

fs.writeFileSync(archivoSalida, contenidoFinal, 'utf-8');
console.log(`✅ ¡Éxito! Se ha generado 'biblioteca.js' con ${listaBiblioteca.length} drama(s) de prueba.`);
