const fs = require('fs');
const path = require('path');

const carpetaDramas = path.join(__dirname, 'dramas');

function formatearCompacto(obj, nivel = 0) {
    const indent = '  '.repeat(nivel);
    if (obj === null || typeof obj !== 'object') return JSON.stringify(obj);

    if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        const esSimple = obj.every(item => typeof item !== 'object' || item === null);
        if (esSimple) return `[${obj.map(item => JSON.stringify(item)).join(', ')}]`;

        const itemsFormateados = obj.map(item => `${indent}  ${JSON.stringify(item)}`);
        return `[\n${itemsFormateados.join(',\n')}\n${indent}]`;
    }

    const llaves = Object.keys(obj);
    if (llaves.length === 0) return '{}';

    const lineas = llaves.map(clave => {
        const valor = obj[clave];
        let valorFormateado;

        if (Array.isArray(valor)) {
            valorFormateado = formatearCompacto(valor, nivel + 1);
        } else if (typeof valor === 'object' && valor !== null) {
            const subLlaves = Object.keys(valor);
            const esObjetoPequeno = subLlaves.every(k => typeof valor[k] !== 'object');
            if (esObjetoPequeno) {
                valorFormateado = JSON.stringify(valor);
            } else {
                valorFormateado = formatearCompacto(valor, nivel + 1);
            }
        } else {
            valorFormateado = JSON.stringify(valor);
        }

        return `${indent}  "${clave}": ${valorFormateado}`;
    });

    return `{\n${lineas.join(',\n')}\n${indent}}`;
}

if (!fs.existsSync(carpetaDramas)) {
    console.error('No se encuentra la carpeta dramas');
    process.exit(1);
}

fs.readdir(carpetaDramas, (err, archivos) => {
    if (err) return console.error(err);
    let procesados = 0;

    archivos.forEach(archivo => {
        if (path.extname(archivo).toLowerCase() === '.json') {
            const ruta = path.join(carpetaDramas, archivo);
            try {
                const contenido = fs.readFileSync(ruta, 'utf8');
                const json = JSON.parse(contenido);
                fs.writeFileSync(ruta, formatearCompacto(json, 0), 'utf8');
                procesados++;
            } catch (e) {
                console.error(`Error en ${archivo}:`, e.message);
            }
        }
    });
    console.log(`¡Formateados ${procesados} archivos correctamente!`);
});
