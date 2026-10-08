// build-biblioteca.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// --- 1. CONFIGURACIÓN DE RUTAS ---
const carpetaDatos = path.join(__dirname, 'datos');
const carpetaDramas = path.join(carpetaDatos, 'dramas');
const archivoSalida = path.join(carpetaDatos, 'biblioteca.js');

const rutaShips = path.join(carpetaDatos, 'SHIPS.js');
const rutaPersonas = path.join(carpetaDatos, 'PERSONAS.js');

// --- 2. CARGADOR ROBUSTO Y FLEXIBLE ---
function cargarArchivoGlobal(ruta, nombreVar) {
  if (!fs.existsSync(ruta)) {
    console.warn(`⚠️ No existe el archivo: ${ruta}`);
    return [];
  }

  try {
    const contenido = fs.readFileSync(ruta, 'utf-8');
    const context = { window: {} };
    context[nombreVar] = [];
    context.window[nombreVar] = context[nombreVar];

    vm.createContext(context);
    vm.runInContext(contenido, context);

    // Intenta extraer la variable declarada con const/let/var o asignada a window
    let resultado = context.window[nombreVar] || context[nombreVar] || [];

    // Si sigue vacío, buscar mediante regex la estructura 'const ships = [...]'
    if (!Array.isArray(resultado) || resultado.length === 0) {
      const match = contenido.match(new RegExp(`(?:const|var|let|window\\.)\\s*${nombreVar}\\s*=\\s*(\\[[\\s\\S]*?\\]);`));
      if (match && match[1]) {
        resultado = eval(match[1]);
      }
    }

    return Array.isArray(resultado) ? resultado : [];
  } catch (e) {
    console.warn(`⚠️ Error leyendo ${nombreVar} desde ${ruta}:`, e.message);
    return [];
  }
}

const shipsGlobales = cargarArchivoGlobal(rutaShips, 'ships');
const personasGlobales = cargarArchivoGlobal(rutaPersonas, 'personas');

console.log(`📌 Cargados ${shipsGlobales.length} ships desde SHIPS.js`);
console.log(`📌 Cargadas ${personasGlobales.length} personas desde PERSONAS.js`);

// --- 3. BÚSQUEDA Y RESOLUCIÓN DEL PRIMER SHIP ---
function obtenerPrimerShipResuelto(itemShip, drama) {
  if (!itemShip) return null;

  // CASO A: Tiene un código de Ship (ej. { ship: 'SH000002' })
  const codigoBuscado = itemShip.ship || itemShip.codigo;

  if (codigoBuscado) {
    const sEncontrado = shipsGlobales.find(s => 
      s.codigo && String(s.codigo).trim().toUpperCase() === String(codigoBuscado).trim().toUpperCase()
    );

    if (sEncontrado && sEncontrado.nombre) {
      return sEncontrado.nombre; // Retorna "BrightWin"
    } else {
      console.warn(`⚠️ Drama '${drama.codigo}': No se encontró el ship '${codigoBuscado}' en SHIPS.js.`);
    }
  }

  // CASO B: Sin código de ship oficial -> Mapeo a PERSONAS.js
  if (itemShip.personajes && Array.isArray(itemShip.personajes) && itemShip.personajes.length >= 2) {
    if (Array.isArray(drama.personas) && drama.personas.length > 0) {
      const codigos = itemShip.personajes.map(nombreP => {
        const rel = drama.personas.find(p => p.nombre === nombreP);
        return rel ? rel.persona : null;
      }).filter(Boolean);

      const nombresArtisticos = codigos.map(cod => {
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
}

// --- 4. PROCESAR CARPETA /datos/dramas/ ---
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
    const context = { window: {} };
    vm.createContext(context);
    vm.runInContext(contenido, context);

    const d = context.window.dramaActual || context.dramaActual || {};

    if (d && d.codigo) {
      const totalShips = Array.isArray(d.ships) ? d.ships.length : 0;
      const primerShipNombre = totalShips > 0 ? obtenerPrimerShipResuelto(d.ships[0], d) : null;

      const portadaPrincipal = Array.isArray(d.multimedia?.portada) && d.multimedia.portada.length > 0 
        ? d.multimedia.portada[0] 
        : `${d.codigo}.jpg`;

      const itemDrama = {
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

        tieneFranquicia: Boolean(d.franquicia),
        tieneUniverso: Boolean(d.universo),
        tieneSerie: Boolean(d.serie),
        tieneRemake: Boolean(d.remake)
      };

      if (primerShipNombre) {
        itemDrama.ship = primerShipNombre;
        itemDrama.numShips = totalShips;
      }

      listaBiblioteca.push(itemDrama);
    }
  } catch (err) {
    console.error(`❌ Error al procesar '${archivo}':`, err.message);
  }
});

// --- 5. GUARDAR /datos/biblioteca.js ---
const lineasDramas = listaBiblioteca.map(drama => "  " + JSON.stringify(drama));
const contenidoFinal = `/* ARCHIVO GENERADO AUTOMÁTICAMENTE — NO EDITAR A MANO */\nconst biblioteca = [\n${lineasDramas.join(',\n')}\n];\n`;

fs.writeFileSync(archivoSalida, contenidoFinal, 'utf-8');
console.log(`✅ ¡Éxito! Se ha actualizado 'datos/biblioteca.js' con ${listaBiblioteca.length} drama(s).`);
