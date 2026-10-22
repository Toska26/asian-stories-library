const fs = require('fs');
const path = path = require('path');

// Ruta donde se encuentran tus ficheros individuales de dramas
const directorioDramas = path.join(__dirname, '../datos/dramas');

function ejecutarNormalizacionMasiva() {
    try {
        // 1. Verificar si la carpeta existe
        if (!fs.existsSync(directorioDramas)) {
            console.log(`No se encontró el directorio: ${directorioDramas}`);
            return;
        }

        // 2. Leer todos los archivos del directorio
        const archivos = fs.readdirSync(directorioDramas);
        let archivosModificadosCount = 0;

        archivos.forEach(archivo => {
            // Nos aseguramos de procesar solo ficheros JSON (ej. DR000001.json)
            if (archivo.endsWith('.json')) {
                const rutaArchivo = path.join(directorioDramas, archivo);
                const contenidoRaw = fs.readFileSync(rutaArchivo, 'utf8');
                
                try {
                    let drama = JSON.parse(contenidoRaw);
                    let huboCambios = false;

                    // --- REGLAS DE CAMBIO / NORMALIZACIÓN ---

                    // 1. Normalizar estados (ej. "Finalizado" a "finalizado")
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

                    // 2. Ejemplo de cambio masivo de tipo (si aplica)
                    if (drama.tipo === "Drama") {
                        drama.tipo = "DR";
                        huboCambios = true;
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
