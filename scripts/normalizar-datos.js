/**
 * @file scripts/normalizar-datos.js
 * @description Realiza una actualización y normalización masiva de los campos 'estado' y 'tipo'
 *              en los archivos JSON individuales de los dramas ubicados en datos/dramas/.
 * @execution Se ejecuta mediante GitHub Actions (.github/workflows/actualizar-datos.yml)
 *            o manualmente desde consola con: node scripts/normalizar-datos.js
 */

const fs = require('fs');
const path = require('path');

// Ruta donde se encuentran tus ficheros individuales de dramas
const directorioDramas = path.join(__dirname, '../datos/dramas');

function ejecutarNormalizacionMasiva() {
    try {
        if (!fs.existsSync(directorioDramas)) {
            console.log(`No se encontró el directorio: ${directorioDramas}`);
            return;
        }

        const archivos = fs.readdirSync(directorioDramas);
        let archivosModificadosCount = 0;

        archivos.forEach(archivo => {
            if (archivo.endsWith('.json')) {
                const rutaArchivo = path.join(directorioDramas, archivo);
                const contenidoRaw = fs.readFileSync(rutaArchivo, 'utf8');
                
                try {
                    let drama = JSON.parse(contenidoRaw);
                    let huboCambios = false;

                    // --- 1. NORMALIZACIÓN DE ESTADOS ---
                    if (drama.estado) {
                        const mapEstados = {
                            "Finalizado": "finalizado",
                            "En emisión": "en_emision",
                            "Próximo estreno": "proximo",
                            "Próximamente": "proximamente",
                            "Anunciado": "anunciado",
                            "Cancelado": "cancelado",
                            "Antiguo": "antiguo"
                        };
                        if (mapEstados[drama.estado]) {
                            drama.estado = mapEstados[drama.estado];
                            huboCambios = true;
                        }
                    }

                    // --- 2. NORMALIZACIÓN DE TIPOS ---
                    if (drama.tipo) {
                        const mapTipos = {
                            "Drama": "DR",
                            "Serie": "SER",
                            "Película": "PEL",
                            "pelicula": "PEL",
                            "Especial": "ESP",
                            "Especial / OVA": "ESP",
                            "Miniserie": "MIN",
                            "Antología": "ANT",
                            "Webdrama": "WEB",
                            "Webserie": "WSR",
                            "Cortometraje": "COR"
                        };
                        if (mapTipos[drama.tipo]) {
                            drama.tipo = mapTipos[drama.tipo];
                            huboCambios = true;
                        }
                    }

                    // --- GUARDAR SI HUBO MODIFICACIONES ---
                    if (huboCambios) {
                        fs.writeFileSync(rutaArchivo, JSON.stringify(drama, null, 2), 'utf8');
                        console.log(`Actualizado: ${archivo}`);
                        archivosModificadosCount++;
                    }

                } catch (parseError) {
                    console.error(`Error al parsear el archivo ${archivo}:`, parseError.message);
                }
            }
        });

        console.log(`¡Proceso finalizado! Se actualizaron ${archivosModificadosCount} ficheros de dramas.`);

    } catch (error) {
        console.error("Error crítico durante la lectura de la carpeta de dramas:", error);
        process.exit(1);
    }
}

ejecutarNormalizacionMasiva();
