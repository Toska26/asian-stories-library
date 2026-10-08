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

// --- 2. CARGADOR MULTI-MAYÚSCULA Y ROBUSTO ---
function cargarArchivoGlobal(ruta, variantesNombres) {
  if (!fs.existsSync(ruta)) {
    console.warn(`⚠️ No existe el archivo: ${ruta}`);
    return [];
  }

  try {
    const contenido = fs.readFileSync(ruta, 'utf-8');
    const context = { window: {} };

    variantesNombres.forEach(nombre => {
      context[nombre] = [];
      context.window[nombre] = context[nombre];
    });

    vm.createContext(context);
    vm.runInContext(contenido, context);

    for (const nombre of variantesNombres) {
      const res = context.window[nombre] || context[nombre];
      if (Array.isArray(res) && res.length > 0) {
        return res;
      }
    }

    const inicioArray = contenido.indexOf('[');
    const finArray = contenido.lastIndexOf(']');
    
    if (inicioArray !== -1 && finArray !== -1 && finArray > inicioArray) {
      const codigoArray = contenido.substring(inicioArray, finArray + 1);
      const evalFunc = new Function(`return ${codigoArray};`);
      const resEval = evalFunc();
      if (Array.isArray(resEval)) return resEval;
    }

    return [];
  } catch (e) {
    console.warn(`⚠️ Error leyendo desde ${ruta}:`, e.message);
    return [];
  }
}

const shipsGlobales = cargarArchivoGlobal(rutaShips, ['SHIPS', 'ships']);
const personasGlobales = cargarArchivoGlobal(rutaPersonas, ['PERSONAS', 'personas']);

console.log(`📌 Cargados ${shipsGlobales.length} ships desde SHIPS.js`);
console.log(`📌 Cargadas ${personasGlobales.length} personas desde PERSONAS.js`);

// --- 3. BÚSQUEDA RESOLUTIVA (SHIPS.JS -> PERSONAS.JS) ---
function obtenerPrimerShipResuelto(itemShip, drama) {
  if (!itemShip) return null;

  const codigoBuscado = itemShip.ship || itemShip.codigo;

  // OPCIÓN 1: Búsqueda en SHIPS.js por código oficial
  if (codigoBuscado) {
    const sEncontrado = shipsGlobales.find(s => 
      s.codigo && String(s.codigo).trim().toUpperCase() === String(codigoBuscado).trim().toUpperCase()
    );

    if (sEncontrado && sEncontrado.nombre) {
      return sEncontrado.nombre;
    }
  }

  // OPCIÓN 2: Búsqueda por mapa Personajes -> Drama.personas -> PERSONAS.js
  if (itemShip.personajes && Array.isArray(itemShip.personajes) && itemShip.personajes.length >= 2) {
    if (Array.isArray(drama.personas) && drama.personas.length > 0) {
      const codigosPersonas = itemShip.personajes.map(nombrePersonaje => {
        const rel = drama.personas.find(p => p.nombre === nombrePersonaje);
        return rel ? rel.persona : null;
      }).filter(Boolean);

      if (codigosPersonas.length >= 2) {
        const nombresArtisticos = codigosPersonas.map(cod => {
          const pEncontrada = personasGlobales.find(p => p.codigo === cod);
          return pEncontrada ? (pEncontrada.nombreArtistico || pEncontrada.nombre) : null;
        }).filter(Boolean);

        if (nombresArtisticos.length >= 2) {
          return nombresArtisticos.join(' & ');
        }
      }
    }
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

      const itemDrama = {
        codigo: d.codigo,
        titulo: d.titulo || '',
        pais: Array.isArray(d.pais) ? d.pais : [],
        anio: d.anio || null,
        tipo: d.tipo || 'Serie',
        temporada: d.temporada || 1,
        estado: d.estado || 'Finalizado',
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

      // Adjunta la portada SOLO si está explícitamente declarada en multimedia.portada
      if (Array.isArray(d.multimedia?.portada) && d.multimedia.portada.length > 0) {
        itemDrama.portada = d.multimedia.portada[0];
      }

      // Adjunta el ship SOLO si se resolvió correctamente
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

// --- 5. GUARDAR EN /datos/biblioteca.js ---
const lineasDramas = listaBiblioteca.map(drama => "  " + JSON.stringify(drama));
const contenidoFinal = `/* ARCHIVO GENERADO AUTOMÁTICAMENTE — NO EDITAR A MANO */\nconst biblioteca = [\n${lineasDramas.join(',\n')}\n];\n`;

fs.writeFileSync(archivoSalida, contenidoFinal, 'utf-8');
console.log(`✅ ¡Éxito! Se ha actualizado 'datos/biblioteca.js' con ${listaBiblioteca.length} drama(s).`);
