const fs = require('fs');
const path = require('path');

// Configuración de rutas relativas
const RUTA_DRAMAS = path.join(__dirname, 'datos', 'dramas');
const RUTA_OUTPUT = path.join(__dirname, 'datos', 'biblioteca.js');

/**
 * Procesa la ficha individual de un drama y devuelve el objeto ligero para biblioteca.js
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

    // 2. Extracción y normalización de relaciones directas
    const codFranquicia = (drama.franquicia && typeof drama.franquicia === 'object')
        ? drama.franquicia.codigo
        : (drama.franquicia || '');

    const ordenFranquicia = (drama.franquicia && typeof drama.franquicia === 'object')
        ? (Number(drama.franquicia.orden) || null)
        : null;

    const codUniverso = (drama.universo && typeof drama.universo === 'object')
        ? drama.universo.codigo
        : (drama.universo || '');

    const codRemake = (drama.remake && typeof drama.remake === 'object')
        ? drama.remake.codigo
        : (drama.remake || '');

    const ordenRemake = (drama.remake && typeof drama.remake === 'object')
        ? (Number(drama.remake.orden) || null)
        : null;

    // 3. Procesamiento seguro de Ships (Caso 1: Sección ships / Caso 2: Derivado de personas)
    let shipResumen = drama.ship || '';
    let totalShips = 0;

    if (Array.isArray(drama.ships) && drama.ships.length > 0) {
        // Caso 1: Definido directamente en el array 'ships'
        totalShips = drama.ships.length;
        const primerShip = drama.ships[0];
        if (primerShip) {
            if (primerShip.ship) {
                shipResumen = primerShip.ship;
            } else if (Array.isArray(primerShip.personajes)) {
                shipResumen = primerShip.personajes.join(' & ');
            }
        }
    } else if (Array.isArray(drama.personas) && drama.personas.length > 0) {
        // Caso 2: Búsqueda dinámica en el reparto (personas principales)
        const principales = drama.personas.filter(p => p && p.principal === true && p.nombre);
        if (principales.length >= 2) {
            shipResumen = principales.slice(0, 2).map(p => p.nombre).join(' & ');
            totalShips = 1;
        } else if (principales.length === 1) {
            shipResumen = principales[0].nombre;
            totalShips = 1;
        }
    } else if (drama.ship) {
        totalShips = Number(drama.numShips) || 1;
    }

    // 4. Salida del objeto ligero para biblioteca.js
    return {
        codigo: drama.codigo,
        titulo: drama.titulo || '',
        pais: Array.isArray(drama.pais) ? drama.pais : [],
        anio: drama.anio || null,
        tipo: drama.tipo || 'Drama',
        estado: drama.estado || 'Finalizado',
        activo: drama.activo !== undefined ? drama.activo : true,

        // RELACIONES DIRECTAS
        serie: drama.serie || null,
        temporada: Number(drama.temporada) || 1,
        temporadas: Number(drama.temporadas) || 1,
        franquicia: codFranquicia ? { codigo: codFranquicia, orden: ordenFranquicia } : null,
        universo: codUniverso ? { codigo: codUniverso } : null,
        remake: codRemake ? { codigo: codRemake, orden: ordenRemake } : null,

        // FLAGS DE CONTENIDOS PESADOS
        tieneSinopsis: Boolean(drama.sinopsis && drama.sinopsis.trim() !== ''),
        tienePersonas: Boolean(Array.isArray(drama.personas) && drama.personas.length > 0),
        tieneEntidades: Boolean(Array.isArray(drama.entidades) && drama.entidades.length > 0),
        tieneMultimedia: tieneMedia,

        // PORTADA Y SHIPS
        portada: drama.portada || (m.portada && m.portada[0]) || '',
        ship: shipResumen,
        numShips: totalShips
    };
}

/**
 * Función principal de compilación segura
 */
function construirBiblioteca() {
    console.log('🔄 Reconstruyendo biblioteca.js desde /datos/dramas/...');

    if (!fs.existsSync(RUTA_DRAMAS)) {
        console.error('❌ Error: No existe la carpeta:', RUTA_DRAMAS);
        console.log('💡 Ejecuta el comando desde la raíz de tu proyecto.');
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
            
            const scriptFunction = new Function('window', contenido);
            scriptFunction(sandbox.window);

            const codigoDrama = archivo.replace('.js', '');
            const dramaObjeto = sandbox.window[codigoDrama] || sandbox.window.DRAMA_ACTUAL || sandbox.window.dramaActual;

            if (dramaObjeto) {
                const elementoBiblio = compilarDramaParaBiblioteca(dramaObjeto);
                if (elementoBiblio) listaCompilada.push(elementoBiblio);
            } else {
                console.warn(`⚠️ Objeto de drama no detectado en: ${archivo}`);
            }
        } catch (error) {
            erroresContador++;
            console.error(`❌ Error al procesar ${archivo}:`, error.message);
        }
    });

    // Ordenar alfabéticamente por título
    listaCompilada.sort((a, b) => a.titulo.localeCompare(b.titulo, 'es', { sensitivity: 'base' }));

    // Guardar biblioteca.js formateada
    const contenidoOutput = `const biblioteca = ${JSON.stringify(listaCompilada, null, 2)};\n`;
    fs.writeFileSync(RUTA_OUTPUT, contenidoOutput, 'utf8');

    console.log(`\n✅ ¡Proceso finalizado! ${listaCompilada.length} drama(s) guardados en biblioteca.js.`);
    if (erroresContador > 0) {
        console.log(`⚠️ Se omitieron ${erroresContador} archivo(s) por errores de sintaxis.`);
    }
}

// Ejecutar compilador
construirBiblioteca();
