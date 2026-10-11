const fs = require('fs');
const path = require('path');

const CARPETA_DRAMAS = path.join(__dirname, 'datos', 'dramas');
const CARPETA_DATOS = path.join(__dirname, 'datos');

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
                    resumen.push({
                        codigo: drama.codigo,
                        titulo: drama.titulo || "Sin título",
                        anio: drama.anio || "",
                        origen: drama.origen || null,
                        especiales: drama.especiales || [],
                        relaciones: drama.relaciones || []
                    });
                } catch (e) {
                    console.warn(`⚠️ Error leyendo ${archivo}:`, e.message);
                }
            }
        });

        const rutaSalida = path.join(CARPETA_DATOS, 'indices.json');
        fs.writeFileSync(rutaSalida, JSON.stringify(resumen, null, 2), 'utf8');
        console.log(`✅ ¡Índice generado con éxito! ${resumen.length} dramas procesados.`);

    } catch (error) {
        console.error("❌ Error al generar indices:", error);
    }
}

generarIndicesBajoDemanda();
