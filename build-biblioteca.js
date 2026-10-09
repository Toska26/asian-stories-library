const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Configuración de rutas relativas
const RUTA_DRAMAS = path.join(__dirname, 'datos', 'dramas');
const RUTA_SHIPS = path.join(__dirname, 'datos', 'SHIPS.js');
const RUTA_PERSONAS = path.join(__dirname, 'datos', 'PERSONAS.js');
const RUTA_OUTPUT = path.join(__dirname, 'datos', 'biblioteca.js');

/**
 * Carga de forma segura archivos globales (SHIPS.js, PERSONAS.js)
 * buscando nombres de variables tanto en mayúsculas como en minúsculas.
 */
function cargarArchivoGlobal(rutaArchivo, posiblesNombres) {
    if (!fs.existsSync(rutaArchivo)) {
        console.warn(`⚠️ No se encontró el archivo global: ${rutaArchivo}`);
        return [];
    }
    try {
        const contenido = fs.readFileSync(rutaArchivo, 'utf8');
        
        const sandbox = { window: {} };
        sandbox.window = sandbox;

        vm.createContext(sandbox);
        vm.runInContext(contenido, sandbox);

        for (const nombre of posiblesNombres) {
            let data = sandbox[nombre] || sandbox.window?.[nombre];

            if (!data) {
                try {
                    data = vm.runInContext(`(function() { ${contenido}; return (typeof ${nombre} !== 'undefined' ? ${nombre} : null); })()`, sandbox);
                } catch (e) {
                    data = null;
                }
            }

            if (Array.isArray(data) && data.length > 0) {
                return data;
            }
        }

        return [];
    } catch (error) {
        console.error(`❌ Error al cargar ${rutaArchivo}:`, error.message);
        return [];
    }
}

// Carga única de colecciones globales
const shipsGlobales = cargarArchivoGlobal(RUTA_SHIPS, ['SHIPS', 'ships', 'Ships']);
const personasGlobales = cargarArchivoGlobal(RUTA_PERSONAS, ['PERSONAS', 'personas', 'Personas']);

/**
 * Resuelve únicamente el primer ship según las reglas estrictas
 */
function obtenerPrimerShipResuelto(itemShip, drama) {
    if (!itemShip) return null;

    // REGLA 1: Código oficial de Ship en SHIPS.js
    if (itemShip.ship) {
        const sEncontrado = shipsGlobales.find(s => s.codigo === itemShip.ship);
        if (sEncontrado && sEncontrado.nombre) {
            return sEncontrado.nombre;
        }
    }

    // REGLA 2: Mapeo por personajes ficticios -> Nombres Artísticos en PERSONAS.js
    if (Array.isArray(itemShip.personajes) && itemShip.personajes.length >= 2) {
        if (Array.isArray(drama.personas) && drama.personas.length > 0) {
            const codigosPersonas = itemShip.personajes.map(nombreFicticio => {
                const rel = drama.personas.find(p => p.nombre === nombreFicticio);
                return rel ? rel.persona : null;
            }).filter(Boolean);

            const nombresArtisticos = codigosPersonas.map(cod => {
                const pEncontrada = personasGlobales.find(p => p.codigo === cod);
                return pEncontrada ? (pEncontrada.nombreArtistico || pEncontrada.nombre) : null;
            }).filter(Boolean);

            if (nombresArtisticos.length >= 2) {
                return nombresArtisticos.join(' & ');
            }
        }
    }

    return null;
}

/**
 * Procesa la ficha individual de un drama generando un objeto ultra ligero
 */
