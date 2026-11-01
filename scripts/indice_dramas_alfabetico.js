/**
 * @file scripts/indice_dramas_alfabetico.js
 * @description Genera dos índices de control:
 *              - indice_dramas_alfabetico.txt: dramas activos compilados en biblioteca.js.
 *              - indice_dramas_activo_false.txt: fichas inactivas leídas directamente de datos/dramas/.
 * @execution Se ejecuta automáticamente mediante GitHub Actions (.github/workflows/build-biblioteca.yml)
 *            o manualmente desde consola con: node scripts/indice_dramas_alfabetico.js
 */

const fs = require('fs');
const path = require('path');

const rutaBiblioteca = path.join(__dirname, '..', 'datos', 'biblioteca.js');
const rutaDramas = path.join(__dirname, '..', 'datos', 'dramas');
const carpetaInformacion = path.join(__dirname, '..', 'informacion');
const archivoActivos = path.join(carpetaInformacion, 'indice_dramas_alfabetico.txt');
const archivoInactivos = path.join(carpetaInformacion, 'indice_dramas_activo_false.txt');

function prepararRegistro(drama) {
    const codigo = drama.codigo || 'DR000000';
    const pais = (Array.isArray(drama.pais) && drama.pais.length > 0) ? drama.pais[0] : '??';
    const anio = drama.anio || '????';
    const titulo = drama.titulo || 'Sin título';
    const temporada = (drama.temporada && drama.temporada > 1) ? ` T${drama.temporada}` : '';

    return {
        codigo,
        pais,
        anio,
        tituloCompleto: `${titulo}${temporada}`,
        tituloOrden: titulo
    };
}

function ordenarYGuardar(dramas, archivoSalida, etiqueta) {
    const lista = dramas
        .map(prepararRegistro)
        .sort((a, b) => a.tituloOrden.localeCompare(b.tituloOrden, 'es', { sensitivity: 'base' }));

    const lineas = lista.map(d => `${d.codigo}\t${d.pais}\t${d.anio}\t${d.tituloCompleto}`);
    fs.writeFileSync(archivoSalida, lineas.join('\n'), 'utf8');
    console.log(`✅ ${etiqueta}: ${lista.length} ficha(s) en ${archivoSalida}`);
}

function leerBiblioteca() {
    if (!fs.existsSync(rutaBiblioteca)) {
        throw new Error('No se encuentra el archivo datos/biblioteca.js');
    }

    const contenido = fs.readFileSync(rutaBiblioteca, 'utf8');
    const inicioArray = contenido.indexOf('[');
    const finArray = contenido.lastIndexOf(']');

    if (inicioArray === -1 || finArray === -1) {
        throw new Error('No se pudo encontrar un array válido en biblioteca.js');
    }

    return JSON.parse(contenido.substring(inicioArray, finArray + 1));
}

function leerDramasInactivos() {
    if (!fs.existsSync(rutaDramas)) {
        throw new Error('No existe la carpeta datos/dramas');
    }

    const archivos = fs.readdirSync(rutaDramas).filter(f => f.endsWith('.json'));
    const inactivos = [];

    archivos.forEach(archivo => {
        const ruta = path.join(rutaDramas, archivo);
        try {
            const drama = JSON.parse(fs.readFileSync(ruta, 'utf8'));
            if (drama && drama.codigo && drama.activo === false) {
                inactivos.push(drama);
            }
        } catch (error) {
            throw new Error(`Error al procesar ${archivo}: ${error.message}`);
        }
    });

    return inactivos;
}

try {
    fs.mkdirSync(carpetaInformacion, { recursive: true });

    const dramasActivos = leerBiblioteca();
    const dramasInactivos = leerDramasInactivos();

    ordenarYGuardar(dramasActivos, archivoActivos, 'Índice alfabético de activos generado');
    ordenarYGuardar(dramasInactivos, archivoInactivos, 'Índice de activo: false generado');
} catch (error) {
    console.error('❌ Error al generar los índices:', error.message);
    process.exit(1);
}
