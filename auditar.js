const fs = require('fs');
const path = require('path');

// Ajusta si tu carpeta de dramas está en 'datos/dramas' o solo en 'dramas'
const carpetaDramas = path.join(__dirname, 'datos', 'dramas'); 
const carpetaInformacion = path.join(__dirname, 'informacion');

// 🔍 CAMBIA AQUÍ EL CAMPO QUE QUIERES AUDITAR CUANDO LO NECESITES
// Ejemplos: "sinopsis", "tituloOriginal", "multimedia.portada", "anio"
const campoABuscar = "sinopsis"; 

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

fs.readdir(carpetaDramas, (err, archivos) => {
    if (err) return console.error(err);

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
                    lineasResultado.push(`${drama.codigo || 'SIN-CODIGO'}\t${drama.titulo || archivo}`);
                }
            } catch (e) {
                console.error(`⚠️ Error leyendo ${archivo}:`, e.message);
            }
        }
    });

    lineasResultado.push(`--------------------------------------------------`);
    lineasResultado.push(`📊 Total dramas sin el campo "${campoABuscar}": ${incompletos}`);

    const archivoSalida = path.join(carpetaInformacion, 'informe_auditoria.txt');
    fs.writeFileSync(archivoSalida, lineasResultado.join('\n'), 'utf8');
    
    console.log(`¡Auditoría completada! Fichero guardado en informacion/informe_auditoria.txt`);
});
