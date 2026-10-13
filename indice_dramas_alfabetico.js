const fs = require('fs');
const path = require('path');

// Ruta de tu archivo biblioteca.js (ajusta el nombre si se llama diferente)
const rutaBiblioteca = path.join(__dirname, 'datos','biblioteca.js');
const archivoSalida = path.join(__dirname, 'informacion','indice_dramas_alfabetico.txt');

if (!fs.existsSync(rutaBiblioteca)) {
    console.error('No se encuentra el archivo biblioteca.js');
    process.exit(1);
}

try {
    // Leemos el contenido de biblioteca.js
    const contenido = fs.readFileSync(rutaBiblioteca, 'utf8');

    // Extraemos la parte del array JSON usando expresiones regulares
    // (Busca desde el primer corchete '[' hasta el último ']')
    const inicioArray = contenido.indexOf('[');
    const finArray = contenido.lastIndexOf(']');

    if (inicioArray === -1 || finArray === -1) {
        throw new Error('No se pudo encontrar un array JSON válido en biblioteca.js');
    }

    const jsonString = contenido.substring(inicioArray, finArray + 1);
    const dramas = JSON.parse(jsonString);

    let listaDramas = [];

    dramas.forEach(drama => {
        const codigo = drama.codigo || 'DR000000';
        const pais = (Array.isArray(drama.pais) && drama.pais.length > 0) ? drama.pais[0] : '??';
        const anio = drama.anio || '????';
        const titulo = drama.titulo || 'Sin título';
        
        // Si tiene temporada mayor a 1, la añadimos al título (ej. "T2")
        const temporada = (drama.temporada && drama.temporada > 1) ? ` T${drama.temporada}` : '';

        listaDramas.push({
            codigo,
            pais,
            anio,
            tituloCompleto: `${titulo}${temporada}`,
            tituloOrden: titulo.toLowerCase() // Para ordenar alfabéticamente sin distinguir mayúsculas
        });
    });

    // 🔤 Ordenar alfabéticamente por título (idioma español)
    listaDramas.sort((a, b) => a.tituloOrden.localeCompare(b.tituloOrden, 'es', { sensitivity: 'base' }));

    // Construir las líneas de texto plano con tabulador
    const lineasIndice = listaDramas.map(d => `${d.codigo}\t${d.pais}\t${d.anio}\t${d.tituloCompleto}`);

    // Guardar el archivo de texto plano
    fs.writeFileSync(archivoSalida, lineasIndice.join('\n'), 'utf8');
    console.log(`¡Índice alfabético generado con éxito desde biblioteca.js! Se han procesado ${listaDramas.length} dramas en ${archivoSalida}`);

} catch (e) {
    console.error('Error al procesar el archivo biblioteca.js:', e.message);
}
