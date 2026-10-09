const fs = require('fs');
const path = require('path');

// Rutas del proyecto
const RUTA_DRAMAS = path.join(__dirname, 'datos', 'dramas');
const RUTA_OUTPUT = path.join(__dirname, 'datos', 'biblioteca.js');


/**
 * Procesa la ficha individual de un drama y devuelve el objeto ligero para biblioteca.js
 */
function compilarDramaParaBiblioteca(drama) {
    if (!drama || !drama.codigo) return null;

    // 1. Detección de multimedia
    const m = drama.multimedia || {};
    const tieneMedia = Boolean(
        (Array.isArray(m.trailer) && m.trailer.length > 0) ||
        (Array.isArray(m.teaser) && m.teaser.length > 0) ||
        (Array.isArray(m.pilot) && m.pilot.length > 0) ||
        (Array.isArray(m.ost) && m.ost.length > 0) ||
        (Array.isArray(m.videos) && m.videos.length > 0)
    );

    // 2. Extracción y normalización de relaciones
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

    // 3. Objeto limpio para biblioteca.js
    return {
        codigo: drama.codigo,
        titulo: drama.titulo || '',
        pais: Array.isArray(drama.pais) ? drama.pais : [],
        anio: drama.anio || null,
        tipo: drama.tipo || 'Drama',
        estado: drama.estado || 'Finalizado',
        activo: drama.activo !== undefined ? drama.activo : true,

        // RELACIONES (Si existen guardan el valor/objeto; si no, quedan en null / '')
        serie: drama.serie || null,
        temporada: Number(drama.temporada) || 1,
        temporadas: Number(drama.temporadas) || 1,
        franquicia: codFranquicia ? { codigo: codFranquicia, orden: ordenFranquicia } : null,
        universo: codUniverso ? { codigo: codUniverso } : null,
        remake: codRemake ? { codigo: codRemake, orden: ordenRemake } : null,

        // FLAGS BOOLEANAS ÚNICAMENTE PARA CONTENIDOS PESADOS
        tieneSinopsis: Boolean(drama.sinopsis && drama.sinopsis.trim() !== ''),
        tienePersonas: Boolean(Array.isArray(drama.personas) && drama.personas.length > 0),
        tieneEntidades: Boolean(Array.isArray(drama.entidades) && drama.entidades.length > 0),
        tieneMultimedia: tieneMedia,

        // PORTADA Y SHIPS
        portada: drama.portada || (m.portada && m.portada[0]) || '',
        ship: drama.ship || '',
        numShips: Array.isArray(drama.ships) ? drama.ships.length : (drama.numShips || 0)
    };
}

/**
 * Función principal que lee el directorio de datos y compila biblioteca.js
 */
function construirBiblioteca() {
    console.log('🔄 Iniciando compilación de biblioteca.js...');

    if (!fs.existsSync(RUTA_DRAMAS)) {
        console.error('❌ Error: No se encontró la carpeta:', RUTA_DRAMAS);
        return;
    }

    const archivos = fs.readdirSync(RUTA_DRAMAS).filter(f => f.endsWith('.js'));
    const listaCompilada = [];

    archivos.forEach(archivo => {
        const rutaArchivo = path.join(RUTA_DRAMAS, archivo);
        const contenido = fs.readFileSync(rutaArchivo, 'utf8');

        try {
            // Entorno de evaluación seguro para extraer el objeto JS del archivo individual
            const sandbox = { window: {} };
            const scriptFunction = new Function('window', contenido);
            scriptFunction(sandbox.window);

            const codigoDrama = archivo.replace('.js', '');
            const dramaObjeto = sandbox.window[codigoDrama] || sandbox.window.DRAMA_ACTUAL || sandbox.window.dramaActual;

            if (dramaObjeto) {
                const elementoBiblio = compilarDramaParaBiblioteca(dramaObjeto);
                if (elementoBiblio) listaCompilada.push(elementoBiblio);
            } else {
                console.warn(`⚠️ No se pudo extraer el objeto del archivo: ${archivo}`);
            }
        } catch (error) {
            console.error(`❌ Error al procesar ${archivo}:`, error.message);
        }
    });

    // Ordenar por título por defecto
    listaCompilada.sort((a, b) => a.titulo.localeCompare(b.titulo, 'es', { sensitivity: 'base' }));

    // Generar archivo final biblioteca.js
    const contenidoOutput = `const biblioteca = ${JSON.stringify(listaCompilada, null, 2)};\n`;
    fs.writeFileSync(RUTA_OUTPUT, contenidoOutput, 'utf8');

    console.log(`✅ ¡Éxito! Se compilaron ${listaCompilada.length} dramas en ${RUTA_OUTPUT}`);
}

// Ejecutar compilador
construirBiblioteca();
