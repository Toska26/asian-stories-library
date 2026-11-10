/**
 * @file scripts/indice_dramas_alfabetico.js
 * @description Genera dos índices CSV a partir de las fichas JSON:
 *              - indice_dramas_alfabetico.csv: dramas activos.
 *              - indice_dramas_activo_false.csv: dramas con activo === false.
 *              Ambos índices incluyen títulos alternativos y relaciones entre dramas.
 * @execution Se ejecuta automáticamente mediante GitHub Actions (.github/workflows/build-biblioteca.yml)
 *            o manualmente desde consola con: node scripts/indice_dramas_alfabetico.js
 */

const fs = require('fs');
const path = require('path');

const rutaDramas = path.join(__dirname, '..', 'datos', 'dramas');
const carpetaInformacion = path.join(__dirname, '..', 'informacion');
const archivoActivos = path.join(carpetaInformacion, 'indice_dramas_alfabetico.csv');
const archivoInactivos = path.join(carpetaInformacion, 'indice_dramas_activo_false.csv');

const COLUMNAS = [
    'Código',
    'País',
    'Año',
    'Título',
    'Título original',
    'Alias',
    'Temporada',
    'Temporadas',
    'Serie',
    'Universo',
    'Remake',
    'Franquicia'
];

// Excel en configuraciones regionales españolas suele reconocer mejor el punto y coma.
const DELIMITADOR = ';';

function limpiarCampo(valor) {
    if (valor === undefined || valor === null) return '';
    return String(valor).replace(/[\t\r\n]+/g, ' ').trim();
}

function escaparCSV(valor) {
    const texto = limpiarCampo(valor);
    return '"' + texto.replace(/"/g, '""') + '"';
}

function obtenerCodigo(relacion) {
    if (!relacion) return '';
    if (typeof relacion === 'string' || typeof relacion === 'number') {
        return limpiarCampo(relacion);
    }
    if (typeof relacion === 'object') {
        return limpiarCampo(relacion.codigo || relacion.code || '');
    }
    return '';
}

function formatearRelacion(relacion, incluirOrden = false) {
    const codigo = obtenerCodigo(relacion);
    if (!codigo) return '';

    if (incluirOrden && relacion && typeof relacion === 'object' &&
        relacion.orden !== undefined && relacion.orden !== null && relacion.orden !== '') {
        return `${codigo} (orden ${limpiarCampo(relacion.orden)})`;
    }

    return codigo;
}

function prepararRegistro(drama) {
    const pais = Array.isArray(drama.pais)
        ? drama.pais.map(limpiarCampo).filter(Boolean).join(' | ')
        : limpiarCampo(drama.pais);

    const alias = Array.isArray(drama.alias)
        ? drama.alias.map(limpiarCampo).filter(Boolean).join(' | ')
        : limpiarCampo(drama.alias);

    const titulo = limpiarCampo(drama.titulo);

    return [
        limpiarCampo(drama.codigo),
        pais,
        limpiarCampo(drama.anio),
        titulo,
        limpiarCampo(drama.tituloOriginal),
        alias,
        limpiarCampo(drama.temporada),
        limpiarCampo(drama.temporadas),
        formatearRelacion(drama.serie),
        formatearRelacion(drama.universo),
        formatearRelacion(drama.remake, true),
        formatearRelacion(drama.franquicia, true)
    ];
}

function ordenarYGuardar(dramas, archivoSalida, etiqueta) {
    const lista = dramas
        .slice()
        .sort((a, b) => limpiarCampo(a.titulo).localeCompare(
            limpiarCampo(b.titulo), 'es', { sensitivity: 'base' }
        ));

    const lineas = [
        COLUMNAS,
        ...lista.map(prepararRegistro)
    ].map(fila => fila.map(escaparCSV).join(DELIMITADOR));

    // BOM UTF-8 para que Excel interprete correctamente acentos y caracteres asiáticos.
    fs.writeFileSync(archivoSalida, '\uFEFF' + lineas.join('\r\n') + '\r\n', 'utf8');
    console.log(`✅ ${etiqueta}: ${lista.length} ficha(s) en ${archivoSalida}`);
}

function leerDramas() {
    if (!fs.existsSync(rutaDramas)) {
        throw new Error('No existe la carpeta datos/dramas');
    }

    const archivos = fs.readdirSync(rutaDramas)
        .filter(archivo => archivo.toLowerCase().endsWith('.json'))
        .sort();

    const dramas = [];

    archivos.forEach(archivo => {
        const ruta = path.join(rutaDramas, archivo);
        try {
            const drama = JSON.parse(fs.readFileSync(ruta, 'utf8'));
            if (drama && drama.codigo) {
                dramas.push(drama);
            }
        } catch (error) {
            throw new Error(`Error al procesar ${archivo}: ${error.message}`);
        }
    });

    return dramas;
}

try {
    fs.mkdirSync(carpetaInformacion, { recursive: true });

    const dramas = leerDramas();
    const dramasActivos = dramas.filter(drama => drama.activo !== false);
    const dramasInactivos = dramas.filter(drama => drama.activo === false);

    ordenarYGuardar(dramasActivos, archivoActivos, 'Índice CSV de activos generado');
    ordenarYGuardar(dramasInactivos, archivoInactivos, 'Índice CSV de activo: false generado');
} catch (error) {
    console.error('❌ Error al generar los índices:', error.message);
    process.exit(1);
}
