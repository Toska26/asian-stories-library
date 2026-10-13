const fs = require('fs');
const path = require('path');

// Ajusta la ruta de la carpeta dramas según tu estructura (ej. si está dentro de datos/dramas, pon path.join(__dirname, 'datos', 'dramas'))
const carpetaDramas = path.join(__dirname,'datos', 'dramas'); 
const carpetaInformacion = path.join(__dirname, 'informacion');

// 🔍 CAMBIA AQUÍ EL CAMPO QUE QUIERES BUSCAR
const campoABuscar = "sinopsis"; 

function obtenerValorAnidado(obj, ruta) {
    return ruta.split('.').reduce((acc, parte) => (acc && acc[parte] !== undefined) ? acc[parte] : undefined, obj);
}

if (!fs.existsSync(carpetaDramas)) {
    console.error('No se encuentra la carpeta dramas');
    process.exit(1);
}

// Asegurar que la carpeta informacion existe
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
                    lineasResultado.push(`[Falta] ${drama.codigo || 'SIN-CODIGO'} - ${drama.titulo || archivo}`);
                }
            } catch (e) {
                console.error(`⚠️ Error leyendo ${archivo}:`, e.message);
            }
        }
    });

    lineasResultado.push(`--------------------------------------------------`);
    lineasResultado.push(`📊 Resultado: ${incompletos} dramas encontrados sin el campo "${campoABuscar}".`);

    // Guardar el resultado en la carpeta informacion
    const archivoSalida = path.join(carpetaInformacion, `auditoria_${campoABuscar.replace('.', '_')}.txt`);
    fs.writeFileSync(archivoSalida, lineasResultado.join('\n'), 'utf8');
    
    console.log(`¡Auditoría completada! Archivo guardado en: ${archivoSalida}`);
});
