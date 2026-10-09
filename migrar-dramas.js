const fs = require('fs');
const path = require('path');

// 1. Directorio de salida
const dirSalida = path.join(__dirname, 'dramas');
if (!fs.existsSync(dirSalida)) {
    fs.mkdirSync(dirSalida, { recursive: true });
}

// 2. Ruta al archivo original
const rutaArchivoOld = path.join(__dirname, 'DRAMAS_old.js');

if (!fs.existsSync(rutaArchivoOld)) {
    console.error('❌ Error: No se encontró el archivo dramas_old.js');
    process.exit(1);
}

// 3. Leer el contenido del archivo
let contenido = fs.readFileSync(rutaArchivoOld, 'utf8');

// 4. Extraer todos los objetos asignados a window.dramaActual o dentro de un array/objetos sueltos
// Buscamos patrones de objetos JavaScript y los evaluamos de forma segura
const dramasExtraidos = [];

// Expresión regular o aislamiento de objetos asignados a window.dramaActual
const bloquesDrama = contenido.split(/window\.dramaActual\s*=\s*/);

bloquesDrama.forEach((bloque, index) => {
    if (index === 0 && !bloque.includes('codigo')) return; // Ignorar cabecera si no tiene datos

    // Limpiar comentarios sobrantes al final del bloque si los hay
    let strObjeto = bloque.trim();
    if (strObjeto.endsWith(';')) {
        strObjeto = strObjeto.slice(0, -1).trim();
    }

    try {
        // Evaluar el objeto JavaScript usando Function para interpretar objetos JS flexibles
        const drama = new Function(`return ${strObjeto}`)();
        if (drama && drama.codigo) {
            dramasExtraidos.push(drama);
        }
    } catch (e) {
        // Si hay varios en un array o formato alternativo
        console.warn(`⚠️ Advertencia: No se pudo parsear un bloque en el índice ${index}:`, e.message);
    }
});

// 5. Limpieza y formateo según la filosofía schema-light
function limpiarSchemaLight(obj) {
    if (Array.isArray(obj)) {
        return obj.map(limpiarSchemaLight).filter(v => v !== null && v !== undefined);
    } else if (obj !== null && typeof obj === 'object') {
        const nuevoObj = {};
        Object.keys(obj).forEach(key => {
            const val = limpiarSchemaLight(obj[key]);
            // Omitir valores nulos, undefined, arrays vacíos u objetos vacíos
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

// 6. Guardar cada drama en un archivo JSON individual
let contador = 0;
dramasExtraidos.forEach(drama => {
    const dramaLimpio = limpiarSchemaLight(drama);
    
    // Usamos el código (ej: DR000002.json) o el título simplificado como nombre
    const nombreArchivo = `${dramaLimpio.codigo}.json`;
    const rutaDestino = path.join(dirSalida, nombreArchivo);

    fs.writeFileSync(rutaDestino, JSON.stringify(dramaLimpio, null, 2), 'utf8');
    contador++;
});

console.log(`\n✅ ¡Migración completada con éxito!`);
console.log(`📦 Total de dramas procesados y guardados en /dramas/: ${contador}`);
