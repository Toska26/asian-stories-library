/**
 * @file scripts/generar-indices.js
 * @description Genera un índice cruzado filtrado por el campo 'origen' de los dramas 
 *              y lo guarda en datos/indices.json bajo demanda.
 * @execution Se ejecuta mediante GitHub Actions (.github/workflows/generar-indices.yml)
 *            o manualmente desde consola con: node scripts/generar-indices.js
 */

const fs = require('fs');
const path = require('path');

// Rutas ajustadas a la nueva ubicación dentro de la carpeta scripts/
const CARPETA_DRAMAS = path.join(__dirname, '..', 'datos', 'dramas');
const CARPETA_DATOS = path.join(__dirname, '..', 'datos');

function generarIndicesBajoDemanda() {
    try {
        if (!fs.existsSync(CARPETA_DRAMAS)) {
            console.error("❌ No se encuentra la carpeta de dramas.");
            return;
        }

        const archivos = fs.readdirSync(CARPETA_DRAMAS);
        const resumen = [];

        archivos.forEach(archivo => {
            if (archivo.endsWith('.json')) {
                const ruta = path.join(CARPETA_DRAMAS, archivo);
                try {
                    const drama = JSON.parse(fs.readFileSync(ruta, 'utf8'));
                    
                    // Comprobación estricta: solo si tiene "origen" y no está vacío/nulo
                    const tieneOrigen = drama.origen !== undefined && 
                                        drama.origen !== null && 
                                        drama.origen !== "" && 
                                        !(Array.isArray(drama.origen) && drama.origen.length === 0);

                    if (tieneOrigen) {
                        resumen.push({
                            codigo: drama.codigo,
                            titulo: drama.titulo || "Sin título",
                            anio: drama.anio || "",
                            origen: drama.origen
                        });
                    }
                } catch (e) {
                    console.warn(`⚠️ Error leyendo ${archivo}:`, e.message);
                }
            }
        });

        const rutaSalida = path.join(CARPETA_DATOS, 'indices.json');
        fs.writeFileSync(rutaSalida, JSON.stringify(resumen, null, 2), 'utf8');
        console.log(`✅ ¡Índice de origen generado con éxito! ${resumen.length} dramas con origen incluidos.`);

    } catch (error) {
        console.error("❌ Error al generar indices:", error);
    }
}

generarIndicesBajoDemanda();
