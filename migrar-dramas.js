const fs = require('fs');
const path = require('path');

// 1. Directorio de salida dentro de /datos/dramas
const dirSalida = path.join(__dirname, 'datos', 'dramas');
if (!fs.existsSync(dirSalida)) {
    fs.mkdirSync(dirSalida, { recursive: true });
}

// 2. Ruta al archivo original dentro de /datos/
const rutaArchivoOld = path.join(__dirname, 'datos', 'dramas_old.js');

if (!fs.existsSync(rutaArchivoOld)) {
    console.error('❌ Error: No se encontró el archivo datos/dramas_old.js');
    process.exit(1);
}

// 3. Leer el contenido del archivo
let contenido = fs.readFileSync(rutaArchivoOld, 'utf8');

let dramasExtraidos = [];

try {
    // Como el archivo define 'const DRAMAS = [ ... ]', 
    // evaluamos el código para extraer directamente el array de objetos de JavaScript.
    // Añadimos 'return DRAMAS;' al final del bloque evaluado.
    const evaluarDramas = new Function(`${contenido}; return DRAMAS;`);
    dramasExtraidos = evaluarDramas();
} catch (e) {
    console.error('❌ Error al evaluar el array DRAMAS:', e.message);
    process.exit(1);
}

// 4. Limpieza y formateo según el estándar schema-light
function limpiarSchemaLight(obj) {
    if (Array.isArray(obj)) {
        return obj.map(limpiarSchemaLight).filter(v => v !== null && v !== undefined);
    } else if (obj !== null && typeof obj === 'object') {
        const nuevoObj = {};
        Object.keys(obj).forEach(key => {
            const val = limpiarSchemaLight(obj[key]);
            
            const esVacio = val === null || 
                            val === undefined || 
                            (Array.isArray(val) && val.length === 0) || 
                            (typeof val === 'object' && Object.keys(val).length === 0);
            
            if (!esVacio) {
                // Estandarizar función en personas como Array siempre
                if (key === 'funcion' && typeof val === 'string') {
                    nuevoObj[key] = [val];
                } else {
                    nuevoObj[key] = val;
                }
            }
        });
        return nuevoObj;
    }
    return obj;
}

// 5. Guardar cada drama en un archivo JSON individual dentro de /datos/dramas/
let contador = 0;
if (Array.isArray(dramasExtraidos)) {
    dramasExtraidos.forEach(drama => {
        if (drama && drama.codigo) {
            const dramaLimpio = limpiarSchemaLight(drama);
            const nombreArchivo = `${dramaLimpio.codigo}.json`;
            const rutaDestino = path.join(dirSalida, nombreArchivo);

            fs.writeFileSync(rutaDestino, JSON.stringify(dramaLimpio, null, 2), 'utf8');
            contador++;
        }
    });
}

console.log(`\n✅ ¡Migración completada con éxito!`);
console.log(`📦 Total de dramas procesados desde datos/dramas_old.js a datos/dramas/: ${contador}`);
