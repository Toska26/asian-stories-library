# Procedimiento para incorporar dramas a Asian Stories Library (ASL)

**Documento de consulta interna.**  
Este procedimiento recoge los acuerdos de trabajo para buscar, revisar y preparar nuevas fichas de dramas. Debe consultarse antes de iniciar cada mes o bloque de incorporaciones.

## 1. Orden de trabajo

- Avanzar por años en orden descendente: primero 2026, después 2025, etc.
- Dentro de cada año, trabajar los meses de más reciente a más antiguo.
- Octubre de 2026 ya se revisó; el siguiente bloque previsto es septiembre de 2026.
- Si al investigar un drama aparecen temporadas, remakes, franquicias, universos compartidos o especiales relacionados que todavía no están en ASL, también se deben estudiar e incorporar al conjunto de trabajo, aunque sean de años anteriores.

## 2. Fase 1: selección y relaciones

1. Elaborar la lista de dramas estrenados en el mes y país que se esté trabajando.
2. Identificar posibles relaciones con otras producciones:
   - Temporadas y continuaciones.
   - Remakes y versiones anteriores.
   - Franquicias.
   - Universos compartidos.
   - Especiales y episodios adicionales.
3. Añadir a la lista de trabajo las producciones relacionadas que no existan todavía en ASL, aunque sean de otros años.
4. Comprobar duplicados antes de reservar códigos. Buscar cada título por:
   - Título internacional/inglés.
   - Título original en su escritura nativa.
   - Alias y títulos alternativos.
   - Romanizaciones y variantes de escritura.
5. Consultar tanto el índice activo como el índice de registros inactivos:
   - `informacion/indice_dramas_alfabetico.csv`
   - `informacion/indice_dramas_activo_false.csv`

Los índices CSV usan separador punto y coma (`;`) y UTF-8 con BOM. Deben leerse como CSV real, no separarse con `split(";")`, porque los alias pueden contener punto y coma.

## 3. Fase 2: relaciones, estructura y códigos

Antes de asignar códigos DR:

1. Comprobar si ya existen los códigos de franquicia (FR) y universo (UN) que correspondan. Reutilizar los existentes.
2. Si una relación está confirmada y todavía no existe su registro, preparar la propuesta para crearla.
3. Comprobar las temporadas y series ya catalogadas.
4. Identificar los remakes y su orden cronológico.
5. No deducir relaciones solo porque dos títulos o repartos se parezcan: deben estar respaldadas por información fiable.
6. Reservar códigos DR únicamente para producciones nuevas, después de comprobar que no son duplicados.
7. Preparar una lista de códigos y títulos para que se puedan localizar portadas y tráileres.

Referencias de estructura:

- **Serie/temporadas:** el código SR se forma a partir del código DR de la primera temporada (por ejemplo, `SR001110`). No hay un fichero SR independiente.
- **Remake:** se relaciona mediante `remake`, con el código RM correspondiente y el orden de la versión.
- **Franquicia:** utiliza FR.
- **Universo compartido:** utiliza UN.
- **Especiales:** decidir si corresponde registrarlos dentro de la ficha principal o como una ficha DR independiente, según su naturaleza y los ejemplos existentes.

No crear códigos definitivos ni modificar el repositorio hasta que el usuario haya aprobado la propuesta correspondiente.

## 4. Fase 3: investigación de cada drama

Investigar los datos siguiendo el orden y la estructura de `informacion/plantilla.json`. Consultar fichas existentes como referencia cuando sea necesario.

Orden de investigación:

1. Datos principales y títulos alternativos.
2. País, idioma, año y fechas de estreno/finalización.
3. Tipo de producción, utilizando los valores de `TIPOS.json`.
4. Estado, número de episodios y duración.
5. Géneros y tags, reutilizando los valores existentes cuando sea posible.
6. Origen: novela, manga, webtoon, adaptación, historia original, etc.
7. Especiales y episodios adicionales.
8. Temporadas, serie, remake, franquicia y universo.
9. Multimedia: portada y búsqueda de vídeos relacionados con el drama (tráilers, teasers, OST, clips, making of, entrevistas, vídeos promocionales y otros materiales).
10. Sinopsis.
11. Personajes identificados, tanto principales como secundarios.
12. Parejas románticas confirmadas.

### Personajes y parejas

- Incluir todos los personajes que se puedan identificar con fuentes fiables, no solo los protagonistas.
- Guardar los nombres de los personajes, pero **no investigar ni enlazar todavía a los actores**.
- No añadir códigos PR en esta fase.
- Diferenciar personajes principales y secundarios cuando las fuentes permitan hacerlo.
- No inventar personajes ni completar repartos por suposición.
- En `ships`, incluir únicamente parejas románticas confirmadas.
- Si no se puede confirmar una pareja, dejar `ships` sin completar; no emparejar automáticamente a los protagonistas.
- En esta fase, las parejas se guardan con nombres de personajes, sin códigos SH ni enlaces a actores.

### Actores, equipo técnico y entidades: trabajo pospuesto

Durante la preparación mensual:

- No investigar actores y actrices.
- No añadir directores, guionistas ni otros miembros del equipo técnico.
- No investigar productoras, cadenas, plataformas ni otras entidades.
- No asignar códigos PR, SH o EN.

Este trabajo se realizará globalmente al terminar la incorporación anual, para evitar búsquedas repetidas y poder unificar personas y entidades que aparezcan en varios dramas.

