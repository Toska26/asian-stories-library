const fs = require('fs');
const path = require('path');

// 1. Directorio de salida (creará la carpeta /dramas en la raíz)
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

// 4. Extraer los objetos asignados a window.dramaActual
const dramasExtraidos = [];
const bloquesDrama = contenido.split(/window\.dramaActual\s*=\s*/);

bloquesDrama.forEach((bloque, index) => {
    if (index === 0 && !bloque.includes('codigo')) return;

    let strObjeto = bloque.trim();
    if (strObjeto.endsWith(';')) {
        strObjeto = strObjeto.slice(0, -1).trim();
    }

    try {
        const drama = new Function(`return ${strObjeto}`)();
        if (drama && drama.codigo) {
            dramasExtraidos.push(drama);
        }
    } catch (e) {
        console.warn(`⚠️ Advertencia: No se pudo parsear el bloque en el índice ${index}:`, e.message);
    }
});

// 5. Limpieza y formateo según el estándar schema-light
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

// 6. Guardar cada drama en un archivo JSON individual dentro de /dramas/
let contador = 0;
dramasExtraidos.forEach(drama => {
    const dramaLimpio = limpiarSchemaLight(drama);
    const nombreArchivo = `${dramaLimpio.codigo}.json`;
    const rutaDestino = path.join(dirSalida, nombreArchivo);

    fs.writeFileSync(rutaDestino, JSON.stringify(dramaLimpio, null, 2), 'utf8');
    contador++;
});

console.log(`\n✅ ¡Migración completada con éxito!`);
console.log(`📦 Total de dramas procesados desde datos/dramas_old.js a /dramas/: ${contador}`);
