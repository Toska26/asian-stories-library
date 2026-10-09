const fs = require('fs');
const path = require('path');

const RUTA_DRAMAS = path.join(__dirname, 'datos', 'dramas');
const RUTA_OUTPUT = path.join(__dirname, 'datos', 'biblioteca.js');

function compilarDramaParaBiblioteca(drama) {
    if (!drama || !drama.codigo) return null;

    const m = drama.multimedia || {};
    const tieneMedia = Boolean(
        (Array.isArray(m.trailer) && m.trailer.length > 0) ||
        (Array.isArray(m.teaser) && m.teaser.length > 0) ||
        (Array.isArray(m.pilot) && m.pilot.length > 0) ||
        (Array.isArray(m.ost) && m.ost.length > 0) ||
        (Array.isArray(m.videos) && m.videos.length > 0)
    );

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

        // FLAGS SOLO PARA CONTENIDO PESADO
        tieneSinopsis: Boolean(drama.sinopsis && drama.sinopsis.trim() !== ''),
        tienePersonas: Boolean(Array.isArray(drama.personas) && drama.personas.length > 0),
        tieneEntidades: Boolean(Array.isArray(drama.entidades) && drama.entidades.length > 0),
        tieneMultimedia: tieneMedia,

        // RESUMEN PORTADA Y SHIPS
        portada: drama.portada || (m.portada && m.portada[0]) || '',
        ship: drama.ship || '',
        numShips: Array.isArray(drama.ships) ? drama.ships.length : (drama.numShips || 0)
    };
}

function construirBiblioteca() {
    console.log('🔄 Reconstruyendo biblioteca.js...');

    if (!fs.existsSync(RUTA_DRAMAS)) {
        console.error('❌ No existe la carpeta:', RUTA_DRAMAS);
        return;
    }

    const archivos = fs.readdirSync(RUTA_DRAMAS).filter(f => f.endsWith('.js'));
    const listaCompilada = [];
    let errores = 0;

    archivos.forEach(archivo => {
        try {
            const contenido = fs.readFileSync(path.join(RUTA_DRAMAS, archivo), 'utf8');
            const sandbox = { window: {} };
            const scriptFunction = new Function('window', contenido);
            scriptFunction(sandbox.window);

            const codigoDrama = archivo.replace('.js', '');
            const dramaObjeto = sandbox.window[codigoDrama] || sandbox.window.DRAMA_ACTUAL || sandbox.window.dramaActual;

            if (dramaObjeto) {
                const elementoBiblio = compilarDramaParaBiblioteca(dramaObjeto);
                if (elementoBiblio) listaCompilada.push(elementoBiblio);
            }
        } catch (err) {
            errores++;
            console.error(`❌ Error procesando ${archivo}:`, err.message);
        }
    });

    listaCompilada.sort((a, b) => a.titulo.localeCompare(b.titulo, 'es', { sensitivity: 'base' }));

    const contenidoOutput = `const biblioteca = ${JSON.stringify(listaCompilada, null, 2)};\n`;
    fs.writeFileSync(RUTA_OUTPUT, contenidoOutput, 'utf8');

    console.log(`✅ Finalizado: ${listaCompilada.length} dramas procesados en biblioteca.js.`);
    if (errores > 0) console.log(`⚠️ Archivos omitidos con error: ${errores}`);
}

construirBiblioteca();
