const fs = require('fs');
const path = require('path');
const vm = require('vm');

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
        console.warn(`⚠️ Omitido: No se encontró el archivo ${item.js}`);
        return;
    }

    try {
        const contenido = fs.readFileSync(rutaJs, 'utf8');
        
        const sandbox = { window: {} };
        sandbox.window = sandbox;
        vm.createContext(sandbox);
        
        // Ejecutamos el contenido dentro del sandbox
        vm.runInContext(contenido, sandbox);

        // Intentamos extraer la variable de múltiples formas posibles
        let datos = sandbox[item.varName] || sandbox.window[item.varName];

        if (!datos) {
            try {
                // Forzamos la evaluación devolviendo la variable explícitamente
                datos = vm.runInContext(`(function() { ${contenido}; return (typeof ${item.varName} !== 'undefined' ? ${item.varName} : null); })()`, sandbox);
            } catch (e) {
                datos = null;
            }
        }

        if (Array.isArray(datos)) {
            fs.writeFileSync(rutaJson, JSON.stringify(datos, null, 2), 'utf8');
            console.log(`✅ Migrado con éxito: ${item.js} -> ${item.json} (${datos.length} elementos)`);
        } else {
            console.error(`❌ Error: No se pudo localizar el array '${item.varName}' dentro de ${item.js}`);
        }
    } catch (error) {
        console.error(`❌ Error al procesar ${item.js}:`, error.message);
    }
}

console.log('🔄 Iniciando conversión robusta de ficheros globales JS a JSON...\n');
ARCHIVOS_A_MIGRAR.forEach(migrarArchivoGlobal);
console.log('\n✨ Proceso de migración finalizado.');
