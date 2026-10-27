/**
 * @file scripts/build-indices.js
 * @description Procesa los archivos de la carpeta datos/dramas para generar los índices cruzados
 *              independientes (personas_dramas.js, ships_dramas.js, entidades_dramas.js) en la carpeta datos/.
 * @execution Se ejecuta automáticamente mediante GitHub Actions (.github/workflows/build-biblioteca.yml)
 *            o manualmente desde consola con: node scripts/build-indices.js
 */

const fs = require('fs');
const path = require('path');

// Configuración de rutas ajustada a la nueva ubicación en scripts/
const RUTA_DRAMAS = path.join(__dirname, '..', 'datos', 'dramas');
const RUTA_INDEX_PERSONAS = path.join(__dirname, '..', 'datos', 'personas_dramas.js');
const RUTA_INDEX_SHIPS = path.join(__dirname, '..', 'datos', 'ships_dramas.js');
const RUTA_INDEX_ENTIDADES = path.join(__dirname, '..', 'datos', 'entidades_dramas.js');

function construirIndicesCruzados() {
    console.log('🔄 Generando índices cruzados independientes...');

    if (!fs.existsSync(RUTA_DRAMAS)) {
        console.error('❌ Error: No existe la carpeta:', RUTA_DRAMAS);
        process.exit(1);
    }

    const archivos = fs.readdirSync(RUTA_DRAMAS).filter(f => f.endsWith('.json'));
    
    const indexPersonas = {};
    const indexShips = {};
    const indexEntidades = {};

    archivos.forEach(archivo => {
        const rutaArchivo = path.join(RUTA_DRAMAS, archivo);
        try {
            const contenido = fs.readFileSync(rutaArchivo, 'utf8');
            const drama = JSON.parse(contenido);

            if (drama && drama.codigo && drama.activo !== false) {
                // 1. Personas
                if (Array.isArray(drama.personas)) {
                    drama.personas.forEach(p => {
                        const codPersona = typeof p === 'object' ? (p.persona || p.codigo) : p;
                        if (codPersona) {
                            if (!indexPersonas[codPersona]) indexPersonas[codPersona] = [];
                            if (!indexPersonas[codPersona].includes(drama.codigo)) {
                                indexPersonas[codPersona].push(drama.codigo);
                            }
                        }
                    });
                }

                // 2. Ships
                if (Array.isArray(drama.ships)) {
                    drama.ships.forEach(s => {
                        const codShip = typeof s === 'object' ? (s.ship || s.codigo) : s;
                        if (codShip) {
                            if (!indexShips[codShip]) indexShips[codShip] = [];
                            if (!indexShips[codShip].includes(drama.codigo)) {
                                indexShips[codShip].push(drama.codigo);
                            }
                        }
                    });
                }

                // 3. Entidades
                if (Array.isArray(drama.entidades)) {
                    drama.entidades.forEach(e => {
                        const codEnt = typeof e === 'object' ? (e.codigo || e.entidad) : e;
                        if (codEnt) {
                            if (!indexEntidades[codEnt]) indexEntidades[codEnt] = [];
                            if (!indexEntidades[codEnt].includes(drama.codigo)) {
                                indexEntidades[codEnt].push(drama.codigo);
                            }
                        }
                    });
                }
            }
        } catch (error) {
            console.error(`❌ Error al procesar ${archivo} para índices:`, error.message);
        }
    });

    // Guardar los tres ficheros de índices
    fs.writeFileSync(RUTA_INDEX_PERSONAS, `window.INDEX_PERSONAS = ${JSON.stringify(indexPersonas, null, 2)};`, 'utf8');
    fs.writeFileSync(RUTA_INDEX_SHIPS, `window.INDEX_SHIPS = ${JSON.stringify(indexShips, null, 2)};`, 'utf8');
    fs.writeFileSync(RUTA_INDEX_ENTIDADES, `window.INDEX_ENTIDADES = ${JSON.stringify(indexEntidades, null, 2)};`, 'utf8');

    console.log(`✅ Índices cruzados actualizados con éxito en la carpeta 'datos/'.`);
}

construirIndicesCruzados();
