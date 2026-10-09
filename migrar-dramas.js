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

// 4. Extraer los objetos asignados a window.dramaActual
const dramasExtraidos = [];
const bloquesDrama = contenido.split(/window\.dramaActual\s*=\s*/);

bloquesDrama.forEach((bloque
