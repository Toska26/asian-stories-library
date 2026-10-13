const fs = require('fs');
const path = require('path');

const carpetaDramas = path.join(__dirname, 'datos', 'dramas');
const rutaPlantilla = path.join(__dirname,'informacion', 'plantilla.json');
const carpetaInformacion = path.join(__dirname, 'informacion');

if (!fs.existsSync(carpetaDramas) || !fs.existsSync(rutaPlantilla)) {
    console.error('No se encuentra la carpeta dramas o el archivo plantilla.json');
    process.exit(1);
}

if (!fs.existsSync(carpetaInformacion)) {
    fs.mkdirSync(carpetaInformacion, { recursive: true });
}

// Función auxiliar para comprobar si un valor se considera "vacío" o sin informar
function estaVacio(valor) {
    if (valor === null || valor === undefined || valor === "") return true;
    if (Array.isArray(valor) && valor.length === 0) return true;
    if (typeof valor === 'object' && !Array.isArray(valor)) {
        // Si es un objeto (como multimedia), comprobamos si todas sus propiedades están vacías
        const keys = Object.keys(valor);
        if (keys.length === 0) return true;
        return keys.every(k => estaVacio(valor[k]));
    }
    return false;
}

try {
    const plantillaContenido = fs.readFileSync(rutaPlantilla, 'utf8');
    const plantilla = JSON.parse(plantillaContenido);
    // Extraemos las claves principales a auditar (excluyendo 'codigo' y 'activo' si siempre vienen dados)
    const clavesPlantilla = Object.keys(plantilla).filter(k => k !== 'codigo' && k !== 'activo');

    fs.readdir(carpetaDramas, (err, archivos) => {
        if (err) return console.error('Error leyendo dramas:', err);

        let lineasResultado = [];
        lineasResultado.push(`🔎 AUDITORÍA GENERAL DE CAMPOS (Basada en plantilla.json)`);
        lineasResultado.push(`==================================================\n`);

        let dramasConFaltas = 0;

        archivos.forEach(archivo => {
            if (path.extname(archivo).toLowerCase() === '.json') {
                const rutaDrama = path.join(carpetaDramas, archivo);
                try {
                    const drama = JSON.parse(fs.readFileSync(rutaDrama, 'utf8'));
                    let camposFaltantes = [];

                    clavesPlantilla.forEach(campo => {
                        const valorDrama = drama[campo];
                        if (estaVacio(valorDrama)) {
                            camposFaltantes.push(campo);
                        }
                    });

                   if (camposFaltantes.length > 0) {
                        dramasConFaltas++;
                        const codigo = drama.codigo || 'SIN-CODIGO';
                        const pais = (Array.isArray(drama.pais) && drama.pais.length > 0) ? drama.pais[0] : '??';
                        const anio = drama.anio || '????';
                        const titulo = drama.titulo || archivo;

                        // 💡 Corregido con backticks (``) para que interpole bien las variables
                        lineasResultado.push(`[${codigo}] (${pais} - ${anio})${titulo}`);
                        lineasResultado.push(`   ❌ Falta / Vacío: \${camposFaltantes.join(', ')}`);
                        lineasResultado.push(``);
                    }
                } catch (e) {
                    console.error(`⚠️ Error leyendo ${archivo}:`, e.message);
                }
            }
        });

        lineasResultado.push(`==================================================`);
        lineasResultado.push(`📊 Total de dramas revisados con campos incompletos: ${dramasConFaltas}`);

        const archivoSalida = path.join(carpetaInformacion, 'informe_auditoria_general.txt');
        fs.writeFileSync(archivoSalida, lineasResultado.join('\n'), 'utf8');

        console.log(`¡Auditoría general completada! Fichero guardado en informacion/informe_auditoria_general.txt`);
    });

} catch (e) {
    console.error('Error al procesar la plantilla.json:', e.message);
}