## 5. Fase 4: preparación de las fichas JSON

1. Crear un borrador JSON por cada drama nuevo, siguiendo la plantilla y el orden de campos de ASL.
2. Mantener los nombres de campo exactamente como estén definidos en la plantilla vigente. Por ejemplo, el campo del año es `anio`, no `año`.
3. Respetar los códigos y relaciones que se hayan comprobado.
4. Omitir los campos desconocidos en lugar de rellenarlos con `null` o arrays vacíos innecesarios.
5. No inventar información para completar la ficha.
6. Los títulos deben seguir el criterio del catálogo: título internacional/inglés en `titulo`, título en escritura original en `tituloOriginal` y romanizaciones/títulos alternativos en `alias`, según corresponda.
7. Incluir la portada y todos los enlaces de vídeos relacionados que se encuentren durante la investigación. Buscar, entre otras fuentes, en YouTube, Viki, MyDramaList y plataformas oficiales de emisión o distribución.
8. Añadir los enlaces multimedia encontrados al borrador sin comprobar previamente si se reproducen, si están disponibles en la región o si siguen activos. Esa comprobación se hará durante la revisión de la ficha.
9. Para las portadas, utilizar URLs directas a la imagen, no enlaces a páginas que la contienen.
10. Entregar las fichas como borradores para revisión. No incorporarlas todavía al repositorio.

**Importante:** antes de generar fichas nuevas, consultar la versión actual de `informacion/plantilla.json`. Si la plantilla ha cambiado, prevalece la plantilla vigente sobre cualquier ejemplo antiguo de este documento.

## 6. Fase 5: revisión e incorporación

Antes de incorporar cada lote, revisar:

- Orden, nombres y formato de los campos.
- Exactitud de títulos, fechas, país, idioma, estado y datos de emisión.
- Fuentes y grado de confirmación de los datos.
- Códigos DR y relaciones FR, UN, SR y RM.
- Personajes y distinción entre principales y secundarios.
- Parejas románticas: solo las confirmadas.
- URLs de portadas y vídeos multimedia: comprobar durante la revisión si las imágenes y los vídeos se pueden abrir y visualizar.
- Enlaces de vídeos retirados, rotos, bloqueados o que no se puedan reproducir: eliminarlos de la ficha.
- Ausencia de duplicados, incluidos los registros inactivos.

Después:

1. Presentar los borradores al usuario.
2. Esperar su aprobación explícita.
3. Incorporar al repositorio únicamente las fichas aprobadas.
4. Ejecutar los workflows correspondientes.
5. Comprobar los índices, los datos generados y las auditorías.

No editar manualmente los ficheros generados automáticamente, como `datos/biblioteca.js`.

## 7. Trabajo global al terminar el año

Una vez incorporados los dramas del año, realizar las tareas que se han pospuesto:

1. **Actores y actrices:** revisar los repartos de todos los dramas del año; comparar con `PERSONAS.json`, identificar personas existentes y asignar códigos PR solo a las nuevas.
2. **Actualización de fichas:** enlazar cada personaje con su actor o actriz correspondiente.
3. **Equipo técnico:** investigar directores, guionistas y otros profesionales; comparar con `PERSONAS.json` y completar las altas necesarias.
4. **Ships oficiales:** revisar las parejas que deban tener un registro SH. Solo las parejas oficiales tendrán código SH y entrada en `SHIPS.json`.
5. **Entidades:** investigar productoras, cadenas, plataformas y otras entidades; unificar las repetidas y asignar códigos EN cuando corresponda.
6. **Auditoría:** revisar las relaciones y los enlaces entre dramas, personas, ships y entidades.

Orden de mantenimiento acordado: **PERSONAS → SHIPS → ENTIDADES**.

### Criterio para los ships

- Solo los ships oficiales reciben código SH y entrada en `SHIPS.json`.
- Las parejas no oficiales o propias de una historia se mantienen, si están confirmadas, dentro de `ships` de la ficha del drama, con los nombres de sus personajes y sin código SH.
- En los dramas BL tailandeses es habitual que se repitan parejas oficiales entre producciones; conviene comprobarlas en el mantenimiento global.
- Para otros países, no crear un SH salvo que la oficialidad de la pareja esté clara.

## 8. Reglas generales que no se deben olvidar

- ASL no es una biblioteca exclusiva de BL: se incorporan dramas de cualquier género y con o sin romance.
- No descartar un drama por no tener romance.
- Añadir una pareja solo cuando la relación romántica sea clara y esté respaldada; si no, dejarla fuera.
- No investigar actores durante el trabajo mensual: esa revisión se hará de forma global al cierre del año.
- Los personajes sí se investigan y registran ahora, incluidos los secundarios identificables.
- Origen, especiales, relaciones de temporadas/remakes/franquicias/universos y vídeos multimedia se investigan ahora; no se posponen.
- En la fase de investigación se recopilan los enlaces de vídeos sin verificarlos. La comprobación de reproducción se reserva para la revisión de los dramas, momento en que se eliminan los enlaces que no funcionen o no sean visibles.
- No crear CSV mensuales de seguimiento. La ficha JSON de cada drama será el registro central de su información.
- Los CSV de índices existentes se mantienen como herramienta para buscar duplicados.
- No subir borradores ni reservar códigos antes de completar las comprobaciones y recibir aprobación.

---

**Próximo bloque previsto:** septiembre de 2026, continuando el recorrido de 2026 desde los meses más recientes hacia los más antiguos.
