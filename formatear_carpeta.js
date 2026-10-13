const fs = require('fs');
const path = require('path');

// Ruta a la carpeta donde están tus dramas
const carpetaDramas = path.join(__dirname, 'dramas');

// Función para compactar objetos/arrays en 1 línea
function formatearCompacto(obj, nivel = 0) {
    const indent = '  '.repeat(nivel);
    
    if (obj === null || typeof obj !== 'object') {
        return JSON.stringify(obj);
    }

    if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        
        // Comprueba si es un array simple (paises, generos, tags)
        const esSimple = obj.every(item => typeof item !== 'object' || item === null);
        if (esSimple) {
            const elementos = obj.map(item => JSON.stringify(item)).join(', ');
            return `[${elementos}]`;
        }

        // Para arrays de objetos (personas, ships, entidades, etc.)
        const itemsFormateados = obj.map(item => {
            const jsonLinea = JSON.stringify(item);
            return `${indent}  ${jsonLinea}`;
        });

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

// Recorrer todos los archivos de la carpeta
fs.readdir(carpetaDramas, (err, archivos) => {
    if (err) {
        console.error('Error al leer la carpeta dramas:', err);
        return;
    }

    let procesados = 0;

    archivos.forEach(archivo => {
        if (path.extname(archivo).toLowerCase() === '.json') {
            const rutaCompleta = path.join(carpetaDramas, archivo);
            try {
                const contenido = fs.readFileSync(rutaCompleta, 'utf8');
                const jsonParsed = JSON.parse(contenido);
                const jsonFormateado = formatearCompacto(jsonParsed, 0);

                fs.writeFileSync(rutaCompleta, jsonFormateado, 'utf8');
                procesados++;
                console.log(`✓ Formateado: ${archivo}`);
            } catch (e) {
                console.error(`✕ Error procesando ${archivo}:`, e.message);
            }
        }
    });

    console.log(`\n¡Proceso terminado! Se han formateado ${procesados} archivos.`);
});
