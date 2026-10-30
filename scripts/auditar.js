/**
 * @file scripts/auditar.js
 * @description Realiza una auditoría sobre un campo específico de los archivos JSON de dramas
 *              y genera un informe detallado en formato de texto plano dentro de la carpeta informacion/.
 * @execution Se ejecuta mediante GitHub Actions (.github/workflows/auditar.yml)
 *            o manualmente desde consola con: node scripts/auditar.js
 */

const fs = require('fs');
const path = require('path');

// Rutas ajustadas a la nueva ubicación dentro de la carpeta scripts/
const carpetaDramas = path.join(__dirname, '..', 'datos', 'dramas'); 
const carpetaInformacion = path.join(__dirname, '..', 'informacion');

// 🔍 CAMBIA AQUÍ EL CAMPO QUE QUIERES AUDITAR CUANDO LO NECESITES
//const campoABuscar = "multimedia.portada"; 
const campoABuscar = "entidades"; 

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
    let incompletos = 0;
    let lineasResultado = [];
    
    lineasResultado.push(`🔎 Auditoría de campo: [ ${campoABuscar} ]`);
    lineasResultado.push(`--------------------------------------------------`);

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

                if (estaVacio) {
                    incompletos++;
                    const codigo = drama.codigo || 'SIN-CODIGO';
                    const pais = (Array.isArray(drama.pais) && drama.pais.length > 0) ? drama.pais[0] : '??';
                    const anio = drama.anio || '????';
                    const titulo = drama.titulo || archivo;

                    lineasResultado.push(`${codigo}\t${pais}\t${anio}\t${titulo}`);
                }
            } catch (e) {
                console.error(`⚠️ Error leyendo ${archivo}:`, e.message);
            }
        }
    });

    lineasResultado.push(`--------------------------------------------------`);
    lineasResultado.push(`📊 Total dramas sin el campo "${campoABuscar}": ${incompletos}`);

    const campoParaNombre = campoABuscar.replace(/\./g, '_');
    const nombreArchivo = `informe_auditoria_${campoParaNombre}.txt`;
    const archivoSalida = path.join(carpetaInformacion, nombreArchivo);

    fs.writeFileSync(archivoSalida, lineasResultado.join('\n'), 'utf8');
    console.log(`¡Auditoría completada! Fichero guardado en informacion/${nombreArchivo}`);

} catch (err) {
    console.error('Error durante la lectura de la carpeta dramas:', err);
}
