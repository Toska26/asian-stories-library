const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Lista de archivos globales que queremos migrar a JSON
const ARCHIVOS_A_MIGRAR = [
    { js: 'ENTIDADES.js', json: 'ENTIDADES.json', varName: 'ENTIDADES' },
    { js: 'PERSONAS.js', json: 'PERSONAS.json', varName: 'PERSONAS' },
    { js: 'SHIPS.js', json: 'SHIPS.json', varName: 'SHIPS' },
    { js: 'UNIVERSOS.js', json: 'UNIVERSOS.json', varName: 'UNIVERSOS' },
    { js: 'FRANQUICIAS.js', json: 'FRANQUICIAS.json', varName: 'FRANQUICIAS' },
    { js: 'PAISES.js', json: 'PAISES.json', varName: 'PAISES' }
];

const RUTA_DATOS = path.join(__dirname, 'datos');

function migrarArchivoGlobal(item) {
    const rutaJs = path.join(RUTA_DATOS, item.js);
    const rutaJson = path.join(RUTA_DATOS, item.json);

    if (!fs.existsSync(rutaJs)) {
        console.warn(`⚠️ Omitido: No se encontró ${item.js}`);
        return;
    }

    try {
        const contenido = fs.readFileSync(rutaJs, 'utf8');
        
        // Ejecutamos en sandbox de manera segura para extraer la variable
        const sandbox = { window: {} };
        vm.createContext(sandbox);
        vm.runInContext(contenido, sandbox);

        const datos = sandbox[item.varName] || sandbox.window[item.varName];

        if (Array.isArray(datos)) {
            // Guardamos el JSON de forma limpia, tabulado con 2 espacios
            fs.writeFileSync(rutaJson, JSON.stringify(datos, null, 2), 'utf8');
            console.log(`✅ Migrado con éxito: ${item.js} -> ${item.json} (${datos.length} elementos)`);
        } else {
            console.error(`❌ Error: No se encontró el array ${item.varName} en ${item.js}`);
        }
    } catch (error) {
        console.error(`❌ Error al procesar ${item.js}:`, error.message);
    }
}

console.log('🔄 Iniciando migración de archivos globales a formato JSON...\n');
ARCHIVOS_A_MIGRAR.forEach(migrarArchivoGlobal);
console.log('\n✨ Migración finalizada.');