function compilarDramaParaBiblioteca(drama) {
    if (!drama || !drama.codigo) return null;

    // 1. Detección de presencia de multimedia
    const m = drama.multimedia || {};
    const tieneMedia = Boolean(
        (Array.isArray(m.trailer) && m.trailer.length > 0) ||
        (Array.isArray(m.teaser) && m.teaser.length > 0) ||
        (Array.isArray(m.pilot) && m.pilot.length > 0) ||
        (Array.isArray(m.ost) && m.ost.length > 0) ||
        (Array.isArray(m.videos) && m.videos.length > 0)
    );

    // 2. Objeto base con campos esenciales obligatorios
    const objetoBiblioteca = {
        codigo: drama.codigo,
        titulo: drama.titulo || '',
        pais: Array.isArray(drama.pais) ? drama.pais : [],
        anio: drama.anio || null,
        tipo: drama.tipo || 'Drama',
        estado: drama.estado || 'Finalizado',
        activo: drama.activo !== undefined ? drama.activo : true
    };

    // 3. Flags booleanos: Solo se agregan si son `true`
    const tieneSinopsis = Boolean(drama.sinopsis && drama.sinopsis.trim() !== '');
    const tienePersonas = Boolean(Array.isArray(drama.personas) && drama.personas.length > 0);
    const tieneEntidades = Boolean(Array.isArray(drama.entidades) && drama.entidades.length > 0);

    if (tieneSinopsis) objetoBiblioteca.tieneSinopsis = true;
    if (tienePersonas) objetoBiblioteca.tienePersonas = true;
    if (tieneEntidades) objetoBiblioteca.tieneEntidades = true;
    if (tieneMedia) objetoBiblioteca.tieneMultimedia = true;

    // 4. Portada: Solo se agrega si no está vacía
    const urlPortada = drama.portada || (m.portada && m.portada[0]) || '';
    if (urlPortada.trim() !== '') {
        objetoBiblioteca.portada = urlPortada;
    }

    // 5. Relaciones directas (se omiten por completo si no existen)
    if (drama.serie) {
        objetoBiblioteca.serie = drama.serie;
        if (drama.temporada) objetoBiblioteca.temporada = Number(drama.temporada);
        if (drama.temporadas) objetoBiblioteca.temporadas = Number(drama.temporadas);
    }

    const codFranquicia = (drama.franquicia && typeof drama.franquicia === 'object')
        ? drama.franquicia.codigo
        : (drama.franquicia || '');
    const ordenFranquicia = (drama.franquicia && typeof drama.franquicia === 'object')
        ? (Number(drama.franquicia.orden) || null)
        : null;

    if (codFranquicia) {
        objetoBiblioteca.franquicia = { codigo: codFranquicia, orden: ordenFranquicia };
    }

    const codUniverso = (drama.universo && typeof drama.universo === 'object')
        ? drama.universo.codigo
        : (drama.universo || '');

    if (codUniverso) {
        objetoBiblioteca.universo = { codigo: codUniverso };
    }

    const codRemake = (drama.remake && typeof drama.remake === 'object')
        ? drama.remake.codigo
        : (drama.remake || '');
    const ordenRemake = (drama.remake && typeof drama.remake === 'object')
        ? (Number(drama.remake.orden) || null)
        : null;

    if (codRemake) {
        objetoBiblioteca.remake = { codigo: codRemake, orden: ordenRemake };
    }

    // 6. Inclusión condicional de ships
    if (Array.isArray(drama.ships) && drama.ships.length > 0) {
        const shipResuelto = obtenerPrimerShipResuelto(drama.ships[0], drama);
        if (shipResuelto) {
            objetoBiblioteca.ship = shipResuelto;
            objetoBiblioteca.numShips = drama.ships.length;
        }
    }

    return objetoBiblioteca;
}

/**
 * Función principal de compilación
 */
function construirBiblioteca() {
    console.log('🔄 Reconstruyendo biblioteca.js ultraligera...');
    console.log(`📦 Globales cargados: ${shipsGlobales.length} ships en SHIPS.js, ${personasGlobales.length} personas en PERSONAS.js.`);

    if (!fs.existsSync(RUTA_DRAMAS)) {
        console.error('❌ Error: No existe la carpeta:', RUTA_DRAMAS);
        process.exit(1);
    }

    const carpetaDatos = path.dirname(RUTA_OUTPUT);
    if (!fs.existsSync(carpetaDatos)) {
        fs.mkdirSync(carpetaDatos, { recursive: true });
    }

    const archivos = fs.readdirSync(RUTA_DRAMAS).filter(f => f.endsWith('.js'));
    const listaCompilada = [];
    let erroresContador = 0;

    archivos.forEach(archivo => {
        const rutaArchivo = path.join(RUTA_DRAMAS, archivo);
        
        try {
            const contenido = fs.readFileSync(rutaArchivo, 'utf8');
            const sandbox = { window: {} };
            sandbox.window = sandbox;

            vm.createContext(sandbox);
            vm.runInContext(contenido, sandbox);

            const codigoDrama = archivo.replace('.js', '');
            const dramaObjeto = sandbox[codigoDrama] || sandbox.window?.[codigoDrama] || sandbox.DRAMA_ACTUAL || sandbox.dramaActual || sandbox.window?.dramaActual;

            if (dramaObjeto) {
                const elementoBiblio = compilarDramaParaBiblioteca(dramaObjeto);
                if (elementoBiblio) listaCompilada.push(elementoBiblio);
            } else {
                console.warn(`⚠️ Objeto no detectado en: ${archivo}`);
            }
        } catch (error) {
            erroresContador++;
            console.error(`❌ Error al procesar ${archivo}:`, error.message);
        }
    });

    listaCompilada.sort((a, b) => a.titulo.localeCompare(b.titulo, 'es', { sensitivity: 'base' }));

    const contenidoOutput = `const biblioteca = ${JSON.stringify(listaCompilada, null, 2)};\n`;
    fs.writeFileSync(RUTA_OUTPUT, contenidoOutput, 'utf8');

    console.log(`\n✅ Proceso finalizado: ${listaCompilada.length} drama(s) procesados.`);
    if (erroresContador > 0) {
        console.log(`⚠️ Se omitieron ${erroresContador} archivo(s) por errores de sintaxis.`);
    }
}

construirBiblioteca();
