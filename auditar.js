const fs = require('fs');
const path = require('path');

const carpetaDramas = path.join(__dirname, 'dramas');

// 🔍 CAMBIA AQUÍ EL CAMPO QUE QUIERES BUSCAR
// Ejemplos: "sinopsis", "tituloOriginal", "multimedia.portada", "anio", "ships"
const campoABuscar = "sinopsis"; 

function obtenerValorAnidado(obj, ruta) {
    return ruta.split('.').reduce((acc, parte) => (acc && acc[parte] !== undefined) ? acc[parte] : undefined, obj);
}

if (!fs.existsSync(carpetaDramas)) {
    console.error('No se encuentra la carpeta dramas');
    process.exit(1);
}

fs.readdir(carpetaDramas, (err, archivos) => {
    if (err) return console.error(err);

    let incompletos = 0;
    console.log(`\n🔎 Auditoría de campo: [ ${campoABuscar} ]\n--------------------------------------------------`);

    archivos.forEach(archivo => {
        if (path.extname(archivo).toLowerCase() === '.json') {
            const ruta = path.join(carpetaDramas, archivo);
            try {
                const contenido = fs.readFileSync(ruta, 'utf8');
                const drama = JSON.parse(contenido);
                
                const valor = obtenerValorAnidado(drama, campoABuscar);

                // Criterio de "falta de información": es null, undefined, cadena vacía o array vacío
                const estaVacio = 
                    valor === null || 
                    valor === undefined || 
                    valor === "" || 
                    (Array.isArray(valor) && valor.length === 0);

                if (estaVacio) {
                    incompletos++;
                    console.log(`❌ [Falta] ${drama.codigo} - ${drama.titulo || archivo}`);
                }
            } catch (e) {
                console.error(`⚠️ Error leyendo ${archivo}:`, e.message);
            }
        }
    });

    console.log(`--------------------------------------------------`);
    console.log(`📊 Resultado: ${incompletos} dramas encontrados sin el campo "${campoABuscar}".\n`);
});
