/**
 * @file scripts/actualizar_masivo.js
 * @description Realiza una actualización masiva y fusionada de los dramas a partir de un fichero 
 *              de lotes ubicado en informacion/actualizacion_masiva.json y regenera la biblioteca automáticamente.
 * @execution Se ejecuta mediante GitHub Actions (.github/workflows/actualizar_masivo.yml)
 *            o manualmente desde consola con: node scripts/actualizar_masivo.js
 */

const fs = require('fs');
const path = require('path');

// Rutas ajustadas a la nueva ubicación dentro de la carpeta scripts/
const carpetaDramas = path.join(__dirname, '..', 'datos', 'dramas');
const rutaActualizaciones = path.join(__dirname, '..', 'informacion', 'actualizacion_masiva.json');

if (!fs.existsSync(carpetaDramas) || !fs.existsSync(rutaActualizaciones)) {
    console.error('❌ No se encuentra la carpeta dramas o el archivo de actualizaciones en informacion/actualizacion_masiva.json');
    process.exit(1);
}

/**
 * Función auxiliar recursiva para fusionar objetos y arrays de forma inteligente
 */
function fusionarDatos(destino, fuente) {
    for (const clave of Object.keys(fuente)) {
        if (fuente[clave] && typeof fuente[clave] === 'object' && !Array.isArray(fuente[clave])) {
            if (!destino[clave] || typeof destino[clave] !== 'object') {
                destino[clave] = {};
            }
            fusionarDatos(destino[clave], fuente[clave]);
        } else if (Array.isArray(fuente[clave])) {
            destino[clave] = fuente[clave];
        } else {
            destino[clave] = fuente[clave];
        }
    }
}

try {
    const contenidoLote = fs.readFileSync(rutaActualizaciones, 'utf8');
    const listaActualizaciones = JSON.parse(contenidoLote);

    if (!Array.isArray(listaActualizaciones)) {
        console.error('❌ El archivo de actualización masiva debe ser un array de objetos JSON.');
        process.exit(1);
    }

    let actualizados = 0;
    let noEncontrados = 0;

    console.log(`\n🔄 Iniciando actualización masiva de ${listaActualizaciones.length} registros...\n`);

    listaActualizaciones.forEach(item => {
        const codigoBuscado = item.codigo;
        if (!codigoBuscado) {
            console.warn('⚠️ Se encontró un elemento en el JSON sin código definido. Se omite.');
            return;
        }

        // Buscamos el archivo JSON del drama correspondiente al código
        const archivos = fs.readdirSync(carpetaDramas);
        const archivoEncontrado = archivos.find(arch => {
            if (path.extname(arch).toLowerCase() === '.json') {
                try {
                    const contenidoDrama = fs.readFileSync(path.join(carpetaDramas, arch), 'utf8');
                    const jsonDrama = JSON.parse(contenidoDrama);
                    return jsonDrama.codigo === codigoBuscado;
                } catch (e) {
                    return false;
                }
            }
            return false;
        });

        if (archivoEncontrado) {
            const rutaDrama = path.join(carpetaDramas, archivoEncontrado);
            try {
                const contenidoDrama = fs.readFileSync(rutaDrama, 'utf8');
                let dramaObj = JSON.parse(contenidoDrama);

                // Aplicamos las modificaciones del lote sobre el objeto actual del drama
                fusionarDatos(dramaObj, item);

                // Guardamos el drama actualizado con formato de 4 espacios
                fs.writeFileSync(rutaDrama, JSON.stringify(dramaObj, null, 4), 'utf8');
                console.log(`✅ [Actualizado] ${codigoBuscado} (${archivoEncontrado})`);
                actualizados++;
            } catch (e) {
                console.error(`⚠️ Error procesando el archivo ${archivoEncontrado}:`, e.message);
            }
        } else {
            console.log(`❌ [No encontrado] No existe ningún drama con el código ${codigoBuscado}`);
            noEncontrados++;
        }
    });

    console.log(`\n--------------------------------------------------`);
    console.log(`📊 Resumen: ${actualizados} actualizados, ${noEncontrados} no encontrados.`);

    // 🚀 AUTOMATIZACIÓN: Disparamos la generación del biblioteca.js y el índice alfabético
    if (actualizados > 0) {
        console.log(`\n⚙️ Regenerando 'biblioteca.js' e índices automáticamente...`);
        try {
            // Reutilizamos el script de construcción de la biblioteca ubicado en la misma carpeta scripts/
            require('./build-biblioteca.js');
            console.log(`✅ ¡Biblioteca e índices regenerados con éxito!`);
        } catch (errorBulid) {
            console.error(`⚠️ Hubo un error al regenerar la biblioteca automáticamente:`, errorBulid.message);
        }
    }

} catch (e) {
    console.error('❌ Error al leer el fichero de actualizaciones masivas:', e.message);
}
