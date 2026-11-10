/**
 * @file scripts/indice_dramas_alfabetico.js
 * @description Genera dos índices de control a partir de las fichas JSON:
 *              - indice_dramas_alfabetico.txt: dramas activos.
 *              - indice_dramas_activo_false.txt: dramas con activo === false.
 *              Ambos índices incluyen títulos alternativos y relaciones entre dramas.
 * @execution Se ejecuta automáticamente mediante GitHub Actions (.github/workflows/build-biblioteca.yml)
 *            o manualmente desde consola con: node scripts/indice_dramas_alfabetico.js
 */

const fs = require('fs');
const path = require('path');

const rutaDramas = path.join(__dirname, '..', 'datos', 'dramas');
const carpetaInformacion = path.join(__dirname, '..', 'informacion');
const archivoActivos = path.join(carpetaInformacion, 'indice_dramas_alfabetico.txt');
const archivoInactivos = path.join(carpetaInformacion, 'indice_dramas_activo_false.txt');

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

function limpiarCampo(valor) {
    if (valor === undefined || valor === null) return '';
    return String(valor).replace(/[\\t\\r\\n]+/g, ' ').trim();
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

    if (incluirOrden && relacion && typeof relacion === 'object' && relacion.orden !== undefined && relacion.orden !== null && relacion.orden !== '') {
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

    return {
        codigo: limpiarCampo(drama.codigo),
        pais,
        anio: limpiarCampo(drama.anio),
        titulo,
        tituloOriginal: limpiarCampo(drama.tituloOriginal),
        alias,
        temporada: limpiarCampo(drama.temporada),
        temporadas: limpiarCampo(drama.temporadas),
        serie: formatearRelacion(drama.serie),
        universo: formatearRelacion(drama.universo),
        remake: formatearRelacion(drama.remake, true),
        franquicia: formatearRelacion(drama.franquicia, true),
        tituloOrden: titulo
    };
}

function ordenarYGuardar(dramas, archivoSalida, etiqueta) {
    const lista = dramas
        .map(prepararRegistro)
        .sort((a, b) => a.tituloOrden.localeCompare(b.tituloOrden, 'es', { sensitivity: 'base' }));

    const lineas = [
        COLUMNAS.join('\t'),
        ...lista.map(drama => [
            drama.codigo,
            drama.pais,
            drama.anio,
            drama.titulo,
            drama.tituloOriginal,
            drama.alias,
            drama.temporada,
            drama.temporadas,
            drama.serie,
            drama.universo,
            drama.remake,
            drama.franquicia
        ].map(limpiarCampo).join('\t'))
    ];

    fs.writeFileSync(archivoSalida, lineas.join('\n') + '\n', 'utf8');
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

    ordenarYGuardar(dramasActivos, archivoActivos, 'Índice alfabético de activos generado');
    ordenarYGuardar(dramasInactivos, archivoInactivos, 'Índice de activo: false generado');
} catch (error) {
    console.error('❌ Error al generar los índices:', error.message);
    process.exit(1);
}
