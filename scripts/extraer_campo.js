/**
 * @file scripts/extraer_campo.js
 * @description Extrae de forma masiva los valores de un campo específico (incluso anidado) de los archivos JSON 
 *              de dramas y genera un informe en formato de texto plano dentro de la carpeta informacion/.
 * @execution Se ejecuta mediante GitHub Actions (.github/workflows/extraer.yml)
 *            o manualmente desde consola con: node scripts/extraer_campo.js
 */

const fs = require('fs');
const path = require('path');

// Rutas ajustadas a la nueva ubicación dentro de la carpeta scripts/
const carpetaDramas = path.join(__dirname, '..', 'datos', 'dramas'); 
const carpetaInformacion = path.join(__dirname, '..', 'informacion');

// 🔍 CAMBIA AQUÍ EL CAMPO QUE QUIERES EXTRAER Y VER SU VALOR
// Ejemplos: "sinopsis", "anio", "multimedia.portada", "tituloOriginal"
const campoABuscar = "multimedia.portada"; 

function obtenerValorAnidado(obj, ruta) {
    return ruta.split('.').reduce((acc, parte) => (acc && acc[parte] !== undefined) ? acc[parte] : undefined, obj);
}

if (!fs.existsSync(carpetaDramas)) {
    console.error('No se encuentra la carpeta dramas');
    process.exit(1);
}

if (!fs.existsSync(carpetaInformacion)) {
    fs.mkdirSync(carpetaInformacion, { recursive: true });
}

try {
    const archivos = fs.readdirSync(carpetaDramas);
    let encontrados = 0;
    let lineasResultado = [];
    
    lineasResultado.push(`📋 Extracción del campo: [ ${campoABuscar} ] (Dramas que SÍ lo tienen informado)`);
    lineasResultado.push(`----------------------------------------------------------------------------------`);

    archivos.forEach(archivo => {
        if (path.extname(archivo).toLowerCase() === '.json') {
            const ruta = path.join(carpetaDramas, archivo);
            try {
                const contenido = fs.readFileSync(ruta, 'utf8');
                const drama = JSON.parse(contenido);
                
                const valor = obtenerValorAnidado(drama, campoABuscar);

                const estaVacio = 
                    valor === null || 
                    valor === undefined || 
                    valor === "" || 
                    (Array.isArray(valor) && valor.length === 0);

                // 💡 FILTRO INVERSO: Solo procesamos los que SÍ tienen información
                if (!estaVacio) {
                    encontrados++;
                    const codigo = drama.codigo || 'SIN-CODIGO';
                    const pais = (Array.isArray(drama.pais) && drama.pais.length > 0) ? drama.pais[0] : '??';
                    const anio = drama.anio || '????';
                    const titulo = drama.titulo || archivo;

                    // Formateamos el valor según si es un array, un objeto o un texto simple
                    let valorTexto = '';
                    if (Array.isArray(valor)) {
                        valorTexto = valor.join(', ');
                    } else if (typeof valor === 'object') {
                        valorTexto = JSON.stringify(valor);
                    } else {
                        valorTexto = String(valor);
                    }

                    // Formato de línea: Código \t País \t Año \t Título \t Valor del campo
                    lineasResultado.push(`${codigo}\t${pais}\t${anio}\t${titulo}\t${valorTexto}`);
                }
            } catch (e) {
                console.error(`⚠️ Error leyendo ${archivo}:`, e.message);
            }
        }
    });

    lineasResultado.push(`----------------------------------------------------------------------------------`);
    lineasResultado.push(`📊 Total dramas con el campo "${campoABuscar}" informado: ${encontrados}`);

    // Transformamos el nombre del campo para el archivo de salida (ej: multimedia_portada)
    const campoParaNombre = campoABuscar.replace(/\./g, '_');
    const nombreArchivo = `extraccion_campo_${campoParaNombre}.txt`;
    const archivoSalida = path.join(carpetaInformacion, nombreArchivo);

    fs.writeFileSync(archivoSalida, lineasResultado.join('\n'), 'utf8');
    
    console.log(`¡Extracción completada! Fichero guardado en informacion/${nombreArchivo}`);

} catch (err) {
    console.error('Error durante la ejecución:', err);
}
