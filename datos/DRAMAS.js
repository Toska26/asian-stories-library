/* ======================================================
Asian Stories Library      DRAMAS.js   
====================================================== */
const DRAMAS = [ 
/* ========================================== 10 Things I Want To Do Before I Turn 40 ========================================== */
{
    codigo: 'DR000001',    titulo: '10 Things I Want To Do Before I Turn 40',    tituloOriginal: '40までにしたい10のこと',
    alias: [],
    tipo: 'Drama',
    anio: 2025,
    pais: 'JP',
    idioma: 'ja',
    franquicia: { codigo: '', orden: 0 },
    temporadas: 1,
    temporada: 1,
    episodios: 12,
    duracion: 30,
    estado: 'Finalizado',
    estreno: '2025-07-04',
    finalizacion: '2025-09-19',
    generos: [        'Drama',        'Romance'    ],
    tags: [        'BL'    ],

  multimedia: {
        portada: ['https://artworks.thetvdb.com/banners/v4/series/464121/posters/683b10ecb6a33.jpg'],
        trailer: ['https://www.youtube.com/watch?v=RPsSIiTYqOU'],
        teaser: [],
        pilot: [],
        ost: []
    },
  personas: [
        { nombre: 'Tojo Suzume', persona: 'PR000001', funcion: 'Actor', principal: true },
        { nombre: 'Keishi Tanaka', persona: 'PR000002', funcion: ['Actor'], principal: true },
        { nombre: '', persona: 'PR000003', funcion: ['Actor'], principal: false },
        { nombre: '', persona: 'PR000004', funcion: ['Actor'], principal: false },
        { nombre: '', persona: 'PR000005', funcion: ['Actor'], principal: false },
        { persona: 'PR000006', funcion: 'Director' },
        { persona: 'PR000007', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000001', personajes: ['Tojo Suzume', 'Keishi Tanaka'] }
    ],
    sinopsis: 'Tojo Suzume está a punto de cumplir cuarenta años y lleva una vida tranquila y rutinaria. Tras recibir una noticia que le hace replantearse su futuro, decide escribir una lista con diez cosas que quiere hacer antes de cumplir los cuarenta. Cuando Keishi Tanaka, un compañero de trabajo mucho más joven, descubre accidentalmente la lista, se ofrece a ayudarle a cumplir cada uno de esos deseos. A medida que ambos comparten experiencias, su relación evoluciona desde la amistad hasta un romance lleno de momentos cotidianos y emotivos.',
    activo: true,
    entidades: [
        { codigo: 'EN000001', funcion: ['Emisora'] },
        { codigo: 'EN000002', funcion: ['Productora'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] }
    ]
},
/* ========================================== 2gether ========================================== */
{
    codigo: 'DR000002',    titulo: '2gether',    tituloOriginal: 'เพราะเราคู่กัน',
    alias: ['2gether The Series'],
    tipo: 'Drama',
    anio: 2020,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000001', orden: 1 },
  	serie: 'SR000002',
    temporadas: 2,
    temporada: 1,
    episodios: 13,
    duracion: 45,
    estado: 'Finalizado',
    estreno: '2020-02-21',
    finalizacion: '2020-05-15',
    generos: [        'Comedia',        'Romance'    ],
    tags: [        'BL',        'Universidad',        'Música',        'Fake Dating',        'Friends to Lovers'    ],
    multimedia: {
        portada: ['https://upload.wikimedia.org/wikipedia/en/6/68/2gether_The_Series_2020_poster.jpg'],
        trailer: ['https://www.youtube.com/watch?v=6OQl08Weel4'],
        teaser: [],
        pilot: [],
        ost: []
    },

  personas: [
        { nombre: 'Sarawat', persona: 'PR000008', funcion: ['Actor'], principal: true },
        { nombre: 'Tine', persona: 'PR000009', funcion: ['Actor'], principal: true },
        { nombre: 'Man', persona: 'PR000010', funcion: ['Actor'], principal: false },
        { nombre: 'Type', persona: 'PR000011', funcion: ['Actor'], principal: false },
        { nombre: 'Phukong', persona: 'PR000012', funcion: ['Actor'], principal: false },
        { nombre: 'Mil', persona: 'PR000013', funcion: ['Actor'], principal: false },
        { persona: 'PR000014', funcion: 'Director' },
        { persona: 'PR000015', funcion: 'Guionista' },
        { nombre: 'Fong', persona: 'PR000016', funcion: ['Actor'], principal: false },
        { nombre: 'Longtae', persona: 'PR000017', funcion: ['Actor'], principal: false },
        { nombre: 'Ohm', persona: 'PR000018', funcion: ['Actor'], principal: false },
        { nombre: 'Green', persona: 'PR000019', funcion: ['Actor'], principal: false },
        { nombre: 'Dim', persona: 'PR000020', funcion: ['Actor'], principal: false },
        { nombre: 'Pear', persona: 'PR000021', funcion: ['Actor'], principal: false },
        { nombre: 'Pam', persona: 'PR000022', funcion: ['Actor'], principal: false }
    ],
    ships: [
        { ship: 'SH000002', personajes: ['Sarawat', 'Tine'] },
        { ship: 'SH000003', personajes: ['Man', 'Type'] },
        { ship: 'SH000004', personajes: ['Phukong', 'Mil'] }
    ],
    sinopsis: 'Tine intenta librarse de un admirador insistente convenciendo al popular Sarawat para que finja ser su novio. Lo que comienza como un simple acuerdo acaba transformándose en una historia de amor mientras ambos descubren sus verdaderos sentimientos.',
    activo: true,
    entidades: [
        { codigo: 'EN000004', funcion: ['Productora'] },
        { codigo: 'EN000005', funcion: ['Productora'] },
        { codigo: 'EN000006', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ]
},
/* ========================================== Still 2gether ========================================== */
{
    codigo: 'DR000003',    titulo: 'Still 2gether',    tituloOriginal: 'เพราะเรา(ยัง)คู่กัน',
    alias: [],
    tipo: 'Drama',
    anio: 2020,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000001', orden: 2 },
    serie:'SR000002',
    temporadas: 2,
    temporada: 2,
    episodios: 5,
    duracion: 45,
    estado: 'Finalizado',
    estreno: '2020-08-14',
    finalizacion: '2020-09-11',
    generos: [        'Comedia',        'Romance'    ],
    tags: [        'BL',        'Universidad',        'Música',        'Secuela'    ],

    multimedia: {
        portada: ['https://image.tmdb.org/t/p/original/4aZ2P5crezp0Kl4E4VUJQRO362T.jpg'],
        trailer: ['https://www.youtube.com/watch?v=NGRiLvi-OM0'],
        teaser: [],
        pilot: [],
        ost: []
    },
  personas: [
        { nombre: 'Sarawat', persona: 'PR000008', funcion: ['Actor'], principal: true },
        { nombre: 'Tine', persona: 'PR000009', funcion: ['Actor'], principal: true },
        { nombre: 'Man', persona: 'PR000010', funcion: ['Actor'], principal: false },
        { nombre: 'Type', persona: 'PR000011', funcion: ['Actor'], principal: false },
        { nombre: 'Phukong', persona: 'PR000012', funcion: ['Actor'], principal: false },
        { nombre: 'Mil', persona: 'PR000013', funcion: ['Actor'], principal: false },
        { persona: 'PR000014', funcion: 'Director' },
        { persona: 'PR000015', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000002', personajes: ['Sarawat', 'Tine'] },
        { ship: 'SH000003', personajes: ['Man', 'Type'] },
        { ship: 'SH000004', personajes: ['Phukong', 'Mil'] }
    ],
    sinopsis: 'Después de convertirse en pareja, Sarawat y Tine afrontan nuevos retos en su relación mientras sus amigos también continúan desarrollando sus propias historias de amor.',
    activo: true,
    entidades: [
        { codigo: 'EN000004', funcion: ['Productora'] },
        { codigo: 'EN000006', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ]
},
/* ========================================== 2gether: The Movie ========================================== */
{
    codigo: 'DR000004',    titulo: '2gether: The Movie',    tituloOriginal: 'เพราะเราคู่กัน The Movie',
    alias: [],
    tipo: 'Película',
    anio: 2021,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000001', orden: 3 },
    temporadas: 1,
    temporada: 1,
    episodios: 1,
    duracion: 107,
    estado: 'Finalizado',
    estreno: '2021-04-22',
    finalizacion: '2021-04-22',
    generos: [        'Comedia',        'Romance'    ],
    tags: [        'BL',        'Universidad',        'Música',        'Recopilatoria'    ],
    multimedia: {
        portada: 'https://images.justwatch.com/poster/246450652/s718/2gether-the-movie.jpg',
        trailerYoutube: 'https://www.youtube.com/watch?v=Ryta9zAkVjU',
        trailerYoutube2: '',
        teaserYoutube: '',
        teaserYoutube2: ''
    },
    multimedia: {
        portada: ['https://images.justwatch.com/poster/246450652/s718/2gether-the-movie.jpg'],
        trailer: ['https://www.youtube.com/watch?v=Ryta9zAkVjU'],
        teaser: [],
        pilot: [],
        ost: []
    },



  personas: [
        { nombre: 'Sarawat', persona: 'PR000008', funcion: ['Actor'], principal: true },
        { nombre: 'Tine', persona: 'PR000009', funcion: ['Actor'], principal: true },
        { nombre: 'Man', persona: 'PR000010', funcion: ['Actor'], principal: false },
        { nombre: 'Type', persona: 'PR000011', funcion: ['Actor'], principal: false },
        { nombre: 'Phukong', persona: 'PR000012', funcion: ['Actor'], principal: false },
        { nombre: 'Mil', persona: 'PR000013', funcion: ['Actor'], principal: false },
        { nombre: 'Fong', persona: 'PR000016', funcion: ['Actor'], principal: false },
        { nombre: 'Longtae', persona: 'PR000017', funcion: ['Actor'], principal: false },
        { nombre: 'Ohm', persona: 'PR000018', funcion: ['Actor'], principal: false },
        { nombre: 'Green', persona: 'PR000019', funcion: ['Actor'], principal: false },
        { nombre: 'Dim', persona: 'PR000020', funcion: ['Actor'], principal: false },
        { nombre: 'Pear', persona: 'PR000021', funcion: ['Actor'], principal: false },
        { nombre: 'Pam', persona: 'PR000022', funcion: ['Actor'], principal: false },
        { persona: 'PR000014', funcion: 'Director' },
        { persona: 'PR000015', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000002', personajes: ['Sarawat', 'Tine'] },
        { ship: 'SH000003', personajes: ['Man', 'Type'] },
        { ship: 'SH000004', personajes: ['Phukong', 'Mil'] }
    ],
    sinopsis: 'Película recopilatoria que resume la historia de 2gether y Still 2gether, incorporando escenas inéditas y una nueva edición cinematográfica de la relación entre Sarawat y Tine.',
    activo: true,
    entidades: [
        { codigo: 'EN000004', funcion: ['Productora'] },
        { codigo: 'EN000007', funcion: ['Productora'] },
        { codigo: 'EN000005', funcion: ['Productora'] },
        { codigo: 'EN000016', funcion: ['Distribuidora'] },
        { codigo: 'EN000017', funcion: ['Distribuidora'] },
        { codigo: 'EN000018', funcion: ['Distribuidora'] },
        { codigo: 'EN000026', funcion: ['Plataforma'] }
    ]
},
/* ========================================== The Eighth Sense ========================================== */
{
    codigo: 'DR000005',    titulo: 'The Eighth Sense',    tituloOriginal: '여덟 번째 감각',
    alias: [],
    tipo: 'Drama',
    anio: 2023,
    pais: 'KR',
    idioma: 'ko',
    franquicia: { codigo: '', orden: 0 },
    temporadas: 1,
    temporada: 1,
    episodios: 10,
    duracion: 35,
    estado: 'Finalizado',
    estreno: '2023-03-29',
    finalizacion: '2023-04-26',
    generos: [        'Drama',        'Romance'    ],
    tags: [        'BL',        'Universidad'    ],

    multimedia: {
        portada: ['https://i.pinimg.com/736x/bf/ca/06/bfca06960028fb349da11263aa5ab04c.jpg'],
        trailer: ['https://www.youtube.com/watch?v=s4p1S6-iyGs','https://www.youtube.com/watch?v=R8YZDBXoBOY','https://www.youtube.com/watch?v=ZVRh1nRavy0'],
        teaser: ['https://www.youtube.com/watch?v=uiJhnk9kAfA','https://www.youtube.com/watch?v=gBQYyiR1WP4'],
        pilot: [],
        ost: []
    },
  personas: [
        { nombre: 'Ji Hyun', persona: 'PR000023', funcion: ['Actor'], principal: true },
        { nombre: 'Jae Won', persona: 'PR000024', funcion: ['Actor'], principal: true },
        { nombre: 'Yoon Se Bin', persona: 'PR000026', funcion: ['Actor'], principal: false },
        { nombre: 'Eun Ji', persona: 'PR000025', funcion: ['Actor'], principal: false },
        { nombre: 'Min Woo', persona: 'PR000027', funcion: ['Actor'], principal: false },
        { persona: 'PR000028', funcion: 'Director' },
        { persona: 'PR000028', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000005', personajes: ['Ji Hyun', 'Jae Won'] }
    ],
    sinopsis: 'Ji Hyun, un estudiante universitario de primer año, conoce a Jae Won, un estudiante veterano marcado por experiencias difíciles del pasado. A través de su pasión compartida por el surf, ambos desarrollan una intensa relación que les ayuda a enfrentarse a sus miedos, descubrirse a sí mismos y encontrar un nuevo sentido a sus vidas.',
    activo: true,
    entidades: [
        { codigo: 'EN000003', funcion: ['Productora'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] }
    ]
},
/* ========================================== Bad Romance: The Series ========================================== */
{
    codigo: 'DR000006',    titulo: 'Bad Romance: The Series',    tituloOriginal: 'ตกหลุมหัวใจยัยปีศาจ',
    alias: [],
    tipo: 'Drama',
    anio: 2016,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000002', orden: 1 },
    temporadas: 1,
    temporada: 1,
    episodios: 13,
    duracion: 75,
    estado: 'Finalizado',
    estreno: '2016-07-18',
    finalizacion: '2016-09-05',
    generos: [        'Comedia',        'Romance',        'Drama'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Korn', persona: 'PR000031', funcion: ['Actor'], principal: true },
        { nombre: 'Knock', persona: 'PR000030', funcion: ['Actor'], principal: true },
        { nombre: 'Cho', persona: 'PR000032', funcion: ['Actor'], principal: false },
        { nombre: 'Yihwa', persona: 'PR000033', funcion: ['Actor'], principal: false },
        { nombre: 'My Dear', persona: 'PR000047', funcion: ['Actor'], principal: false },
        { nombre: 'Beauty', persona: 'PR000048', funcion: ['Actor'], principal: false },
        { nombre: 'James', persona: 'PR000034', funcion: ['Actor'], principal: false },
        { nombre: 'Tanguy', persona: 'PR000046', funcion: ['Actor'], principal: false },
        { nombre: 'Dewey', persona: 'PR000049', funcion: ['Actor'], principal: false },
        { nombre: 'Martin', persona: 'PR000050', funcion: ['Actor'], principal: false },
        { nombre: 'Being', persona: 'PR000051', funcion: ['Actor'], principal: false },
        { persona: 'PR000052', funcion: 'Director' },
        { persona: 'PR000029', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000006', personajes: ['Korn', 'Knock'] },
        { ship: 'SH000007', personajes: ['Cho', 'Yihwa'] },
        { ship: 'SH000009', personajes: ['Being', 'Martin'] },
        { ship: 'SH000010', personajes: ['Tanguy', 'Dewey'] }
    ],
    sinopsis: 'Korn y Knock mantienen una relación complicada mientras intentan descubrir qué sienten realmente el uno por el otro. A su alrededor, sus amigos también viven sus propias historias de amor, conflictos y relaciones, dando lugar a una historia llena de situaciones divertidas, emociones y enredos sentimentales.',
    multimedia: {
        portada: 'https://artworks.thetvdb.com/banners/posters/314649-1.jpg',
        trailerYoutube: '',
        trailerYoutube2: '',
        teaserYoutube: '',
        teaserYoutube2: ''
    },
    multimedia: {
        portada: ['https://artworks.thetvdb.com/banners/posters/314649-1.jpg'],
        trailer: [],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000008', funcion: ['Productora'] },
        { codigo: 'EN000009', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Together with Me ========================================== */
{
    codigo: 'DR000007',    titulo: 'Together with Me',    tituloOriginal: 'อกหักมารักกับผม',
    alias: [],
    tipo: 'Drama',
    anio: 2017,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000002', orden: 2 },
    serie: 'SR000007',
  	temporadas: 2,
    temporada: 1,
    episodios: 13,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2017-08-24',
    finalizacion: '2017-10-05',
    generos: [        'Comedia',        'Romance',        'Drama'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Knock', persona: 'PR000030', funcion: ['Actor'], principal: true },
        { nombre: 'Korn', persona: 'PR000031', funcion: ['Actor'], principal: true },
        { nombre: 'Yihwa', persona: 'PR000033', funcion: ['Actor'], principal: true },
        { nombre: 'Nueaprae', persona: 'PR000035', funcion: ['Actor'], principal: false },
        { nombre: 'Plernpleng', persona: 'PR000036', funcion: ['Actor'], principal: false },
        { nombre: 'Bright', persona: 'PR000037', funcion: ['Actor'], principal: false },
        { nombre: 'Fai', persona: 'PR000038', funcion: ['Actor'], principal: false },
        { nombre: 'Cho', persona: 'PR000032', funcion: ['Actor'], principal: false },
        { nombre: 'Kavitra', persona: 'PR000039', funcion: ['Actor'], principal: false },
        { nombre: 'Farm', persona: 'PR000040', funcion: ['Actor'], principal: false },
        { nombre: 'Phubet', persona: 'PR000041', funcion: ['Actor'], principal: false },
        { nombre: 'Mew', persona: 'PR000042', funcion: ['Actor'], principal: false },
        { persona: 'PR000052', funcion: 'Director' }
    ],
    ships: [
        { ship: 'SH000006', personajes: ['Korn', 'Knock'] },
        { ship: 'SH000007', personajes: ['Cho', 'Yihwa'] },
        { ship: 'SH000008', personajes: ['Farm', 'Bright'] },
        { ship: 'SH000011', personajes: ['Phubet', 'Kavitra'] }
    ],
    sinopsis: 'Korn y Knock son dos amigos que se conocen desde la infancia y cuya relación cambia después de una noche juntos. Mientras intentan comprender qué significa lo ocurrido entre ellos, deben enfrentarse a sus propios sentimientos y a las complicaciones que surgen dentro de su grupo de amigos. Paralelamente, Yihwa, Farm y los demás personajes desarrollan sus propias relaciones y conflictos amorosos.',
    multimedia: {
        portada: ['https://s.isanook.com/mv/0/ui/13/67289/c8aukntv4aawxm8_1491280258.jpg'],
        trailer: ['https://www.youtube.com/watch?v=pFV_7oabxm0'],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000008', funcion: ['Productora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Together with Me: The Next Chapter ========================================== */
{
    codigo: 'DR000008',    titulo: 'Together with Me: The Next Chapter',    tituloOriginal: '',
    alias: [],
    tipo: 'Drama',
    anio: 2018,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000002', orden: 3 },
  	serie: 'SR000007',
    temporadas: 2,
    temporada: 2,
    episodios: 13,
    duracion: 60,
    estado: 'Finalizado',
    estreno: '2018-09-28',
    finalizacion: '2018-12-19',
    generos: [        'Romance',        'Drama'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Knock', persona: 'PR000030', funcion: ['Actor'], principal: true },
        { nombre: 'Korn', persona: 'PR000031', funcion: ['Actor'], principal: true },
        { nombre: 'Yihwa', persona: 'PR000033', funcion: ['Actor'], principal: true },
        { nombre: 'Fai', persona: 'PR000038', funcion: ['Actor'], principal: false },
        { nombre: 'Cho', persona: 'PR000032', funcion: ['Actor'], principal: false },
        { nombre: 'Pete', persona: 'PR000043', funcion: ['Actor'], principal: false },
        { nombre: 'Art', persona: 'PR000044', funcion: ['Actor'], principal: false },
        { nombre: 'Farm', persona: 'PR000040', funcion: ['Actor'], principal: false },
        { nombre: 'Bright', persona: 'PR000037', funcion: ['Actor'], principal: false },
        { nombre: 'Newnew', persona: 'PR000045', funcion: ['Actor'], principal: false },
        { persona: 'PR000052', funcion: 'Director' }
    ],
    ships: [
        { ship: 'SH000006', personajes: ['Korn', 'Knock'] },
        { ship: 'SH000007', personajes: ['Cho', 'Yihwa'] },
        { ship: 'SH000008', personajes: ['Farm', 'Bright'] }
    ],
    sinopsis: 'Korn y Knock ya llevan un tiempo juntos, pero su relación se enfrenta a nuevos problemas cuando aparecen situaciones que ponen a prueba la confianza y los sentimientos que comparten. Mientras intentan mantener su relación, sus amigos también afrontan cambios, nuevos romances y decisiones que afectarán a sus vidas.',
    multimedia: {
        portada: ['https://ekladata.com/FHAZxEdGuN0F7UExrjNuCT2UzEQ.jpg'],
        trailer: ['https://www.youtube.com/watch?v=bgnJOwSvMHc'],
        teaser: [],
        pilot: [],
        ost: []
    },
  entidades: [
        { codigo: 'EN000008', funcion: ['Productora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Until We Meet Again ========================================== */
{
    codigo: 'DR000009',    titulo: 'Until We Meet Again',    tituloOriginal: 'ด้ายแดง',
    alias: [],
    tipo: 'Drama',
    anio: 2019,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000003', orden: 1 },
    temporadas: 1,
    temporada: 1,
    episodios: 17,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2019-11-09',
    finalizacion: '2020-03-01',
    generos: [        'Romance',        'Drama'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Pharm', persona: 'PR000054', funcion: ['Actor'], principal: true },
        { nombre: 'Dean', persona: 'PR000055', funcion: ['Actor'], principal: true },
        { nombre: 'In', persona: 'PR000056', funcion: ['Actor'], principal: true },
        { nombre: 'Korn', persona: 'PR000057', funcion: ['Actor'], principal: true },
        { nombre: 'Team', persona: 'PR000058', funcion: ['Actor'], principal: true },
        { nombre: 'Win', persona: 'PR000059', funcion: ['Actor'], principal: true },
        { nombre: 'Manow', persona: 'PR000060', funcion: ['Actor'], principal: false },
        { nombre: 'Del', persona: 'PR000061', funcion: ['Actor'], principal: false },
        { nombre: 'Pruk', persona: 'PR000062', funcion: ['Actor'], principal: false },
        { nombre: 'Don', persona: 'PR000063', funcion: ['Actor'], principal: false },
        { nombre: 'Sin', persona: 'PR000064', funcion: ['Actor'], principal: false },
        { nombre: 'Sorn', persona: 'PR000065', funcion: ['Actor'], principal: false },
        { nombre: 'Alex', persona: 'PR000066', funcion: ['Actor'], principal: false },
        { nombre: 'Mew', persona: 'PR000067', funcion: ['Actor'], principal: false },
        { nombre: 'Dej', persona: 'PR000068', funcion: ['Actor'], principal: false },
        { persona: 'PR000075', funcion: 'Director' }
    ],
    ships: [
        { ship: 'SH000012', personajes: ['Dean', 'Pharm'] },
        { ship: 'SH000013', personajes: ['Korn', 'In'] },
        { ship: 'SH000014', personajes: ['Win', 'Team'] },
        { ship: 'SH000015', personajes: ['Pruk', 'Manow'] },
        { ship: 'SH000016', personajes: ['Sin', 'Sorn'] }
    ],
    sinopsis: 'Pharm regresa a Tailandia para comenzar una nueva etapa de su vida, pero desde el principio empieza a tener sueños, recuerdos y sensaciones extrañas que parecen estar relacionados con otra vida. Al conocer a Dean, un joven nadador de carácter reservado, ambos sienten una conexión inexplicable que los lleva a descubrir el vínculo entre sus vidas presentes y una historia de amor del pasado.',
    multimedia: {
        portada: ['https://pimg.1px.tw/pink03049/1578043278-3791294791.jpg'],
        trailer: ['https://www.youtube.com/watch?v=DlT_e3Eguz8'],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000010', funcion: ['Productora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    especiales: [
      { titulo: 'Until We Meet Again Special' }
    ],
    activo: true
},
/* ========================================== Between Us ========================================== */
{
    codigo: 'DR000010',    titulo: 'Between Us',    tituloOriginal: 'เชือกป่าน',
    alias: [],
    tipo: 'Drama',
    anio: 2022,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000003', orden: 2 },
    temporadas: 1,
    temporada: 1,
    episodios: 12,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2022-11-06',
    finalizacion: '2023-01-29',
    generos: ['Romance',        'Drama'    ],
    tags: [        'BL'   ],
    personas: [
        { nombre: 'Win', persona: 'PR000059', funcion: ['Actor'], principal: true },
        { nombre: 'Team', persona: 'PR000058', funcion: ['Actor'], principal: true },
        { nombre: 'Pharm', persona: 'PR000054', funcion: ['Actor'], principal: false },
        { nombre: 'Manow', persona: 'PR000060', funcion: ['Actor'], principal: false },
        { nombre: 'Dean', persona: 'PR000055', funcion: ['Actor'], principal: false },
        { nombre: 'Pruek', persona: 'PR000062', funcion: ['Actor'], principal: false },
        { nombre: 'Tul', persona: 'PR000067', funcion: ['Actor'], principal: false },
        { nombre: 'Bee', persona: 'PR000069', funcion: ['Actor'], principal: false },
        { nombre: 'A', persona: 'PR000070', funcion: ['Actor'], principal: false },
        { nombre: 'Sea', persona: 'PR000071', funcion: ['Actor'], principal: false },
        { nombre: 'Waan', persona: 'PR000072', funcion: ['Actor'], principal: false },
        { nombre: 'Wiew', persona: 'PR000073', funcion: ['Actor'], principal: false },
        { nombre: 'Prince', persona: 'PR000074', funcion: ['Actor'], principal: false },
        { persona: 'PR000075', funcion: 'Director' },
        { persona: 'PR000076', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000014', personajes: ['Win', 'Team'] },
        { ship: 'SH000017', personajes: ['Waan', 'Tul'] }
    ],
    sinopsis: 'Win y Team se conocen durante su etapa universitaria y, aunque desde el principio existe una fuerte atracción entre ellos, Team tiene dificultades para enfrentarse a sus propios sentimientos y a los recuerdos que lo atormentan. Win intenta acercarse a él y ayudarlo a superar sus inseguridades mientras ambos descubren poco a poco lo que significa estar juntos.',
    multimedia: {
        portada: ['https://i.pinimg.com/originals/3d/8e/08/3d8e08b81070edf2441f9bfe4dae9cf9.jpg'],
        trailer: ['https://www.youtube.com/watch?v=DlT_e3Eguz8'],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000010', funcion: ['Productora'] },
        { codigo: 'EN000014', funcion: ['Emisora'] },
        { codigo: 'EN000024', funcion: ['Plataforma'] }
    ],
    activo: true
},  
/* ========================================== Stay by My Side ========================================== */
{
    codigo: 'DR000011',    titulo: 'Stay by My Side',    tituloOriginal: '免疫屏蔽',
    alias: [],
    tipo: 'Drama',
    anio: 2023,
    pais: 'TW',
    idioma: 'zh',
    universo: 'UN000002',
    temporadas: 1,
    temporada: 1,
    episodios: 10,
    duracion: 22,
    estado: 'Finalizado',
    estreno: '2023-07-07',
    finalizacion: '2023-09-01',
    generos: [        'Romance',        'Fantasía'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Gu Bu-Xia', persona: 'PR000077', funcion: ['Actor'], principal: true },
        { nombre: 'Jiang Chi', persona: 'PR000078', funcion: ['Actor'], principal: true },
        { nombre: 'Guo Zheng-Hong', persona: 'PR000081', funcion: ['Actor'], principal: false },
        { nombre: 'Bai Yun-Hao', persona: 'PR000082', funcion: ['Actor'], principal: false },
        { nombre: 'Lan Bai-Wei', persona: 'PR000083', funcion: ['Actor'], principal: false },
        { nombre: 'Gu Bu-Tao', persona: 'PR000079', funcion: ['Actor'], principal: false },
        { nombre: 'Lin Dai-Han', persona: 'PR000080', funcion: ['Actor'], principal: false },
        { persona: 'PR000100', funcion: 'Director' },
        { persona: 'PR000103', funcion: 'Guionista' },
        { persona: 'PR000104', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000018', personajes: ['Gu Bu-Xia', 'Jiang Chi'] }
    ],
    sinopsis: 'Gu Bu-Xia, criado en un templo y capaz de escuchar las voces de los fantasmas, comienza a sufrir este extraño fenómeno después de que un accidente debilita la protección espiritual que lo había mantenido a salvo. Cuando Jiang Chi se convierte en su nuevo compañero de habitación, Bu-Xia descubre que las voces desaparecen cuando está cerca de él. Intrigado por esta conexión, comienza a buscar excusas para acercarse a Jiang Chi, mientras ambos van descubriendo poco a poco sus sentimientos.',
    multimedia: {
        portada: ['https://media.senscritique.com/media/000023042370/0/stay_by_my_side.jpg'],
        trailer: [],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000019', funcion: ['Productora', 'Plataforma'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] }
    ],
    especiales: [
        { titulo: 'Special Episode', fecha: '2024-05-24' }
    ],
    activo: true
},
/* ========================================== You Are Mine ========================================== */
{
    codigo: 'DR000012',    titulo: 'You Are Mine',    tituloOriginal: '絕對佔領',
    alias: [],
    tipo: 'Drama',
    anio: 2023,
    pais: 'TW',
    idioma: 'zh',
    universo: 'UN000002',
    temporadas: 1,
    temporada: 1,
    episodios: 10,
    duracion: 20,
    estado: 'Finalizado',
    estreno: '2023-09-15',
    finalizacion: '2023-11-10',
    generos: [        'Romance',        'Comedia'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Xia Shang-Zhou', persona: 'PR000084', funcion: ['Actor'], principal: true },
        { nombre: 'Yao Shun-Yu', persona: 'PR000085', funcion: ['Actor'], principal: true },
        { nombre: 'Li Hui-Wang', persona: 'PR000086', funcion: ['Actor'], principal: false },
        { nombre: 'Lisa', persona: 'PR000087', funcion: ['Actor'], principal: false },
        { nombre: 'Sofia', persona: 'PR000088', funcion: ['Actor'], principal: false },
        { persona: 'PR000101', funcion: 'Director' },
        { persona: 'PR000103', funcion: 'Guionista' },
        { persona: 'PR000105', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000019', personajes: ['Xia Shang-Zhou', 'Yao Shun-Yu'] }
    ],
    sinopsis: 'Yao Shun-Yu consigue un puesto como nuevo secretario en una prestigiosa empresa, pero pronto descubre que su jefe, Xia Shang-Zhou, es un presidente exigente, perfeccionista y de carácter difícil. Lo que comienza como una relación laboral complicada poco a poco se transforma en una atracción inesperada cuando Shang-Zhou empieza a interesarse por la perseverancia y la sinceridad de Shun-Yu. Entre situaciones absurdas, convivencia y sentimientos cada vez más difíciles de ocultar, ambos tendrán que descubrir qué significa realmente estar juntos.',
    multimedia: {
        portada: ['https://img.chil-chil.net/cms_img/0147/230519_201933.jpg'],
        trailer: [],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000019', funcion: ['Productora', 'Plataforma'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] }
    ],
    especiales: [
        { titulo: 'You Are Mine For the Rest of Your Life', fecha: '2024-05-10' }
    ],
    activo: true
},
/* ========================================== VIP Only ========================================== */
{
    codigo: 'DR000013',    titulo: 'VIP Only',    tituloOriginal: '保留席位',
    alias: [],
    tipo: 'Drama',
    anio: 2023,
    pais: 'TW',
    idioma: 'zh',
    universo: 'UN000002',
    temporadas: 1,
    temporada: 1,
    episodios: 10,
    duracion: 20,
    estado: 'Finalizado',
    estreno: '2023-11-24',
    finalizacion: '2024-01-19',
    generos: [        'Romance',        'Drama'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Gu Jing', persona: 'PR000089', funcion: ['Actor'], principal: true },
        { nombre: 'Liu Li', persona: 'PR000090', funcion: ['Actor'], principal: true },
        { nombre: 'Ah Ren', persona: 'PR000091', funcion: ['Actor'], principal: false },
        { nombre: 'Lai', persona: 'PR000092', funcion: ['Actor'], principal: false },
        { nombre: 'Wu Xin', persona: 'PR000093', funcion: ['Actor'], principal: false },
        { persona: 'PR000102', funcion: 'Director' },
        { persona: 'PR000103', funcion: 'Guionista' },
        { persona: 'PR000104', funcion: 'Guionista' },
        { persona: 'PR000107', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000020', personajes: ['Gu Jing', 'Liu Li'] }
    ],
    sinopsis: 'Gu Jing es el propietario de un restaurante retro y creativo donde Liu Li, un escritor de novelas BL, suele ocupar siempre la mesa más tranquila. Liu Li atraviesa una etapa complicada tanto en su vida sentimental como en su carrera como escritor, y Gu Jing comienza a acompañarlo y reconfortarlo con sus palabras y su cocina. Lo que empieza como una relación de amistad y apoyo se transforma poco a poco en sentimientos reales, mientras Liu Li descubre que el amor que había imaginado en sus novelas puede ser muy diferente del amor que encuentra junto a Gu Jing.',
    multimedia: {
        portada: ['https://m.media-amazon.com/images/M/MV5BMjc2MDkzMzEtNjg0OC00MGY5LWI0MjgtZmUxMDdlMDZkZmY3XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg'],
        trailer: [],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000019', funcion: ['Productora', 'Plataforma'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] }
    ],
    especiales: [
        { titulo: 'Special Episode' }
    ],
    activo: true
},
/* ========================================== AntiReset ========================================== */
{
    codigo: 'DR000014',    titulo: 'AntiReset',    tituloOriginal: '恆久定律',
    alias: [],
    tipo: 'Drama',
    anio: 2024,
    pais: 'TW',
    idioma: 'zh',
    universo: 'UN000002',
    temporadas: 1,
    temporada: 1,
    episodios: 10,
    duracion: 24,
    estado: 'Finalizado',
    estreno: '2024-02-02',
    finalizacion: '2024-03-29',
    generos: [        'Romance',        'Ciencia ficción'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Chu Yi-Ping', persona: 'PR000094', funcion: ['Actor'], principal: true },
        { nombre: 'Ever 9', persona: 'PR000095', funcion: ['Actor'], principal: true },
        { nombre: 'Wei Hung', persona: 'PR000097', funcion: ['Actor'], principal: false },
        { nombre: 'He Li', persona: 'PR000096', funcion: ['Actor'], principal: false },
        { nombre: 'Chen Chia-Yi', persona: 'PR000098', funcion: ['Actor'], principal: false },
        { nombre: 'Mu Sen', persona: 'PR000099', funcion: ['Actor'], principal: false },
        { persona: 'PR000102', funcion: 'Director' },
        { persona: 'PR000103', funcion: 'Guionista' },
        { persona: 'PR000108', funcion: 'Guionista' },
        { persona: 'PR000109', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000021', personajes: ['Chu Yi-Ping', 'Ever 9'] }
    ],
    sinopsis: 'Chu Yi-Ping es un profesor universitario frío y reservado que, después de sufrir una lesión, comienza a convivir con Ever 9, un avanzado robot de inteligencia artificial desarrollado por la empresa de su tío. Al principio, Yi-Ping considera a Ever 9 simplemente una máquina encargada de ayudarlo, pero poco a poco empieza a descubrir emociones y sentimientos que nunca había experimentado. Cuando ambos crean una lista de deseos para cumplir juntos, su relación se vuelve cada vez más especial, hasta que un fallo obliga a reiniciar el sistema de Ever 9 y amenaza con borrar todo lo que han construido juntos.',
    multimedia: {
        portada: ['https://image.tmdb.org/t/p/original/C1UE6DKeQLouDyv8xNwZgC8llO.jpg'],
        trailer: [],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000019', funcion: ['Productora', 'Plataforma'] },
        { codigo: 'EN000024', funcion: ['Plataforma'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] },
      	{ codigo: 'EN000028', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Love in the Air ========================================== */
{
    codigo: 'DR000015',    titulo: 'Love in the Air',    tituloOriginal: 'บรรยากาศรัก เดอะซีรีส์',
    alias: [],
    tipo: 'Drama',
    anio: 2022,
    pais: 'TH',
    idioma: 'th',
    universo: 'UN000001',
    temporadas: 1,
    temporada: 1,
    episodios: 13,
    duracion: 45,
    estado: 'Finalizado',
    estreno: '2022-08-18',
    finalizacion: '2022-11-10',
    generos: [        'Romance',        'Drama'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Phayu', persona: 'PR000108', funcion: ['Actor'], principal: true },
        { nombre: 'Rain', persona: 'PR000109', funcion: ['Actor'], principal: true },
        { nombre: 'Prapai', persona: 'PR000110', funcion: ['Actor'], principal: true },
        { nombre: 'Sky', persona: 'PR000111', funcion: ['Actor'], principal: true },
        { nombre: 'Sig', persona: 'PR000112', funcion: ['Actor'], principal: false },
        { nombre: 'Por', persona: 'PR000113', funcion: ['Actor'], principal: false },
        { nombre: 'Saifah', persona: 'PR000114', funcion: ['Actor'], principal: false },
        { nombre: 'Ple', persona: 'PR000115', funcion: ['Actor'], principal: false },
        { nombre: 'Som', persona: 'PR000116', funcion: ['Actor'], principal: false },
        { nombre: 'Plerng', persona: 'PR000117', funcion: ['Actor'], principal: false },
        { nombre: 'Stop', persona: 'PR000118', funcion: ['Actor'], principal: false },
        { nombre: 'Gun', persona: 'PR000119', funcion: ['Actor'], principal: false },
        { nombre: 'Phan', persona: 'PR000120', funcion: ['Actor'], principal: false },
        { nombre: 'Bas', persona: 'PR000121', funcion: ['Actor'], principal: false },
        { nombre: 'Petch', persona: 'PR000122', funcion: ['Actor'], principal: false },
        { nombre: 'Aon', persona: 'PR000123', funcion: ['Actor'], principal: false },
        { nombre: 'Nui', persona: 'PR000124', funcion: ['Actor'], principal: false },
        { nombre: 'Joy', persona: 'PR000125', funcion: ['Actor'], principal: false },
        { persona: 'PR000134', funcion: 'Director' },
        { persona: 'PR000135', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000022', personajes: ['Phayu', 'Rain'] },
        { ship: 'SH000023', personajes: ['Prapai', 'Sky'] }
    ],
    sinopsis: 'Rain, un estudiante universitario, se ve involucrado en un encuentro con Phayu, un hombre que despierta inmediatamente su interés y que pronto se convierte en una presencia constante en su vida. Paralelamente, su amigo Sky conoce a Prapai, iniciándose entre ellos una relación marcada por la atracción, los conflictos y los sentimientos cada vez más profundos.',
    multimedia: {
        portada: ['https://images.plex.tv/photo?scale=2&size=large-720&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsPL95QpwujQnPlY7ZATqMYgZn1j.jpg'],
        trailer: ['https://www.youtube.com/watch?v=HTTVO7IMVf0'],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000011', funcion: ['Productora'] },
        { codigo: 'EN000006', funcion: ['Emisora'] },
        { codigo: 'EN000024', funcion: ['Plataforma'] },
        { codigo: 'EN000023', funcion: ['Plataforma'] }
    ],
    especiales: [
        { titulo: 'Special', fecha: '2022-11-26' }
    ],
    activo: true
},
/* ========================================== Wedding Plan ========================================== */
{
    codigo: 'DR000016',    titulo: 'Wedding Plan',    tituloOriginal: 'Wedding Plan',
    alias: [],
    tipo: 'Drama',
    anio: 2023,
    pais: 'TH',
    idioma: 'th',
    universo: 'UN000001',
    temporadas: 1,
    temporada: 1,
    episodios: 7,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2023-07-19',
    finalizacion: '2023-08-30',
    generos: [        'Romance',        'Comedia'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Sailom', persona: 'PR000126', funcion: ['Actor'], principal: true },
        { nombre: 'Namnuea', persona: 'PR000127', funcion: ['Actor'], principal: true },
        { nombre: 'Yiwa', persona: 'PR000128', funcion: ['Actor'], principal: true },
        { nombre: 'Marine', persona: 'PR000129', funcion: ['Actor'], principal: true },
        { nombre: 'Sun', persona: 'PR000130', funcion: ['Actor'], principal: false },
        { nombre: 'Ryu', persona: 'PR000131', funcion: ['Actor'], principal: false },
        { nombre: 'Im', persona: 'PR000132', funcion: ['Actor'], principal: false },
        { nombre: 'Yiwa’s Mother', persona: 'PR000133', funcion: ['Actor'], principal: false },
        { persona: 'PR000134', funcion: 'Director' },
        { persona: 'PR000135', funcion: 'Guionista' }
    ],
    ships: [
        { ship: 'SH000024', personajes: ['Sailom', 'Namnuea'] },
        { ship: 'SH000025', personajes: ['Yiwa', 'Marine'] }
    ],
    sinopsis: 'Namnuea, un organizador de bodas, recibe el encargo de preparar la boda de Yiwa y Sailom. Lo que comienza como un trabajo profesional se complica cuando Namnuea descubre que Sailom no está realmente dispuesto a casarse. Mientras los preparativos avanzan, ambos comienzan a desarrollar sentimientos que harán cada vez más difícil mantener la relación en el terreno profesional.',
    multimedia: {
        portada: ['https://media.senscritique.com/media/000022189892/0/wedding_plan.webp'],
        trailer: [],
        teaser: [],
        pilot: [],
        ost: []
    },
  
    entidades: [
        { codigo: 'EN000011', funcion: ['Productora'] },
        { codigo: 'EN000006', funcion: ['Emisora'] },
        { codigo: 'EN000024', funcion: ['Plataforma'] },
        { codigo: 'EN000023', funcion: ['Plataforma'] }
    ],
    especiales: [
        { titulo: 'Special Step: Wedding Plan', fecha: '2023-09-16' }
    ],
    activo: true
},
/* ========================================== En of Love: Tossara ===================================================== */
{
    codigo: 'DR000017',    titulo: 'En of Love: Tossara',    tituloOriginal: 'รักวุ่นๆ ของหนุ่มวิศวะ - วิศวะมีเกียร์น่ะเมียหมอ',
    alias: ['Tossara'],
    tipo: 'Drama',
    anio: 2020,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000006', orden: 1 },
    temporadas: 1,
    temporada: 1,
    episodios: 4,
    duracion: 45,
    estado: 'Finalizado',
    estreno: '2020-03-14',
    finalizacion: '2020-04-04',
    generos: [        'Romance',        'Comedia'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Gun Tossakan', persona: 'PR000136', funcion: ['Actor'], principal: true },
        { nombre: 'Bar Sarawat', persona: 'PR000137', funcion: ['Actor'], principal: true },
        { nombre: 'Mark', persona: 'PR000138', funcion: ['Actor'], principal: false },
        { nombre: 'Vee', persona: 'PR000139', funcion: ['Actor'], principal: false },
        { nombre: 'Nuea', persona: 'PR000140', funcion: ['Actor'], principal: false },
        { nombre: 'Yiwaa', persona: 'PR000141', funcion: ['Actor'], principal: false },
        { nombre: 'Tee', persona: 'PR000142', funcion: ['Actor'], principal: false },
        { nombre: 'Lee', persona: 'PR000143', funcion: ['Actor'], principal: false },
        { nombre: 'Tonkla', persona: 'PR000144', funcion: ['Actor'], principal: false },
        { nombre: 'Pond', persona: 'PR000145', funcion: ['Actor'], principal: false },
        { nombre: 'Beam', persona: 'PR000146', funcion: ['Actor'], principal: false },
        { nombre: 'James', persona: 'PR000147', funcion: ['Actor'], principal: false },
        { nombre: 'Na', persona: 'PR000148', funcion: ['Actor'], principal: false },
        { nombre: 'Fuse', persona: 'PR000157', funcion: ['Actor'], principal: false },
        { persona: 'PR000155', funcion: ['Director'] },
        { persona: 'PR000156', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000026', personajes: ['Gun Tossakan', 'Bar Sarawat'] }
    ],
    sinopsis: 'Gun Tossakan, un brillante estudiante de primer año de Medicina, lleva enamorado desde el instituto de Bar Sarawat, un popular estudiante de tercer año de Ingeniería y jefe de hazers. Cuando ambos vuelven a encontrarse en la universidad, Gun aprovecha la oportunidad para acercarse a Bar y confesar finalmente sus sentimientos. Lo que comienza con el interés de Gun pronto se convierte en una relación en la que ambos deberán descubrir lo que sienten el uno por el otro.',
    multimedia: {
        portada: ['https://i.pinimg.com/736x/45/45/a7/4545a7763f14eb885b16b6f2a8b4bf14.jpg'],
        trailer: [],
        teaser: ['https://www.youtube.com/watch?v=dl7kpLFPDIg'],
        pilot: [],
        ost: []
    },
    entidades: [
        { codigo: 'EN000010', funcion: ['Productora'] },
        { codigo: 'EN000022', funcion: ['Emisora', 'Plataforma'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] },
        { codigo: 'EN000028', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== En of Love: Love Mechanics ===================================================== */
{
    codigo: 'DR000018',    titulo: 'En of Love: Love Mechanics',    tituloOriginal: 'กลรักรุ่นพี่',
    alias: [],
    tipo: 'Drama',
    anio: 2020,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000006', orden: 2 },
    temporadas: 1,
    temporada: 1,
    episodios: 4,
    duracion: 45,
    estado: 'Finalizado',
    estreno: '2020-04-11',
    finalizacion: '2020-05-02',
    generos: [        'Romance',        'Drama'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Vee', persona: 'PR000139', funcion: ['Actor'], principal: true },
        { nombre: 'Mark', persona: 'PR000138', funcion: ['Actor'], principal: true },
        { nombre: 'Fuse', persona: 'PR000157', funcion: ['Actor'], principal: false },
        { nombre: 'Bar', persona: 'PR000137', funcion: ['Actor'], principal: false },
        { nombre: 'Tee', persona: 'PR000142', funcion: ['Actor'], principal: false },
        { nombre: 'Tonkla', persona: 'PR000144', funcion: ['Actor'], principal: false },
        { nombre: 'James', persona: 'PR000147', funcion: ['Actor'], principal: false },
        { nombre: 'Pond', persona: 'PR000145', funcion: ['Actor'], principal: false },
        { nombre: 'Yiwaa', persona: 'PR000141', funcion: ['Actor'], principal: false },
        { nombre: 'Gun', persona: 'PR000136', funcion: ['Actor'], principal: false },
        { nombre: 'Kamphan', persona: 'PR000149', funcion: ['Actor'], principal: false },
        { nombre: 'Lee', persona: 'PR000143', funcion: ['Actor'], principal: false },
        { nombre: 'Wind', persona: 'PR000150', funcion: ['Actor'], principal: false },
        { nombre: 'Nuea', persona: 'PR000140', funcion: ['Actor'], principal: false },
        { persona: 'PR000155', funcion: ['Director'] },
        { persona: 'PR000156', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000027', personajes: ['Vee', 'Mark'] }
    ],
    sinopsis: 'Mark, un estudiante de Ingeniería, está enamorado de Bar, pero cuando finalmente se confiesa, Bar lo rechaza. Desconsolado, Mark termina en un club y, completamente borracho, confunde a Vee con Bar y lo besa. A partir de ese encuentro, Vee comienza a acercarse a Mark y a cuidar de él, dando comienzo a una relación complicada en la que ambos deberán enfrentarse a sus propios sentimientos.',
      multimedia: {
        portada: ['https://cf.shopee.co.th/file/073c9200c9fe4e860a130bc5eec63dfb'],
        trailer: [],
        teaser: ['https://www.youtube.com/watch?v=kDXu0_idawo'],
        pilot: [],
        ost: []
    },

    entidades: [
        { codigo: 'EN000010', funcion: ['Productora'] },
        { codigo: 'EN000022', funcion: ['Emisora', 'Plataforma'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] },
        { codigo: 'EN000028', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== En of Love: This Is Love Story ===================================================== */
{
    codigo: 'DR000019',    titulo: 'En of Love: This Is Love Story',    tituloOriginal: 'เหนือนพระราม',
    alias: ['This Is Love Story'],
    tipo: 'Drama',
    anio: 2020,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000006', orden: 3 },
    temporadas: 1,
    temporada: 1,
    episodios: 3,
    duracion: 45,
    estado: 'Finalizado',
    estreno: '2020-06-06',
    finalizacion: '2020-06-20',
    generos: [        'Romance',        'Drama'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Nuea', persona: 'PR000140', funcion: ['Actor'], principal: true },
        { nombre: 'Praram', persona: 'PR000151', funcion: ['Actor'], principal: true },
        { nombre: 'Gun Tossakan', persona: 'PR000136', funcion: ['Actor'], principal: false },
        { nombre: 'Bar Sarawat', persona: 'PR000137', funcion: ['Actor'], principal: false },
        { nombre: 'Mark', persona: 'PR000138', funcion: ['Actor'], principal: false },
        { nombre: 'Vee', persona: 'PR000139', funcion: ['Actor'], principal: false },
        { nombre: 'Tee', persona: 'PR000142', funcion: ['Actor'], principal: false },
        { nombre: 'Lee', persona: 'PR000143', funcion: ['Actor'], principal: false },
        { nombre: 'Yiwaa', persona: 'PR000141', funcion: ['Actor'], principal: false },
        { nombre: 'Jinny', persona: 'PR000153', funcion: ['Actor'], principal: false },
        { nombre: 'Em', persona: 'PR000154', funcion: ['Actor'], principal: false },
        { persona: 'PR000155', funcion: ['Director'] },
        { persona: 'PR000156', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000028', personajes: ['Nuea', 'Praram'] }
    ],
    sinopsis: 'Nuea, un estudiante de Ingeniería conocido por su personalidad de playboy, se enamora de Praram, el hermano menor de Gun Tossakan. Decidido a conquistarle, Nuea tendrá que enfrentarse no solo a sus propios sentimientos, sino también a la preocupación de Gun por su hermano. Mientras intenta acercarse a Praram, los celos y las inseguridades pondrán a prueba la relación que ambos comienzan a construir.',
    multimedia: {
        portada: ['https://images.justwatch.com/poster/186746175/s718/en-of-love-this-is-love-story.jpg'],
        trailer: [],
        teaser: ['https://www.youtube.com/watch?v=1hGIEHiOVns'],
        pilot: [],
        ost: []
    },
  entidades: [
        { codigo: 'EN000010', funcion: ['Productora'] },
        { codigo: 'EN000022', funcion: ['Emisora', 'Plataforma'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] },
        { codigo: 'EN000028', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== SOTUS ===================================================== */
{
    codigo: 'DR000020',    titulo: 'SOTUS',    tituloOriginal: 'พี่ว้ากตัวร้ายกับนายปีหนึ่ง',
    alias: ['SOTUS: The Series'],
    tipo: 'Drama',
    anio: 2016,
    pais: 'TH',
    idioma: 'th',
    serie: 'SR000020',
    temporadas: 2,
    temporada: 1,
    episodios: 15,
    duracion: 45,
    estado: 'Finalizado',
    estreno: '2016-08-20',
    finalizacion: '2017-01-14',
    generos: [        'Romance',        'Drama',        'Comedia'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Arthit', persona: 'PR000162', funcion: ['Actor'], principal: true },
        { nombre: 'Kongphop', persona: 'PR000163', funcion: ['Actor'], principal: true },
        { nombre: 'M', persona: 'PR000164', funcion: ['Actor'], principal: false },
        { nombre: 'Tew', persona: 'PR000165', funcion: ['Actor'], principal: false },
        { nombre: 'Day', persona: 'PR000166', funcion: ['Actor'], principal: false },
        { nombre: 'Nai', persona: 'PR000167', funcion: ['Actor'], principal: false },
        { nombre: 'Knot', persona: 'PR000176', funcion: ['Actor'], principal: false },
        { nombre: 'Bright', persona: 'PR000177', funcion: ['Actor'], principal: false },
        { nombre: 'Tutah', persona: 'PR000178', funcion: ['Actor'], principal: false },
        { nombre: 'Praepailin', persona: 'PR000179', funcion: ['Actor'], principal: false },
        { nombre: 'Maprang', persona: 'PR000180', funcion: ['Actor'], principal: false },
        { nombre: 'Oak', persona: 'PR000181', funcion: ['Actor'], principal: false },
        { nombre: 'Minnie', persona: 'PR000182', funcion: ['Actor'], principal: false },
        { nombre: 'Tee', persona: 'PR000183', funcion: ['Actor'], principal: false },
        { nombre: 'Koi', persona: 'PR000184', funcion: ['Actor'], principal: false },
        { nombre: 'Ple', persona: 'PR000185', funcion: ['Actor'], principal: false },
        { nombre: 'Tim', persona: 'PR000186', funcion: ['Actor'], principal: false },
        { nombre: 'Yacht', persona: 'PR000187', funcion: ['Actor'], principal: false },
        { nombre: 'Tum', persona: 'PR000188', funcion: ['Actor'], principal: false },
        { nombre: 'Namtan', persona: 'PR000189', funcion: ['Actor'], principal: false },
        { nombre: 'Deer', persona: 'PR000190', funcion: ['Actor'], principal: false },
        { nombre: 'Prem', persona: 'PR000019', funcion: ['Actor'], principal: false },
        { nombre: 'Wad', persona: 'PR000175', funcion: ['Actor'], principal: false },
        { nombre: 'May', persona: 'PR000022', funcion: ['Actor'], principal: false },
        { nombre: 'Jay', persona: 'PR000016', funcion: ['Actor'], principal: false },
        { persona: 'PR000158', funcion: ['Director'] },
        { persona: 'PR000158', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000029', personajes: ['Arthit', 'Kongphop'] }
    ],
    sinopsis: 'Kongphop es un estudiante de primer año de Ingeniería que se enfrenta al estricto sistema SOTUS dirigido por Arthit, un estudiante de tercer año encargado de la formación de los nuevos alumnos. Lo que comienza como una relación marcada por los enfrentamientos y la rivalidad va transformándose poco a poco en una conexión más profunda, mientras ambos descubren sentimientos que van más allá de la relación entre un senior y un junior.',
    multimedia: {
        portada: ['https://artworks.thetvdb.com/banners/posters/314882-2.jpg'],
        trailer: ['https://www.youtube.com/watch?v=Ke3RRiXo7rg'],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000004', funcion: ['Productora'] },
        { codigo: 'EN000014', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    especiales: [
        { titulo: 'SOTUS: Very Special EP', fecha: '2017-01-14' }
    ],
    activo: true
},
/* ========================================== SOTUS S ===================================================== */
{
    codigo: 'DR000021',    titulo: 'SOTUS S',    tituloOriginal: 'โซตัส เอส',
    alias: ['SOTUS S: The Series'],
    tipo: 'Drama',
    anio: 2017,
    pais: 'TH',
    idioma: 'th',
    serie: 'SR000020',
    temporadas: 2,
    temporada: 2,
    episodios: 13,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2017-12-09',
    finalizacion: '2018-03-10',
    generos: [        'Romance',        'Drama',        'Comedia'    ],
    tags: [        'BL'    ],
    personas: [
        { nombre: 'Arthit', persona: 'PR000162', funcion: ['Actor'], principal: true },
        { nombre: 'Kongphop', persona: 'PR000163', funcion: ['Actor'], principal: true },
        { nombre: 'Tew', persona: 'PR000165', funcion: ['Actor'], principal: false },
        { nombre: 'Dae', persona: 'PR000166', funcion: ['Actor'], principal: false },
        { nombre: 'Nai', persona: 'PR000167', funcion: ['Actor'], principal: false },
        { nombre: 'Yong', persona: 'PR000020', funcion: ['Actor'], principal: false },
        { nombre: 'M', persona: 'PR000164', funcion: ['Actor'], principal: false },
        { nombre: 'May', persona: 'PR000022', funcion: ['Actor'], principal: false },
        { nombre: 'Todd', persona: 'PR000168', funcion: ['Actor'], principal: false },
        { nombre: 'Earth', persona: 'PR000169', funcion: ['Actor'], principal: false },
        { nombre: 'Khao Fang', persona: 'PR000170', funcion: ['Actor'], principal: false },
        { nombre: 'John', persona: 'PR000171', funcion: ['Actor'], principal: false },
        { nombre: 'Cherry', persona: 'PR000172', funcion: ['Actor'], principal: false },
        { nombre: 'Somoh', persona: 'PR000173', funcion: ['Actor'], principal: false },
        { nombre: 'Prem', persona: 'PR000019', funcion: ['Actor'], principal: false },
        { nombre: 'Wad', persona: 'PR000175', funcion: ['Actor'], principal: false },
        { nombre: 'Bright', persona: 'PR000177', funcion: ['Actor'], principal: false },
        { nombre: 'Maprang', persona: 'PR000180', funcion: ['Actor'], principal: false },
        { nombre: 'Knot', persona: 'PR000176', funcion: ['Actor'], principal: false },
        { nombre: 'Tutah', persona: 'PR000178', funcion: ['Actor'], principal: false },
        { nombre: 'Praepailin', persona: 'PR000179', funcion: ['Actor'], principal: false },
        { nombre: 'Oak', persona: 'PR000181', funcion: ['Actor'], principal: false },
        { nombre: 'Durian', persona: 'PR000190', funcion: ['Actor'], principal: false },
        { persona: 'PR000159', funcion: ['Director'] },
        { persona: 'PR000158', funcion: ['Director'] },
        { persona: 'PR000159', funcion: ['Guionista'] },
        { persona: 'PR000158', funcion: ['Guionista'] },
        { persona: 'PR000160', funcion: ['Guionista'] },
        { persona: 'PR000161', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000029', personajes: ['Arthit', 'Kongphop'] },
        { ship: 'SH000031', personajes: ['Tew', 'Dae'] },
        { ship: 'SH000032', personajes: ['M', 'May'] },
        { ship: 'SH000030', personajes: ['Prem', 'Wad'] },
        { ship: 'SH000033', personajes: ['Nai', 'Yong'] }
    ],
    sinopsis: 'Dos años después de los acontecimientos de SOTUS, Kongphop se ha convertido en el jefe del sistema SOTUS de su facultad, mientras que Arthit trabaja en la empresa Ocean Electric. Durante su último año de universidad, Kongphop necesita realizar unas prácticas y consigue trabajar en la misma empresa que Arthit. El reencuentro entre ambos les llevará a afrontar nuevos retos personales y profesionales mientras intentan encontrar su lugar en esta nueva etapa de su relación.',
    multimedia: {
        portada: ['https://i0.wp.com/lovewithoutgender.com/wp-content/uploads/2019/03/cc3db-sotus-s.jpg'],
        trailer: ['https://www.youtube.com/watch?v=06gVTxbxEuU'],
        teaser: ['https://www.youtube.com/watch?v=JCjpicEtIA0'],
        pilot: [],
        ost: []
    },
  entidades: [
        { codigo: 'EN000004', funcion: ['Productora'] },
        { codigo: 'EN000013', funcion: ['Productora'] },
        { codigo: 'EN000014', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Love by Chance    ===================================================== */
{
    codigo: 'DR000022',    titulo: 'Love by Chance',    tituloOriginal: 'บังเอิญรัก',
    alias: ['My Accidental Love Is You'],
    tipo: 'Drama',
    anio: 2018,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000008', orden: 1 },
    universo: 'UN000001',
  	serie:'SR000022',
  	temporadas: 2,
    temporada: 1,
    episodios: 14,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2018-08-03',
    finalizacion: '2018-11-09',
    generos: ['Romance','Drama'],
    tags: ['BL'],
    personas: [
        { nombre: 'Ae', persona: 'PR000191', funcion: ['Actor'], principal: true },
        { nombre: 'Pete', persona: 'PR000192', funcion: ['Actor'], principal: true },
        { nombre: 'Tin', persona: 'PR000066', funcion: ['Actor'], principal: true },
        { nombre: 'Can', persona: 'PR000193', funcion: ['Actor'], principal: true },
        { nombre: 'Techno', persona: 'PR000194', funcion: ['Actor'], principal: true },
        { nombre: 'Kengkla', persona: 'PR000195', funcion: ['Actor'], principal: true },
        { nombre: 'Tum', persona: 'PR000196', funcion: ['Actor'], principal: true },
        { nombre: 'Tar', persona: 'PR000056', funcion: ['Actor'], principal: true },
        { nombre: 'Pond', persona: 'PR000067', funcion: ['Actor'], principal: false },
        { nombre: 'Bow', persona: 'PR000060', funcion: ['Actor'], principal: false },
        { nombre: 'Good', persona: 'PR000068', funcion: ['Actor'], principal: false },
        { nombre: 'Lemon', persona: 'PR000207', funcion: ['Actor'], principal: false },
        { nombre: 'Ping', persona: 'PR000204', funcion: ['Actor'], principal: false },
        { nombre: 'Cha-Aim', persona: 'PR000197', funcion: ['Actor'], principal: false },
        { nombre: 'Chompoo', persona: 'PR000206', funcion: ['Actor'], principal: false },
        { nombre: 'Champ', persona: 'PR000205', funcion: ['Actor'], principal: false },
        { nombre: 'Technic', persona: 'PR000203', funcion: ['Actor'], principal: false },
        { nombre: 'Type', persona: 'PR000198', funcion: ['Actor'], principal: false },
        { nombre: 'Trump', persona: 'PR000183', funcion: ['Actor'], principal: false },
        { nombre: 'Ao', persona: 'PR000202', funcion: ['Actor'], principal: false },
        { nombre: 'Yim', persona: 'PR000218', funcion: ['Actor'], principal: false },
        { nombre: 'Nut', persona: 'PR000201', funcion: ['Actor'], principal: false },
        { nombre: 'Phu', persona: 'PR000217', funcion: ['Actor'], principal: false },
        { nombre: 'Tul', persona: 'PR000208', funcion: ['Actor'], principal: false },
        { nombre: 'Madre de Pete', persona: 'PR000200', funcion: ['Actor'], principal: false },
        { nombre: 'Madre de Can', persona: 'PR000199', funcion: ['Actor'], principal: false },
        { nombre: 'Madre de Ae', persona: 'PR000209', funcion: ['Actor'], principal: false },
        { persona: 'PR000075', funcion: ['Director'] },
        { persona: 'PR000135', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000034', personajes: ['Ae', 'Pete'] },
        { ship: 'SH000035', personajes: ['Tin', 'Can'] },
        { ship: 'SH000036', personajes: ['Kengkla', 'Techno'] },
        { ship: 'SH000037', personajes: ['Tum', 'Tar'] }
    ],
    sinopsis: 'Pete es un estudiante universitario tímido y de familia acomodada que intenta ocultar su orientación sexual mientras soporta el acoso de otros estudiantes. Un día, un accidente en bicicleta hace que conozca a Ae, un estudiante de Ingeniería de carácter directo y protector. Lo que comienza como un encuentro fortuito se transforma poco a poco en una amistad cada vez más cercana, mientras ambos descubren sentimientos que van más allá de la amistad. Al mismo tiempo, las vidas de sus compañeros se entrelazan: Tin, un joven rico y desconfiado, comienza a acercarse a Can; Kengkla intenta conquistar a Techno; y Tum debe enfrentarse a sus sentimientos por Tar. Entre amistades, conflictos familiares, inseguridades y nuevos sentimientos, el grupo irá descubriendo distintas formas de entender el amor.',
    multimedia: {
        portada: ['https://artworks.thetvdb.com/banners/posters/346688-1.jpg'],
        trailer: ['https://www.youtube.com/watch?v=_cL6EQfR5LU'],
        teaser: ['https://www.youtube.com/watch?v=cF1K_8LwKE8'],
        pilot: [],
        ost: []
    },
  entidades: [
        { codigo: 'EN000010', funcion: ['Productora'] },
        { codigo: 'EN000006', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Love by Chance 2: A Chance to Love   ===================================================== */
{
    codigo: 'DR000023',    titulo: 'Love by Chance 2: A Chance to Love',    tituloOriginal: 'รักนี้บังเอิญคือคุณ 2: โอกาสที่จะได้รัก',
    alias: ['Love by Chance 2', 'A Chance to Love'],
    tipo: 'Drama',
    anio: 2020,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000008', orden: 2 },
    universo: 'UN000001',
  	serie:'SR000022',
    temporadas: 2,
    temporada: 2,
    episodios: 13,
    duracion: 40,
    estado: 'Finalizado',
    estreno: '2020-09-02',
    finalizacion: '2020-11-18',
    generos: ['Romance','Drama'],
    tags: ['BL'],
    personas: [
        { nombre: 'Tin', persona: 'PR000066', funcion: ['Actor'], principal: true },
        { nombre: 'Can', persona: 'PR000193', funcion: ['Actor'], principal: true },
        { nombre: 'Ae', persona: 'PR000191', funcion: ['Actor'], principal: false },
        { nombre: 'Techno', persona: 'PR000194', funcion: ['Actor'], principal: false },
        { nombre: 'Kengkla', persona: 'PR000195', funcion: ['Actor'], principal: false },
        { nombre: 'Tum', persona: 'PR000196', funcion: ['Actor'], principal: false },
        { nombre: 'Tar', persona: 'PR000056', funcion: ['Actor'], principal: false },
        { nombre: 'Pond', persona: 'PR000067', funcion: ['Actor'], principal: false },
        { nombre: 'Bow', persona: 'PR000060', funcion: ['Actor'], principal: false },
        { nombre: 'Good', persona: 'PR000068', funcion: ['Actor'], principal: false },
        { nombre: 'Technic', persona: 'PR000203', funcion: ['Actor'], principal: false },
        { nombre: 'Keen', persona: 'PR000214', funcion: ['Actor'], principal: false },
        { nombre: 'Tul', persona: 'PR000210', funcion: ['Actor'], principal: true },
        { nombre: 'Gonhin', persona: 'PR000211', funcion: ['Actor'], principal: true },
        { nombre: 'Job', persona: 'PR000212', funcion: ['Actor'], principal: false },
        { nombre: 'Lemon', persona: 'PR000207', funcion: ['Actor'], principal: false },
        { nombre: 'Chompoo', persona: 'PR000206', funcion: ['Actor'], principal: false },
        { nombre: 'Champ', persona: 'PR000215', funcion: ['Actor'], principal: false },
        { nombre: 'Mai', persona: 'PR000213', funcion: ['Actor'], principal: false },
        { nombre: 'Madre de Can', persona: 'PR000199', funcion: ['Actor'], principal: false },
        { nombre: 'Madre de Ae', persona: 'PR000209', funcion: ['Actor'], principal: false },
        { nombre: 'Pete', persona: 'PR000192', funcion: ['Actor'], principal: false },
        { persona: 'PR000075', funcion: ['Director'] },
        { persona: 'PR000135', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000035', personajes: ['Tin', 'Can'] },
        { ship: 'SH000036', personajes: ['Kengkla', 'Techno'] },
        { ship: 'SH000037', personajes: ['Tum', 'Tar'] },
        { ship: 'SH000038', personajes: ['Tul', 'Gonhin'] }
    ],
    sinopsis: 'Después de la marcha de Pete, Ae se encuentra profundamente afectado por la ruptura y lucha por continuar con su vida. Mientras tanto, Tin y Can comienzan una relación complicada: Tin está decidido a acercarse a Can, pero las diferencias entre sus personalidades y sus respectivos mundos harán que el camino no sea sencillo. Can tendrá que descubrir qué significa realmente estar enamorado y aprender a aceptar sus propios sentimientos. Paralelamente, Techno intenta afrontar las consecuencias de su relación con Kengkla, mientras Tum y Tar continúan enfrentándose a sus propios conflictos. La llegada de nuevos personajes, entre ellos Tul y Gonhin, ampliará las historias familiares y sentimentales que rodean a los protagonistas.',
    multimedia: {
        portada: ['https://images.justwatch.com/poster/327079595/s718/Staffel-2.jpg'],
        trailer: ['https://www.youtube.com/watch?v=QINXcSbUZAA'],
        teaser: [],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000010', funcion: ['Productora'] },
        { codigo: 'EN000028', funcion: ['Plataforma'] },
        { codigo: 'EN000029', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== TharnType    ===================================================== */
{
    codigo: 'DR000024',    titulo: 'TharnType',    tituloOriginal: 'เกลียดนักมาเป็นที่รักกันซะดีๆ',
    alias: ['TharnType: The Series','TharnType The Series','TharnType: If You Hate Me That Much, I Should Make You Become My Lover'],
    tipo: 'Drama',
    anio: 2019,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000008', orden: 3 },
    universo: 'UN000001',
  	serie:'SR000024',	
    temporadas: 2,
    temporada: 1,
    episodios: 12,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2019-10-07',
    finalizacion: '2020-01-06',
    generos: ['Romance','Drama'],
    tags: ['BL'],
    personas: [
        { nombre: 'Tharn', persona: 'PR000224', funcion: ['Actor'], principal: true },
        { nombre: 'Type', persona: 'PR000225', funcion: ['Actor'], principal: true },
        { nombre: 'Techno', persona: 'PR000226', funcion: ['Actor'], principal: false },
        { nombre: 'Lhong', persona: 'PR000227', funcion: ['Actor'], principal: false },
        { nombre: 'Tum', persona: 'PR000228', funcion: ['Actor'], principal: false },
        { nombre: 'Tar', persona: 'PR000229', funcion: ['Actor'], principal: false },
        { nombre: 'Champ', persona: 'PR000230', funcion: ['Actor'], principal: false },
        { nombre: 'Thorn', persona: 'PR000231', funcion: ['Actor'], principal: false },
        { nombre: 'Khlui', persona: 'PR000232', funcion: ['Actor'], principal: false },
        { nombre: 'Seo', persona: 'PR000233', funcion: ['Actor'], principal: false },
        { nombre: 'Technic', persona: 'PR000234', funcion: ['Actor'], principal: false },
        { nombre: 'Khom', persona: 'PR000235', funcion: ['Actor'], principal: false },
        { nombre: 'San', persona: 'PR000236', funcion: ['Actor'], principal: false },
        { nombre: 'Puifai', persona: 'PR000237', funcion: ['Actor'], principal: false },
        { nombre: 'Oam', persona: 'PR000238', funcion: ['Actor'], principal: false },
        { nombre: 'Mac', persona: 'PR000239', funcion: ['Actor'], principal: false },
        { nombre: 'Team', persona: 'PR000240', funcion: ['Actor'], principal: false },
        { nombre: 'Mai', persona: 'PR000241', funcion: ['Actor'], principal: false },
        { nombre: 'Tae', persona: 'PR000242', funcion: ['Actor'], principal: false },
        { nombre: 'Padre de Tharn', persona: 'PR000243', funcion: ['Actor'], principal: false },
        { nombre: 'Madre de Tharn', persona: 'PR000244', funcion: ['Actor'], principal: false },
        { nombre: 'Padre de Type', persona: 'PR000245', funcion: ['Actor'], principal: false },
        { nombre: 'Madre de Type', persona: 'PR000246', funcion: ['Actor'], principal: false },
        { nombre: 'Thanya', persona: 'PR000247', funcion: ['Actor'], principal: false },
        { persona: 'PR000257', funcion: ['Director'] },
        { persona: 'PR000135', funcion: ['Guionista'] },
        { persona: 'PR000259', funcion: ['Guionista'] },
        { persona: 'PR000260', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000039', personajes: ['Tharn', 'Type'] }
    ],
    sinopsis: 'Tharn y Type son compañeros de habitación en la universidad, pero su convivencia comienza de forma complicada cuando Type descubre que Tharn es gay. Debido a un trauma de la infancia, Type siente un profundo rechazo hacia los hombres homosexuales y decide que Tharn debe abandonar la habitación. Sin embargo, Tharn se niega a marcharse y, a medida que ambos se conocen mejor, la hostilidad inicial comienza a transformarse en sentimientos que ninguno de los dos esperaba. Mientras su relación evoluciona, también deberán enfrentarse a los conflictos de sus amigos, sus familias y su propio pasado.',
    multimedia: {
        portada: ['https://i.pinimg.com/1200x/54/0b/19/540b190988e1f419149bbcadb0ad77b5.jpg','https://www.memindy.com/wp-content/uploads/2021/08/TharnType_The_Series_2019_poster.jpg'],
        trailer: [],
        teaser: ['https://www.youtube.com/watch?v=mHnEfVjdtRs'],
        pilot: [],
        ost: []
    },

  entidades: [
        { codigo: 'EN000011', funcion: ['Productora'] },
        { codigo: 'EN000014', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    especiales: [
        { titulo: 'TharnType Special: Our Final Love', fecha: '2020-01-19' }
    ],
    activo: true
},
/* ========================================== TharnType 2: 7 Years of Love    ===================================================== */
{
    codigo: 'DR000025',    titulo: 'TharnType 2: 7 Years of Love',    tituloOriginal: 'เกลียดนักมาเป็นที่รักกันซะดีๆ 2',
    alias: ['TharnType 2','TharnType The Series Season 2','7 Years of Love'],
    tipo: 'Drama',
    anio: 2020,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000008', orden: 4 },
    universo: 'UN000001',
  	serie:'SR000024',
    temporadas: 2,
    temporada: 2,
    episodios: 12,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2020-11-06',
    finalizacion: '2021-01-29',
    generos: ['Romance','Drama'],
    tags: ['BL'],
    personas: [
        { nombre: 'Tharn', persona: 'PR000224', funcion: ['Actor'], principal: true },
        { nombre: 'Type', persona: 'PR000225', funcion: ['Actor'], principal: true },
        { nombre: 'Fiat', persona: 'PR000248', funcion: ['Actor'], principal: true },
        { nombre: 'Leo', persona: 'PR000064', funcion: ['Actor'], principal: true },
        { nombre: 'Champ', persona: 'PR000230', funcion: ['Actor'], principal: false },
        { nombre: 'Dr. Khunpol', persona: 'PR000249', funcion: ['Actor'], principal: true },
        { nombre: 'Cirrus', persona: 'PR000251', funcion: ['Actor'], principal: true },
        { nombre: 'Phugun', persona: 'PR000250', funcion: ['Actor'], principal: true },
        { nombre: 'Techno', persona: 'PR000226', funcion: ['Actor'], principal: false },
        { nombre: 'Thorn', persona: 'PR000231', funcion: ['Actor'], principal: false },
        { nombre: 'Thanya', persona: 'PR000252', funcion: ['Actor'], principal: false },
        { nombre: 'Khom', persona: 'PR000235', funcion: ['Actor'], principal: false },
        { nombre: 'San', persona: 'PR000236', funcion: ['Actor'], principal: false },
        { nombre: 'Khlui', persona: 'PR000232', funcion: ['Actor'], principal: false },
        { nombre: 'Seo', persona: 'PR000233', funcion: ['Actor'], principal: false },
        { nombre: 'Amy', persona: 'PR000254', funcion: ['Actor'], principal: false },
        { nombre: 'Tum', persona: 'PR000228', funcion: ['Actor'], principal: false },
        { nombre: 'Tar', persona: 'PR000229', funcion: ['Actor'], principal: false },
        { nombre: 'Padre de Tharn', persona: 'PR000243', funcion: ['Actor'], principal: false },
        { nombre: 'Madre de Tharn', persona: 'PR000244', funcion: ['Actor'], principal: false },
        { nombre: 'Padre de Type', persona: 'PR000245', funcion: ['Actor'], principal: false },
        { nombre: 'Madre de Type', persona: 'PR000246', funcion: ['Actor'], principal: false },
        { persona: 'PR000258', funcion: ['Director'] },
        { persona: 'PR000259', funcion: ['Guionista'] },
        { persona: 'PR000260', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000039', personajes: ['Tharn', 'Type'] },
        { ship: 'SH000040', personajes: ['Leo', 'Fiat'] },
        { ship: 'SH000041', personajes: ['Cirrus', 'Phugun'] },
        { ship: 'SH000042', personajes: ['Champ', 'Dr. Khunpol'] }
    ],
    sinopsis: 'Han pasado siete años desde que Tharn y Type comenzaron su relación. Ahora ambos han terminado sus estudios y se enfrentan a una nueva etapa de su vida adulta. Tharn trabaja en el mundo de la música mientras Type trabaja en un hospital y ambos deben compaginar sus responsabilidades profesionales con su relación. La idea del matrimonio hace que surjan nuevos conflictos y dudas sobre su futuro juntos. Al mismo tiempo, sus amigos continúan con sus propias historias: Leo y Fiat afrontan los problemas de su relación, mientras Champ y el doctor Khunpol descubren que sus sentimientos van más allá de la amistad. La llegada de Cirrus y Phugun añade otra historia de amor al entorno de Tharn y Type.',
    multimedia: {
        portada: ['https://i.pinimg.com/1200x/eb/3e/28/eb3e285c3544c0fa5210b588cbe0dc1a.jpg','https://www.memindy.com/wp-content/uploads/2021/08/TharnType_The_Series_2021_poster-crop.jpg'],
        trailer: ['https://www.youtube.com/watch?v=SwtJr1xrs5c'],
        teaser: ['https://www.youtube.com/watch?v=i_-wUgi7laE'],
        pilot: [],
        ost: []
    },
    entidades: [
        { codigo: 'EN000011', funcion: ['Productora'] },
        { codigo: 'EN000014', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] },
        { codigo: 'EN000024', funcion: ['Plataforma'] },
        { codigo: 'EN000028', funcion: ['Plataforma'] }
    ],
    especiales: [
        { titulo: 'Episode 13', fecha: '2021-02-13' }
    ],
    activo: true
},  
/* ========================================== Kiss: The Series ========================================== */
{
    codigo: 'DR000026',    titulo: 'Kiss: The Series',    tituloOriginal: 'รักต้องจูบ',
    alias: ['Kiss The Series','Rak Tong Chup'],
    tipo: 'Drama',
    anio: 2016,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000009', orden: 1 },
    temporadas: 1,
    temporada: 1,
    episodios: 16,
    duracion: 60,
    estado: 'Finalizado',
    estreno: '2016-01-10',
    finalizacion: '2016-04-24',
    generos: ['Comedia','Romance','Drama'],
    tags: [],
    personas: [
        { nombre: 'Sandee', persona: 'PR000276', funcion: ['Actor'], principal: true },
        { nombre: 'Thada', persona: 'PR000270', funcion: ['Actor'], principal: true },
        { nombre: 'Sanrak', persona: 'PR000295', funcion: ['Actor'], principal: true },
        { nombre: 'Na', persona: 'PR000290', funcion: ['Actor'], principal: true },
        { nombre: 'Pete', persona: 'PR000292', funcion: ['Actor'], principal: false },
        { nombre: 'Kao', persona: 'PR000164', funcion: ['Actor'], principal: false },
        { nombre: 'June', persona: 'PR000171', funcion: ['Actor'], principal: false },
        { nombre: 'Thew', persona: 'PR000168', funcion: ['Actor'], principal: false },
        { nombre: 'First', persona: 'PR000020', funcion: ['Actor'], principal: false },
        { nombre: 'Ella', persona: 'PR000281', funcion: ['Actor'], principal: false },
        { nombre: 'Noina', persona: 'PR000172', funcion: ['Actor'], principal: false },
        { nombre: 'Chacha', persona: 'PR000286', funcion: ['Actor'], principal: false },
        { persona: 'PR000265', funcion: ['Director'] }
    ],
    ships: [
        { ship: 'SH000043', personajes: ['Pete','Kao'] },
        { ship: 'SH000044', personajes: ['Sandee','Thada'] },
        { ship: 'SH000045', personajes: ['Sanrak','Na'] },
        { ship: 'SH000046', personajes: ['Sanrak','First'] },
        { ship: 'SH000047', personajes: ['Sandee','Thew'] }
    ],
    sinopsis: 'Sandee y Thada son dos amigos universitarios que llevan años formando parte del mismo grupo de amigos. Aunque entre ellos existe una evidente atracción, ambos intentan convencerse de que su relación no es más que una amistad. La situación se complica cuando los sentimientos empiezan a hacerse imposibles de ignorar y los celos aparecen al entrar otras personas en sus vidas. Al mismo tiempo, Sanrak, la hermana de Sandee, vive sus propios conflictos sentimentales mientras intenta encontrar su lugar en el amor y en su relación con Na y First. A medida que los distintos romances se entrelazan, los protagonistas tendrán que enfrentarse a malentendidos, inseguridades, celos y sentimientos que durante mucho tiempo han preferido ocultar.',

      multimedia: {
        portada: ['https://pics.filmaffinity.com/kiss_the_series-875888852-large.jpg'],
        trailer: ['https://www.youtube.com/watch?v=9jEHvkC4OVc'],
        teaser: [],
        pilot: [],
        ost: []
    },
    entidades: [
        { codigo: 'EN000004', funcion: ['Productora'] },
        { codigo: 'EN000006', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Kiss Me Again ========================================== */
{
    codigo: 'DR000027',    titulo: 'Kiss Me Again',    tituloOriginal: 'จูบให้ได้ถ้านายแน่จริง',
    alias: ['Kiss Me Again The Series','Kiss Me Again'],
    tipo: 'Drama',
    anio: 2018,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000009', orden: 2 },
    temporadas: 1,
    temporada: 1,
    episodios: 14,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2018-04-22',
    finalizacion: '2018-07-22',
    generos: ['Comedia','Romance','Drama'],
    tags: [],
    personas: [
        { nombre: 'Sanwan', persona: 'PR000289', funcion: ['Actor'], principal: true },
        { nombre: 'R', persona: 'PR000267', funcion: ['Actor'], principal: true },
        { nombre: 'Sanson', persona: 'PR000273', funcion: ['Actor'], principal: true },
        { nombre: 'Matt', persona: 'PR000293', funcion: ['Actor'], principal: true },
        { nombre: 'Kao', persona: 'PR000164', funcion: ['Actor'], principal: false },
        { nombre: 'Pete', persona: 'PR000292', funcion: ['Actor'], principal: false },
        { nombre: 'Sansuay', persona: 'PR000269', funcion: ['Actor'], principal: false },
        { nombre: 'So', persona: 'PR000198', funcion: ['Actor'], principal: false },
        { nombre: 'Na', persona: 'PR000290', funcion: ['Actor'], principal: false },
        { nombre: 'Sandee', persona: 'PR000276', funcion: ['Actor'], principal: false },
        { nombre: 'Thada', persona: 'PR000270', funcion: ['Actor'], principal: false },
        { nombre: 'June', persona: 'PR000171', funcion: ['Actor'], principal: false },
        { nombre: 'Mork', persona: 'PR000268', funcion: ['Actor'], principal: false },
        { nombre: 'Sun', persona: 'PR000291', funcion: ['Actor'], principal: false },
        { nombre: 'Pluem', persona: 'PR000285', funcion: ['Actor'], principal: false },
        { persona: 'PR000014', funcion: ['Director','Guionista'] },
        { persona: 'PR000275', funcion: ['Guionista'] },
        { persona: 'PR000264', funcion: ['Guionista'] },
        { persona: 'PR000015', funcion: ['Guionista'] },
        { persona: 'PR000297', funcion: ['Historia'] }
    ],
    ships: [
        { ship: 'SH000043', personajes: ['Pete','Kao'] },
        { ship: 'SH000048', personajes: ['Sanwan','R'] },
        { ship: 'SH000049', personajes: ['Sanson','Matt'] },
        { ship: 'SH000050', personajes: ['Sansuay','So'] }
    ],
    sinopsis: 'La historia se centra en un grupo de jóvenes cuyas vidas sentimentales se cruzan entre la amistad, la atracción y los sentimientos que todavía no se atreven a reconocer. Sanwan y R mantienen una relación complicada en la que los sentimientos del pasado y las dificultades para comunicarse ponen a prueba su vínculo. Por otro lado, Sanson y Matt comienzan a acercarse mientras intentan descubrir qué quieren realmente el uno del otro, enfrentándose a sus propias inseguridades y a las circunstancias que los rodean. Paralelamente, las historias de Sandee, Thada, Kao, Pete y el resto de sus amigos continúan desarrollándose y conectan esta nueva etapa con los acontecimientos de Kiss: The Series. Entre nuevos romances, relaciones que cambian y sentimientos que resurgen, los protagonistas deberán decidir si están dispuestos a dejar atrás sus dudas y luchar por las personas que realmente quieren.',
    multimedia: {
        portada: ['https://boyslovefrance.wordpress.com/wp-content/uploads/2020/07/kissmeagain_poster02-1.jpg'],
        trailer: [],
        teaser: [],
        pilot: [],
        ost: []
    },
    entidades: [
        { codigo: 'EN000004', funcion: ['Productora'] },
        { codigo: 'EN000006', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Dark Blue Kiss ========================================== */
{
    codigo: 'DR000028',    titulo: 'Dark Blue Kiss',    tituloOriginal: 'จูบสุดท้ายเพื่อนายคนเดียว',
    alias: ['Dark Blue Kiss The Series'],
    tipo: 'Drama',
    anio: 2019,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: 'FR000009', orden: 3 },
    temporadas: 1,
    temporada: 1,
    episodios: 12,
    duracion: 50,
    estado: 'Finalizado',
    estreno: '2019-10-12',
    finalizacion: '2019-12-28',
    generos: ['Romance','Drama'],
    tags: ['BL'],
    personas: [
        { nombre: 'Pete', persona: 'PR000292', funcion: ['Actor'], principal: true },
        { nombre: 'Kao', persona: 'PR000164', funcion: ['Actor'], principal: true },
        { nombre: 'Sun', persona: 'PR000291', funcion: ['Actor'], principal: true },
        { nombre: 'Mork', persona: 'PR000268', funcion: ['Actor'], principal: true },
        { nombre: 'Non', persona: 'PR000266', funcion: ['Actor'], principal: false },
        { nombre: 'Rain', persona: 'PR000285', funcion: ['Actor'], principal: false },
        { nombre: 'Sandee', persona: 'PR000276', funcion: ['Actor'], principal: false },
        { nombre: 'Thada', persona: 'PR000270', funcion: ['Actor'], principal: false },
        { nombre: 'June', persona: 'PR000171', funcion: ['Actor'], principal: false },
        { nombre: 'Manow', persona: 'PR000021', funcion: ['Actor'], principal: false },
        { nombre: 'Kitty', persona: 'PR000277', funcion: ['Actor'], principal: false },
        { nombre: "Pete's Father", persona: 'PR000274', funcion: ['Actor'], principal: false },
        { nombre: "Kao's Mother", persona: 'PR000263', funcion: ['Actor'], principal: false },
        { nombre: 'Na', persona: 'PR000208', funcion: ['Actor'], principal: false },
        { nombre: 'Morn', persona: 'PR000284', funcion: ['Actor'], principal: false },
        { nombre: 'Gord', persona: 'PR000294', funcion: ['Actor'], principal: false },
        { nombre: 'Namwan', persona: 'PR000287', funcion: ['Actor'], principal: false },
        { persona: 'PR000279', funcion: ['Director'] },
        { persona: 'PR000296', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000043', personajes: ['Pete','Kao'] },
        { ship: 'SH000051', personajes: ['Sun','Mork'] },
        { ship: 'SH000052', personajes: ['Rain','Manow'] }
    ],
    sinopsis: 'Pete y Kao llevan tiempo juntos y han conseguido mantener su relación lejos de las miradas de quienes los rodean. Sin embargo, mantener su amor en secreto empieza a resultar cada vez más difícil, especialmente cuando Kao teme que su madre descubra la verdad sobre su relación. La situación se complica todavía más cuando Non, un estudiante al que Kao ayuda con sus estudios, comienza a acercarse demasiado a él y despierta los celos y las inseguridades de Pete. Al mismo tiempo, Sun, un joven responsable y trabajador que inicialmente desconfía de Mork por su actitud conflictiva, acaba descubriendo que detrás de su comportamiento existe una persona muy diferente de la que imaginaba. Mientras ambas historias avanzan, Pete y Kao tendrán que enfrentarse a los secretos, los celos y el miedo a perderse, mientras Sun y Mork intentan superar sus diferencias y descubrir qué significa realmente estar juntos. Las dos parejas deberán aprender a confiar en sus sentimientos y aceptar que el amor también implica afrontar los problemas y las consecuencias de las decisiones que toman.',
    multimedia: {
        portada: ['https://pics.filmaffinity.com/dark_blue_kiss-281192767-large.jpg'],
        trailer: ['https://www.youtube.com/watch?v=zRr2QTHukzo'],
        teaser: [],
        pilot: [],
        ost: []
    },

    entidades: [
        { codigo: 'EN000004', funcion: ['Productora'] },
        { codigo: 'EN000006', funcion: ['Emisora'] },
        { codigo: 'EN000022', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Don't Say No ========================================== */  
{
  codigo: 'DR000029',
  titulo: 'Don\'t Say No',
  tituloOriginal: 'เมื่อหัวใจใกล้กัน',
  alias: ['Don\'t Say No The Series', 'When Hearts Are Close Together'],
  tipo: 'Drama',
  anio: 2021,
  pais: 'TH',
  idioma: 'th',
  franquicia: { codigo: 'FR000008', orden: 5 },
  temporadas: 1,
  temporada: 1,
  episodios: 12,
  duracion: 50,
  estado: 'Finalizado',
  estreno: '2021-08-06',
  finalizacion: '2021-10-22',
  generos: ['Romance','Drama'],
  tags: ['BL','Universidad','Amistad','De amigos a amantes','Baloncesto'],
  personas: [
    { nombre: 'Leo', persona: 'PR000064', funcion: ['Actor'], principal: true },
    { nombre: 'Fiat', persona: 'PR000248', funcion: ['Actor'], principal: true },
    { nombre: 'Leon', persona: 'PR000298', funcion: ['Actor'], principal: true },
    { nombre: 'Pobphan', persona: 'PR000299', funcion: ['Actor'], principal: true },
    { nombre: 'Chai', persona: 'PR000300', funcion: ['Actor'], principal: false },
    { nombre: 'Seng', persona: 'PR000301', funcion: ['Actor'], principal: false },
    { nombre: 'Puth', persona: 'PR000302', funcion: ['Actor'], principal: false },
    { nombre: 'Beam', persona: 'PR000303', funcion: ['Actor'], principal: false },
    { nombre: 'Rin', persona: 'PR000304', funcion: ['Actor'], principal: false },
    { nombre: 'Ole', persona: 'PR000255', funcion: ['Actor'], principal: false },
    { nombre: 'Earth', persona: 'PR000305', funcion: ['Actor'], principal: false },
    { nombre: 'Varun', persona: 'PR000121', funcion: ['Actor'], principal: false },
    { nombre: 'Earth', persona: 'PR000306', funcion: ['Actor'], principal: false },
    { nombre: 'Natt', persona: 'PR000307', funcion: ['Actor'], principal: false },
    { persona: 'PR000258', funcion: ['Director'] },
    { persona: 'PR000135', funcion: ['Guionista'] }
  ],
  ships: [
    { ship: 'SH000040', personajes: ['Leo','Fiat'] },
    { ship: 'SH000053', personajes: ['Leon','Pobphan'] }
  ],
  sinopsis: 'Leo y Fiat llevan tiempo juntos y han conseguido mantener su relación lejos de las miradas de quienes los rodean. Sin embargo, mantener su amor en secreto empieza a resultar cada vez más difícil, especialmente cuando Fiat teme que su madre descubra la verdad sobre su relación. La situación se complica todavía más cuando Pobphan, un estudiante al que Fiat ayuda con sus estudios, comienza a acercarse demasiado a él y despierta los celos y las inseguridades de Leo. Al mismo tiempo, Leon, el hermano de Leo, se acerca a Pobphan y ambos comienzan a descubrir sentimientos que van más allá de su amistad. Mientras ambas historias avanzan, Leo y Fiat tendrán que enfrentarse a los secretos, los celos y el miedo a perderse, mientras Leon y Pobphan intentan descubrir qué significa realmente estar juntos. Las dos parejas deberán aprender a confiar en sus sentimientos y aceptar que el amor también implica afrontar los problemas y las consecuencias de las decisiones que toman.',
  multimedia: {
        portada: ['https://i.pinimg.com/736x/3b/10/ee/3b10ee5a240b5f418012a8b538e68197.jpg','https://www.memindy.com/wp-content/uploads/2021/08/don-t-say-no-expand-600x800.jpg'],
        trailer: ['https://www.youtube.com/watch?v=6viQRyMgfKI'],
        teaser: [],
        pilot: [],
        ost: []
    },
  
  entidades: [
    { codigo: 'EN000011', funcion: ['Productora'] },
    { codigo: 'EN000014', funcion: ['Emisora'] },
    { codigo: 'EN000022', funcion: ['Plataforma'] },
    { codigo: 'EN000024', funcion: ['Plataforma'] }
  ],
  especiales: [
    { titulo: 'The Secret (Love) - LeoFiat Special', fecha: '2021-07-04' },
    { titulo: 'When My Heart Says I Love You', fecha: '2021-11-06' }
  ],
  activo: true
},
/* ========================================== Close Friend T1 ========================================== */  
{
  codigo: 'DR000030',
  titulo: 'Close Friend T1',
  tituloOriginal: 'โคตรแฟน',
  alias: ['Close Friend The Series'],
  tipo: 'Drama',
  anio: 2021,
  pais: 'TH',
  idioma: 'th',
  franquicia: { codigo: '', orden: 0 },
  serie: 'SR000030',
  temporadas: 2,
  temporada: 1,
  episodios: 6,
  duracion: 20,
  estado: 'Finalizado',
  estreno: '2021-04-22',
  finalizacion: '2021-05-27',
  generos: ['Romance','Drama'],
  tags: ['BL','Amistad','Música'],
  personas: [
      { nombre: 'Pierce', persona: 'PR000055', funcion: ['Actor'], principal: true },
      { nombre: 'Typhoon', persona: 'PR000054', funcion: ['Actor'], principal: true },
      { nombre: 'Sin', persona: 'PR000064', funcion: ['Actor'], principal: true },
      { nombre: 'Moojoom', persona: 'PR000248', funcion: ['Actor'], principal: true },
      { nombre: 'Mini', persona: 'PR000308', funcion: ['Actor'], principal: true },
      { nombre: 'Titan', persona: 'PR000309', funcion: ['Actor'], principal: true },
      { nombre: 'Xiao Ping', persona: 'PR000310', funcion: ['Actor'], principal: true },
      { nombre: 'Peam', persona: 'PR000311', funcion: ['Actor'], principal: true },
      { nombre: 'Night', persona: 'PR000312', funcion: ['Actor'], principal: true },
      { nombre: 'Mekhin', persona: 'PR000313', funcion: ['Actor'], principal: true },
      { nombre: 'Ray', persona: 'PR000314', funcion: ['Actor'], principal: true },
      { nombre: 'Jedi', persona: 'PR000315', funcion: ['Actor'], principal: true },
      { persona: 'PR000340', funcion: ['Director'] },
      { persona: 'PR000341', funcion: ['Guionista'] },
      { persona: 'PR000342', funcion: ['Guionista'] }
  ],
  ships: [
      { ship: 'SH000012', personajes: ['Pierce','Typhoon'] },
      { ship: 'SH000054', personajes: ['Titan','Mini'] },
      { ship: 'SH000055', personajes: ['Peam','Xiao Ping'] },
      { ship: 'SH000056', personajes: ['Night','Mekhin'] },
      { ship: 'SH000057', personajes: ['Jedi','Ray'] }
  ],
  sinopsis: 'Seis historias, seis parejas y seis formas diferentes de entender el amor. Close Friend presenta una antología de historias independientes en las que la amistad, la atracción y los sentimientos comienzan a transformar las relaciones entre sus protagonistas. A lo largo de la temporada, las parejas se enfrentan a situaciones muy diferentes: desde los problemas de una relación que debe adaptarse a los cambios de la vida, hasta sentimientos que nacen entre amigos, encuentros inesperados, amores a distancia y relaciones que mezclan la realidad con la fantasía. Cada historia explora una forma distinta de acercarse al amor y muestra cómo, en ocasiones, la persona que buscamos puede estar mucho más cerca de lo que imaginamos. La música acompaña cada relato y se convierte en una parte esencial de estas seis pequeñas historias sobre el amor y la amistad.',
  multimedia: {
        portada: ['https://media.senscritique.com/media/000022195181/0/close_friend.jpg'],
        trailer: ['https://www.youtube.com/watch?v=IzwlwyAPwuo'],
        teaser: ['https://www.youtube.com/watch?v=UaVpNQKOo48'],
        pilot: [],
        ost: []
    },
  entidades: [
      { codigo: 'EN000030', funcion: ['Productora'] },
      { codigo: 'EN000031', funcion: ['Plataforma'] }
  ],
  activo: true
},
/* ========================================== Remember Me ========================================== */    
{
    codigo: 'DR000031',
    titulo: 'Remember Me',
    tituloOriginal: 'ความรักเขียนด้วยความรัก',
    alias: ['Remember Me The Series'],
    tipo: 'Drama',
    anio: 2022,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: '', orden: 0 },
    temporadas: 1,
    temporada: 1,
    episodios: 14,
    duracion: 45,
    estado: 'Finalizado',
    estreno: '2022-10-09',
    finalizacion: '2023-01-08',
    generos: ['Romance','Drama'],
    tags: ['BL','Amistad','Coming of Age'],
    personas: [
        { nombre: 'Gun', persona: 'PR000248', funcion: ['Actor'], principal: true },
        { nombre: 'Golf', persona: 'PR000064', funcion: ['Actor'], principal: true },
        { nombre: 'Name', persona: 'PR000316', funcion: ['Actor'], principal: true },
        { nombre: 'Em', persona: 'PR000317', funcion: ['Actor'], principal: true },
        { nombre: 'Nan', persona: 'PR000066', funcion: ['Actor','Director'], principal: true },
        { nombre: 'Champ', persona: 'PR000250', funcion: ['Actor'], principal: false },
        { nombre: 'Gun’s Mother', persona: 'PR000199', funcion: ['Actor'], principal: false },
        { nombre: 'Champ’s Grandfather', persona: 'PR000318', funcion: ['Actor'], principal: false },
        { nombre: 'Champ’s Mother', persona: 'PR000319', funcion: ['Actor'], principal: false },
        { nombre: 'Po', persona: 'PR000320', funcion: ['Actor'], principal: false },
        { nombre: 'Cha-em', persona: 'PR000321', funcion: ['Actor'], principal: false },
        { nombre: 'NoName', persona: 'PR000322', funcion: ['Actor'], principal: false },
        { nombre: 'Young Gun', persona: 'PR000323', funcion: ['Actor'], principal: false },
        { nombre: 'Champ’s Father', persona: 'PR000324', funcion: ['Actor'], principal: false },
        { nombre: 'Chompu', persona: 'PR000345', funcion: ['Actor'], principal: false },
        { persona: 'PR000075', funcion: ['Director'] },
        { persona: 'PR000343', funcion: ['Director'] },
        { persona: 'PR000344', funcion: ['Guionista'] }
    ],
    ships: [
        { ship: 'SH000040', personajes: ['Golf','Gun'] },
      	{ ship:'SH000058', personajes:['Em','Name'] },
        { ship: 'SH000059', personajes: ['Nan','Chompu'] }
    ],
    sinopsis: 'En un pequeño barrio de Tailandia, un grupo de amigos crece unido mientras sus vidas van cambiando al ritmo de una nueva era de comunicación. Gun comienza a cartearse con Golf, un estudiante de otra escuela al que conoce únicamente a través de sus cartas, y con el paso de los años su relación evoluciona de las cartas al MSN y, posteriormente, a otras formas de comunicación. Mientras tanto, Em intenta mantener el contacto con Name, su amigo de la infancia, cuya dificultad para comunicarse hace que sus sentimientos permanezcan ocultos durante mucho tiempo. Nan, el más despreocupado del grupo, también descubrirá que el amor puede aparecer de la forma más inesperada, mientras Champ intenta encontrar su propio camino lejos de su familia. A medida que los amigos pasan de la adolescencia a la universidad y después a la vida adulta, deberán enfrentarse a la distancia, los cambios, los malentendidos, las pérdidas y los sentimientos que durante años no se atrevieron a expresar. A través de cartas, ordenadores, teléfonos y mensajes, Remember Me retrata el paso del tiempo y demuestra que, aunque las formas de comunicarnos cambien, algunas personas permanecen conectadas en nuestra memoria y en nuestro corazón.',
    multimedia: {
        portada: ['https://image.tmdb.org/t/p/w500/gArcpCalXZ5szroNrXPueV9InAT.jpg'],
        trailer: ['https://www.youtube.com/watch?v=9W5E2WrmaXc'],
        teaser: [],
        pilot: [],
        ost: []
    },
  entidades: [
        { codigo: 'EN000032', funcion: ['Productora'] },
        { codigo: 'EN000033', funcion: ['Emisora'] },
        { codigo: 'EN000025', funcion: ['Plataforma'] }
    ],
    activo: true
},
/* ========================================== Be Mine, Superstar ========================================== */    
{
	codigo: 'DR000032',
	titulo: 'Be Mine, Superstar',
	tituloOriginal: 'พี่พระเอกกับเด็กหมาในกอง',
	alias: ['Be Mine SuperStar'],
	tipo: 'Drama',
	anio: 2023,
	pais: 'TH',
	idioma: 'th',
	franquicia: { codigo: '', orden: 0 },
	temporadas: 1,
	temporada: 1,
	episodios: 12,
	duracion: 50,
	estado: 'Finalizado',
	estreno: '2023-07-03',
	finalizacion: '2023-09-18',
	generos: ['Romance', 'Drama', 'Comedia'],
	tags: ['BL', 'Industria del entretenimiento', 'Amor no correspondido', 'Diferencia de edad'],
	personas: [
		{ nombre: 'Punn', persona: 'PR000064', funcion: ['Actor'], principal: true },
		{ nombre: 'Ashi', persona: 'PR000248', funcion: ['Actor'], principal: true },
		{ nombre: 'Mingmueang', persona: 'PR000062', funcion: ['Actor'], principal: true },
		{ nombre: 'Namning', persona: 'PR000325', funcion: ['Actor'], principal: true },
		{ nombre: 'Title', persona: 'PR000326', funcion: ['Actor'], principal: true },
		{ nombre: 'Somwan', persona: 'PR000327', funcion: ['Actor'], principal: false },
		{ nombre: 'Preaw', persona: 'PR000328', funcion: ['Actor'], principal: false },
		{ nombre: 'Paii', persona: 'PR000329', funcion: ['Actor'], principal: false },
		{ nombre: 'Kesorn', persona: 'PR000330', funcion: ['Actor'], principal: false },
		{ nombre: 'Phusit', persona: 'PR000338', funcion: ['Actor'], principal: false },
		{ nombre: 'Sopha', persona: 'PR000337', funcion: ['Actor'], principal: false },
		{ nombre: 'Film', persona: 'PR000331', funcion: ['Actor'], principal: false },
		{ nombre: 'Kevin', persona: 'PR000332', funcion: ['Actor'], principal: false },
		{ nombre: 'Worra', persona: 'PR000333', funcion: ['Actor'], principal: false },
		{ nombre: 'Bank', persona: 'PR000334', funcion: ['Actor'], principal: false },
		{ nombre: 'Diao', persona: 'PR000229', funcion: ['Actor'], principal: false },
		{ nombre: 'Suea', persona: 'PR000335', funcion: ['Actor'], principal: false },
		{ nombre: 'Sugas', persona: 'PR000336', funcion: ['Actor'], principal: false },
		{ nombre: 'Phupha', persona: 'PR000347', funcion: ['Actor'], principal: false },
		{ persona: 'PR000345', funcion: ['Director'] },
		{ persona: 'PR000346', funcion: ['Guionista'] }
	],
	ships: [
		{ ship: 'SH000040', personajes: ['Punn', 'Ashi'] },
		{ ship: 'SH000060', personajes: ['Mingmueang', 'Namning'] }
	],
	sinopsis: 'Punn lleva años enamorado de Ashi, un famoso actor al que admira desde que estaba en la universidad. Cuando consigue unas prácticas en el rodaje de una serie en la que Ashi participa, ve por fin la oportunidad de acercarse a la persona que ha admirado durante tanto tiempo. Sin embargo, conseguir que Ashi se fije en él no será sencillo, ya que el actor es reservado y mantiene una actitud distante hacia el amor. Mientras Punn intenta conquistar su corazón, su vida en el mundo de los rodajes le lleva a conocer a nuevas personas y a enfrentarse a situaciones que pondrán a prueba sus sentimientos. La aparición de Title, que también está interesado en Ashi, y los problemas sentimentales y profesionales de quienes los rodean harán que la relación entre ambos avance entre dudas, celos y malentendidos. A medida que Punn y Ashi dejan atrás la relación entre admirador e ídolo, deberán descubrir si sus sentimientos pueden convertirse en algo verdadero y superar las dificultades que aparecen cuando el amor se mezcla con el mundo del espectáculo.',
    multimedia: {
        portada: ['https://media.senscritique.com/media/000022195163/0/be_mine_superstar.webp'],
        trailer: ['https://www.youtube.com/watch?v=XHtUr1j0kb8'],
        teaser: [],
        pilot: [],
        ost: []
    },
	entidades: [
        { codigo: 'EN000034', funcion: ['Productora'] },
        { codigo: 'EN000035', funcion: ['Productora'] },
        { codigo: 'EN000036', funcion: ['Productora'] },
        { codigo: 'EN000037', funcion: ['Emisora'] },
        { codigo: 'EN000024', funcion: ['Plataforma'] }
    ],
	activo: true
},
 /* ========================================== Police in Love ========================================== */
{
    codigo: 'DR000033',
    titulo: 'Police in Love',
    tituloOriginal: 'ที่รักสารวัตรเธียร์',
    alias: ['Inspector Thiar’s Darling', 'The Inspector’s Wife'],
    tipo: 'Drama',
    anio: 2026,
    pais: 'TH',
    idioma: 'th',
    franquicia: { codigo: '', orden: 0 },
    temporadas: 1,
    temporada: 1,
    episodios: 12,
    estado: 'En emisión',
    estreno: '2026-09-12',
    generos: ['Romance', 'Drama', 'Comedia'],
    tags: ['BL', 'Policial', 'Matrimonio de conveniencia', 'Convivencia forzada'],
    origen: {
        tipo: 'Novela',
        titulo: 'The Inspector’s Wife',
        tituloOriginal: 'ภรรยาสารวัตรเธียร์',
        autor: 'Kanola',
        pais: 'TH'
    },
    personas: [
        { nombre: 'Thiar', persona: 'PR000139', funcion: ['Actor'], principal: true },
        { nombre: 'Mangkorn', persona: 'PR000138', funcion: ['Actor'], principal: true },
        { nombre: 'Saming', persona: 'PR000348', funcion: ['Actor'], principal: false },
        { nombre: 'Phuwin Siriyotha', persona: 'PR000349', funcion: ['Actor'], principal: false },
        { nombre: 'Lukphlab Phanphoprak', persona: 'PR000214', funcion: ['Actor'], principal: false },
        { nombre: 'Khanin Sritprasom', persona: 'PR000350', funcion: ['Actor'], principal: false },
        { nombre: 'Nadol Sitpras(o)et', persona: 'PR000351', funcion: ['Actor'], principal: false },
        { nombre: 'Cupid', persona: 'PR000352', funcion: ['Actor'], principal: false },
        { nombre: 'Thiar’s Mother', persona: 'PR000353', funcion: ['Actor'], principal: false },
        { persona: 'PR000354', funcion: ['Director'] }
    ],
    ships: [
        { ship: 'SH000027', personajes: ['Thiar', 'Mangkorn'] }
    ],
    sinopsis: 'Thiar, un inspector de policía cuya mala suerte no deja de empeorar, recibe el consejo de casarse para romper su mala fortuna. El elegido resulta ser Mangkorn, su subordinado y compañero con quien mantiene una relación llena de discusiones. El acuerdo parece sencillo: vivir juntos durante seis meses y después divorciarse. Sin embargo, la convivencia hará que ambos desarrollen sentimientos que complicarán un matrimonio que comenzó como una solución al destino.',
    multimedia: {
        portada: ['https://yflix.me/wp-content/uploads/2026/01/Cover-Police-696x869.webp','https://image.tmdb.org/t/p/original/4tMEPQlZO2B4wG4c0sHuoyaq4T8.jpg'],
        trailer: ['https://www.youtube.com/watch?v=xSFjW0tRWV8'],
        teaser: [],
        pilot: ['https://www.youtube.com/watch?v=tn4kAkUoQX4'],
        ost: ['https://www.youtube.com/watch?v=blfMpKFK1Ps']
    },
    entidades: [
        { codigo: 'EN000029', funcion: ['Plataforma'] },
        { codigo: 'EN000038', funcion: ['Productora'] }
    ],
    activo: true
},
/* ========================================== The Boy Next World ===================================================== */
{
    codigo: 'DR000034',
    titulo: 'The Boy Next World',
    tituloOriginal: 'คนละกาลเวลา',
    alias: ['The Boy Next World The Series', 'Khon La Kan Wela'],
    tipo: 'Drama',
    anio: 2025,
    pais: 'TH',
    idioma: 'th',
    universo: 'UN000001',
    temporadas: 1,
    temporada: 1,
    episodios: 12,
    duracion: 45,
    estado: 'Finalizado',
    estreno: '2025-01-09',
    finalizacion: '2025-03-27',
    generos: ['Romance', 'Drama', 'Fantasía'],
    tags: ['BL', 'Mundo paralelo'],
    personas: [
        { nombre: 'Cirrus', persona: 'PR000108', funcion: ['Actor'], principal: true },   // Boss Chaikamon
        { nombre: 'Phugun', persona: 'PR000109', funcion: ['Actor'], principal: true },   // Noeul Nuttarat
        { nombre: 'Wim', persona: 'PR000131', funcion: ['Actor'], principal: false },     // Donut Suppawit
        { nombre: 'Jin', persona: 'PR000130', funcion: ['Actor'], principal: false },     // Forth Kashane
        { nombre: 'Rome', persona: 'PR000355', funcion: ['Actor'], principal: false },    // Chai Sinsophak
        { nombre: 'Achi', persona: 'PR000356', funcion: ['Actor'], principal: false },    // Joke Chaloemdet
        { nombre: 'Tri', persona: 'PR000357', funcion: ['Actor'], principal: false },     // Creamy Ploypapas
        { nombre: 'Nalin', persona: 'PR000358', funcion: ['Actor'], principal: false },   // Yok Kanoklak
        { persona: 'PR000134', funcion: ['Director'] },                                   // Neti Suwanjinda
        { persona: 'PR000135', funcion: ['Guionista'] }                                  // MAME
    ],
    ships: [
        { ship: 'SH000022', personajes: ['Cirrus', 'Phugun'] }, // BossNoeul (Oficial)
        { ship: 'SH000061', personajes: ['Wim', 'Jin'] }        // Donut & Forth (No oficial)
    ],
    sinopsis: 'Phugun es un chico ordinario que nunca ha tenido una relación amorosa ni cree en el amor verdadero. Todo cambia cuando Cirrus, un apuesto y misterioso hombre, aparece en su vida afirmando venir de un mundo paralelo donde ambos son pareja. Aunque Phugun al principio se muestra escéptico, la devoción y protección incondicional de Cirrus comienzan a derribar sus barreras, obligándolo a cuestionar sus sentimientos y la realidad de los universos paralelos.',
        multimedia: {
        portada: ['https://i.pinimg.com/736x/6a/01/04/6a010461b1df7475f5ba59c10ee18add.jpg',
            'https://www.memindy.com/wp-content/uploads/2025/03/LINE_ALBUM_2024.12.13_241215_12-819x1024.jpg'
        ],
        trailer: ['https://www.youtube.com/watch?v=Iw5dFkxvtMU'],
        teaser: ['https://www.youtube.com/watch?v=hLyjZGz0-Cc'],
        pilot: ['https://www.youtube.com/watch?v=CQViG3zByo4'],
        ost: []
    },

    entidades: [
        { codigo: 'EN000011', funcion: ['Productora'] },  // Me Mind Y
        { codigo: 'EN000024', funcion: ['Plataforma'] },  // iQIYI
        { codigo: 'EN000023', funcion: ['Plataforma'] }   // YouTube
    ],
    especiales: [],
    activo: true
},

/* ========================================== Crazy Love, Moo-Moo! ===================================================== */
{
    codigo: 'DR000035',
    titulo: 'Crazy Love, Moo-Moo!',
    tituloOriginal: 'พี่ฟากชอบเธอมู่',
    alias: ['CrazyLove-MooMoo', 'Phi Fak Chop Thoe Mu'],
    tipo: 'Drama',
    anio: 2026,
    pais: 'TH',
    idioma: 'th',
    universo: '',
    franquicia: { codigo: '', orden: 0 },
    temporadas: 1,
    temporada: 1,
    episodios: 10,
    duracion: 47,
    estado: 'Finalizado',
    estreno: '2026-05-09',
    finalizacion: '2026-07-11',
    generos: ['Romance', 'Comedia', 'Juventud'],
    tags: ['BL', 'Enemies to Lovers', 'Los opuestos se atraen', 'Romance universitario'],
    origen: {
        tipo: 'Novela',
        titulo: 'Phi Fak Chop Thoe Mu',
        tituloOriginal: 'พี่ฟากชอบเธอมู่',
        autor: 'Meaw Sorn Mied',
        pais: 'TH'
    },
    personas: [
        { nombre: 'Fu Tong / Fak', persona: 'PR000108', funcion: ['Actor'], principal: true }, // Boss Chaikamon
        { nombre: 'Moo / Muying', persona: 'PR000109', funcion: ['Actor'], principal: true },   // Noeul Nuttarat
        { nombre: 'Thai Tong', persona: 'PR000359', funcion: ['Actor'], principal: false },     // Turbo Chanokchon
        { nombre: 'Yu', persona: 'PR000360', funcion: ['Actor'], principal: false },            // Noh Phouluang
        { nombre: 'Tee', persona: 'PR000361', funcion: ['Actor'], principal: false },           // Poom Wachirapanya
        { nombre: 'Jeab', persona: 'PR000362', funcion: ['Actor'], principal: false },          // Effect Narawich
        { nombre: 'Tian', persona: 'PR000131', funcion: ['Actor'], principal: false },          // Donut Suppawit
        { persona: 'PR000363', funcion: ['Director'] }                                          // Film Pawis Sowsrion
    ],
    ships: [
        { ship: 'SH000022', personajes: ['Fu Tong / Fak', 'Moo / Muying'] },                   // BossNoeul (Oficial)
        { ship: 'SH000062', personajes: ['Thai Tong', 'Yu'] },                                  // Turbo & Noh (No oficial)
        { ship: 'SH000063', personajes: ['Tee', 'Jeab'] }                                       // Poom & Effect (No oficial)
    ],
    sinopsis: 'Moo es un joven terco y decidido que asegura saber exactamente lo que busca en el amor. Todo se complica cuando irrumpe en su vida Fu, un chico persistente, excesivamente encantador e imposible de ignorar. Lo que comienza como coqueteos, burlas constantes y rivalidad juvenil pronto da paso a malentendidos, interacciones en línea y celos desbordantes, obligando a ambos a derribar sus barreras y admitir lo que realmente sienten.',
    multimedia: {
        portada: [
            'https://blglflix.com/wp-content/uploads/2026/06/crazy-love-moo-moo-683x1024.jpg',
			'https://www.viu.com/ott/viuscene/wp-content/uploads/2026/05/Crazy-Love-Moo-Moo-%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B8%9F%E0%B8%B2%E0%B8%81%E0%B8%8A%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%98%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B9%88-Fresh-Releases-Local-Viu-Original-LGBTQ-Thai-BL-Drama-Rom-com-Boss-Chaikamon-Sermsongwittaya-Noeul-Nuttarat-Tangwai-thumbnail-vertical-e1778556959402.jpeg'
        ],
        trailer: ['https://www.youtube.com/watch?v=GRP1l1j3lUE'],
        teaser: [],
        pilot: [],
        ost: []
    },
    entidades: [
        { codigo: 'EN000011', funcion: ['Productora'] },  // Me Mind Y
        { codigo: 'EN000031', funcion: ['Plataforma'] },  // Viu
        { codigo: 'EN000023', funcion: ['Plataforma'] }   // YouTube
    ],
    especiales: [],
    activo: true
},

	/* ========================================== The Crow Club ===================================================== */
{
    codigo: 'DR000036',
    titulo: 'The Crow Club',
    tituloOriginal: 'อีกาสมาคม',
    alias: [],
    tipo: 'Drama',
    anio: 2026,
    pais: 'TH',
    idioma: 'th',
    universo: '',
    franquicia: { codigo: '', orden: 0 },
    temporadas: 1,
    temporada: 1,
    episodios: 16,
    duracion: null,
    estado: 'En emisión',
    estreno: '2026-09-18',
    finalizacion: '2027-01-08',
    generos: ['Romance', 'Comedia'],
    tags: ['BL'],

    personas: [
        { nombre: 'Talay', persona: 'PR000364', funcion: ['Actor'], principal: true },
        { nombre: 'Sun', persona: 'PR000365', funcion: ['Actor'], principal: true },
        { nombre: 'Vann', persona: 'PR000366', funcion: ['Actor'], principal: true },
        { nombre: 'Rakkhun', persona: 'PR000367', funcion: ['Actor'], principal: true },
        { nombre: 'Phatee', persona: 'PR000368', funcion: ['Actor'], principal: true },
        { nombre: 'Ranne', persona: 'PR000250', funcion: ['Actor'], principal: true },
        { nombre: 'Tangmo', persona: 'PR000369', funcion: ['Actor'], principal: true },
        { nombre: 'Yoyeh', persona: 'PR000370', funcion: ['Actor'], principal: true },

        { nombre: 'Linda', persona: 'PR000377', funcion: ['Actor'], principal: false },
        { nombre: 'Kala', persona: 'PR000378', funcion: ['Actor'], principal: false },
        { nombre: 'Traiphop', persona: 'PR000379', funcion: ['Actor'], principal: false },
        { nombre: 'Kan', persona: 'PR000012', funcion: ['Actor'], principal: false },
        { nombre: 'Mimi', persona: 'PR000380', funcion: ['Actor'], principal: false },
        { nombre: 'Tonhon', persona: 'PR000381', funcion: ['Actor'], principal: false },
        { nombre: 'Ne', persona: 'PR000382', funcion: ['Actor'], principal: false },
        { nombre: 'Saw', persona: 'PR000383', funcion: ['Actor'], principal: false },
        { nombre: 'Kao', persona: 'PR000384', funcion: ['Actor'], principal: false },
        { nombre: 'PJ', persona: 'PR000385', funcion: ['Actor'], principal: false },
        { persona: 'PR000386', funcion: ['Actor'], principal: false },
        { nombre: 'Chok', persona: 'PR000387', funcion: ['Actor'], principal: false },

        { persona: 'PR000371', funcion: ['Director'] },
        { persona: 'PR000372', funcion: ['Guionista'] },
        { persona: 'PR000373', funcion: ['Guionista'] },
        { persona: 'PR000374', funcion: ['Guionista'] },
        { persona: 'PR000375', funcion: ['Guionista'] },
        { persona: 'PR000376', funcion: ['Guionista'] }
    ],

    ships: [
        { ship: 'SH000064', personajes: ['Talay', 'Sun'] },
        { ship: 'SH000065', personajes: ['Vann', 'Rakkhun'] },
        { ship: 'SH000066', personajes: ['Phatee', 'Ranne'] },
        { ship: 'SH000067', personajes: ['Tangmo', 'Yoyeh'] }
    ],

    sinopsis: 'En el misterioso bar The Crow Club, dirigido por Linda, se reúnen personas conocidas como “cuervos”, especialistas en resolver problemas extraños a cambio de dinero. A través de los encargos que reciben, sus historias personales y relaciones comienzan a entrelazarse.',

    multimedia: {
        portada: [
            'https://pbs.twimg.com/media/G_z8yd4bUAEgWXo.jpg',
            'https://pbs.twimg.com/media/G_wcURMXAAA8kcU.jpg'
        ],
        trailer: [
            'https://www.youtube.com/watch?v=4A2OptH0oh8'
        ],
        teaser: [],
        pilot: [
            'https://www.youtube.com/watch?v=xRXO7hGWbgU'
        ],
        ost: []
    },

    entidades: [
        { codigo: 'EN000014', funcion: ['Emisora'] },
        { codigo: 'EN000039', funcion: ['Productora'] },
        { codigo: 'EN000040', funcion: ['Plataforma'] },
        { codigo: 'EN000041', funcion: ['Plataforma'] },
        { codigo: 'EN000023', funcion: ['Plataforma'] }
    ],

    especiales: [],
    activo: true
},
	/* ========================================== The Invisible Dragon ===================================================== */

	{
codigo: 'DR000037',
titulo: 'The Invisible Dragon',
tituloOriginal: 'เคียงมังกร',
alias: [],
tipo: 'Drama',
anio: 2026,
pais: 'TH',
idioma: 'th',
universo: '',
franquicia: { codigo: '', orden: 0 },
temporadas: 1,
temporada: 1,
episodios: null,
duracion: null,
estado: 'Anunciado',
estreno: '',
finalizacion: '',
generos: ['Romance', 'Drama'],
tags: ['BL'],
personas: [
{ nombre: 'Earn', persona: 'PR000388', funcion: ['Actor'], principal: true },
{ nombre: 'Khun', persona: 'PR000017', funcion: ['Actor'], principal: true },
{ nombre: 'Yok', persona: 'PR000389', funcion: ['Actor'], principal: false },
{ nombre: 'Leng', persona: 'PR000391', funcion: ['Actor'], principal: false },
{ nombre: 'Khimhan', persona: 'PR000390', funcion: ['Actor'], principal: false },
{ persona: 'PR000392', funcion: ['Director'] }
],
ships: [
{ ship: 'SH000068', personajes: ['Earn', 'Khun'] }
],
sinopsis: 'Khun aspira a convertirse en la cabeza del león para el Festival del Dragón y se interesa por Earn. Earn, que fue adoptado y no posee sangre de dragón, está más preocupado por conseguir convocar al dragón. Mientras ambos entrenan y se acercan, Leng se convierte en un obstáculo para su relación.',
multimedia: {
portada: [
'https://m.media-amazon.com/images/M/MV5BZDk3NWFjNWYtOGNkMy00OGI3LTk5MzQtNTFhOGUwYWU2NDY0XkEyXkFqcGc%40.*V1*.jpg'
],
trailer: [],
teaser: [],
pilot: [
'https://www.youtube.com/watch?v=vM6E73hy9-8'
],
ost: []
},
entidades: [
{ codigo: 'EN000007', funcion: ['Productora'] },  // The One Enterprise
{ codigo: 'EN000004', funcion: ['Productora'] },  // GMMTV
{ codigo: 'EN000042', funcion: ['Productora'] }   // Maker-Y
],
especiales: [],
activo: true
},
	/* ========================================== Khemjira ===================================================== */
	{
codigo: 'DR000038',
titulo: 'Khemjira',
tituloOriginal: 'เขมจิราต้องรอด',
alias: ['Khemjira Will Survive'],
tipo: 'Drama',
anio: 2025,
pais: 'TH',
idioma: 'th',
universo: '',
franquicia: { codigo: 'FR000010', orden: 1 },
temporadas: 1,
temporada: 1,
episodios: 12,
duracion: null,
estado: 'Finalizado',
estreno: '2025-08-09',
finalizacion: '2025-10-25',
generos: ['Romance', 'Drama', 'Sobrenatural', 'Terror'],
tags: ['BL'],
personas: [
{ nombre: 'Khemjira Chandrapisut (Khem)', persona: 'PR000393', funcion: ['Actor'], principal: true },
{ nombre: 'Khemjira (joven)', persona: 'PR000424', funcion: ['Actor'], principal: true },
{ nombre: 'Khemmika', persona: 'PR000035', funcion: ['Actor'], principal: true },
{ nombre: 'Pharan Rueangdet / Phawat / Phuchagin', persona: 'PR000394', funcion: ['Actor'], principal: true },
{ nombre: 'Pharan (14 años)', persona: 'PR000408', funcion: ['Actor'], principal: true },
{ nombre: 'Ramphueng', persona: 'PR000397', funcion: ['Actor'], principal: true },
{ nombre: 'Chanwit Charoenkiatpricha (Chan)', persona: 'PR000395', funcion: ['Actor'], principal: true },
{ nombre: 'Chayada', persona: 'PR000402', funcion: ['Actor'], principal: true },
{ nombre: 'Jettana Nakarnkul (Jet)', persona: 'PR000396', funcion: ['Actor'], principal: true },
{ nombre: 'Jintana', persona: 'PR000401', funcion: ['Actor'], principal: true },

    { nombre: 'Chayos', persona: 'PR000410', funcion: ['Actor'], principal: false },
    { nombre: 'Thong / Suea', persona: 'PR000399', funcion: ['Actor'], principal: false },
    { nombre: 'Ek / Singha', persona: 'PR000398', funcion: ['Actor'], principal: false },
    { nombre: 'Khaekhai / Kakanang / Khwannari', persona: 'PR000403', funcion: ['Actor'], principal: false },
    { nombre: 'Phrima', persona: 'PR000407', funcion: ['Actor'], principal: false },
    { nombre: 'Phakhaphong (Phong)', persona: 'PR000011', funcion: ['Actor'], principal: false },
    { nombre: 'Jane', persona: 'PR000411', funcion: ['Actor'], principal: false },
    { nombre: 'Kachen Erdoğan', persona: 'PR000413', funcion: ['Actor'], principal: false },

    { persona: 'PR000416', funcion: ['Director'] },
    { persona: 'PR000417', funcion: ['Director'] },
    { persona: 'PR000418', funcion: ['Director'] },
    { persona: 'PR000419', funcion: ['Guionista'] },
    { persona: 'PR000420', funcion: ['Guionista'] }
],
ships: [
    { ship: 'SH000069', personajes: ['Pharan', 'Khemjira'] },
    { ship: 'SH000070', personajes: ['Chan', 'Jet'] }
],
sinopsis: 'Khemjira nace en una familia marcada por una maldición que condena a los hombres de la familia a morir jóvenes. Su madre le da un nombre femenino para intentar protegerlo. Al acercarse a la edad en la que la maldición puede cumplirse, Khem se ve obligado a enfrentarse a fenómenos sobrenaturales y busca ayuda de Pharan, un poderoso maestro de magia ancestral.',
multimedia: {
    portada: ['https://m.media-amazon.com/images/M/MV5BMzZkZGVhZjAtMmYyZS00MGYzLWIyOTktNjJhYTAyMTVhMThhXkEyXkFqcGc%40._V1_.jpg'  ],
    trailer: [        'https://www.youtube.com/watch?v=PV7rg5Pl-7Q'    ],
    teaser: [],
    pilot: [],
    ost: []
},
entidades: [
    { codigo: 'EN000043', funcion: ['Productora'] },  // Mandee Work
    { codigo: 'EN000014', funcion: ['Emisora'] },     // One 31
    { codigo: 'EN000024', funcion: ['Plataforma'] }   // iQIYI
],
especiales: [],
activo: true

},

	/* ========================================== Khemjira Forever ===================================================== */
{
codigo: 'DR000039',
titulo: 'Khemjira Forever',
tituloOriginal: 'เขมจิราต้องรอดตลอดกาล',
alias: [
'Khemjira Forever The Series',
'Khemjira Must Survive Forever',
'Khemjira Special +1'
],
tipo: 'Drama',
anio: 2026,
pais: 'TH',
idioma: 'th',
universo: '',
franquicia: { codigo: 'FR000010', orden: 2 },
temporadas: 1,
temporada: 1,
episodios: 3,
duracion: null,
estado: 'Anunciado',
estreno: '',
finalizacion: '',
generos: ['Romance', 'Drama', 'Sobrenatural'],
tags: ['BL'],
personas: [
{ nombre: 'Khemjira Chandrapisut (Khem)', persona: 'PR000393', funcion: ['Actor'], principal: true },
{ nombre: 'Pharan Rueangdet', persona: 'PR000394', funcion: ['Actor'], principal: true },
{ nombre: 'Chanwit Charoenkiatpricha (Chan)', persona: 'PR000395', funcion: ['Actor'], principal: true },
{ nombre: 'Jettana Nakarnkul (Jet)', persona: 'PR000396', funcion: ['Actor'], principal: true },

    { persona: 'PR000416', funcion: ['Director'] },
    { persona: 'PR000417', funcion: ['Director'] },
    { persona: 'PR000418', funcion: ['Director'] }
],
ships: [
    { ship: 'SH000069', personajes: ['Pharan', 'Khemjira'] },
    { ship: 'SH000070', personajes: ['Chan', 'Jet'] }
],
sinopsis: '',
multimedia: {
    portada: ['https://i.pinimg.com/736x/45/5c/67/455c673c153ce9821787d978d4d8073c.jpg',
        'https://img.youtube.com/vi/XAfGM3EbAjE/maxresdefault.jpg'
    ],
    trailer: [],
    teaser: [],
    pilot: [
        'https://www.youtube.com/watch?v=XAfGM3EbAjE'
    ],
    ost: []
},
entidades: [
    { codigo: 'EN000043', funcion: ['Productora'] }   // Mandee Work
],
especiales: [],
activo: true
},

	
/* ==========================================   Cutie Pie — DR000040   ========================================== */
{
codigo:'DR000040',
titulo:'Cutie Pie',
tituloOriginal:'นิ่งเฮียก็หาว่าซื่อ',
alias:['Cutie Pie The Series'],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:{
    codigo:'FR000011',
    orden:1
},
universo:'',
serie:'SR000040',
temporadas:2,
temporada:1,
episodios:12,
duracion:50,
estado:'Finalizado',
estreno:'2022-02-19',
finalizacion:'2022-05-14',
generos:['Romance','Comedia','Drama'],
tags:['BL'],
personas:[
    {nombre:'Lian Kilen Wang',persona:'PR000425',funcion:['Actor'],principal:true},
    {nombre:'Kuea Keerati',persona:'PR000426',funcion:['Actor'],principal:true},
    {nombre:'Yi Phayak Chatdecha Chen',persona:'PR000309',funcion:['Actor'],principal:true},
    {nombre:'Khondiao Thacha Wongtheerachot',persona:'PR000308',funcion:['Actor'],principal:true},
    {nombre:'Syn',persona:'PR000427',funcion:['Actor'],principal:true},
    {nombre:'Nuea',persona:'PR000428',funcion:['Actor'],principal:true},
    {nombre:'Ton',persona:'PR000112',funcion:['Actor'],principal:false},
    {nombre:'Jaab',persona:'PR000429',funcion:['Actor'],principal:false},
    {nombre:'Jay',persona:'PR000430',funcion:['Actor'],principal:false},
    {nombre:'Foei',persona:'PR000431',funcion:['Actor'],principal:false},
    {nombre:'Nuchy',persona:'PR000432',funcion:['Actor'],principal:false},
    {nombre:'Win',persona:'PR000433',funcion:['Actor'],principal:false},
    {nombre:'Black',persona:'PR000434',funcion:['Actor'],principal:false},
    {nombre:'Jade',persona:'PR000435',funcion:['Actor'],principal:false},
    {nombre:'MC',persona:'PR000436',funcion:['Actor'],principal:false},
    {nombre:'Auea',persona:'PR000437',funcion:['Actor'],principal:false},
    {nombre:"Kuea's grandfather",persona:'PR000438',funcion:['Actor'],principal:false},
    {nombre:'Kewalin',persona:'PR000439',funcion:['Actor'],principal:false},
    {nombre:'Young Lian',persona:'PR000440',funcion:['Actor'],principal:false},
    {persona:'PR000416',funcion:['Director']},
    {persona:'PR000340',funcion:['Guionista']}
],
ships:[
    {ship:'SH000071',personajes:['Lian Kilen Wang','Kuea Keerati']},
    {ship:'SH000054',personajes:['Yi Phayak Chatdecha Chen','Khondiao Thacha Wongtheerachot']},
    {ship:'SH000072',personajes:['Nuea','Syn']}
],
sinopsis:'Lian y Kuea están comprometidos desde pequeños debido a un acuerdo entre sus familias. Mientras Kuea intenta mantener su imagen de prometido perfecto, Lian comienza a cuestionar sus sentimientos y la relación que ambos han construido.',
multimedia:{
    portada:['https://media.senscritique.com/media/000020315342/0/cutie_pie.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=J9_kF-esM0w'
    ],
    teaser:[],
    pilot:[
        'https://www.youtube.com/watch?v=yFXe_GpaB1g'
    ],
    ost:[
        'https://www.youtube.com/watch?v=P3ZeKebVBbQ',
        'https://www.youtube.com/watch?v=l77JBJOwNVY',
        'https://www.youtube.com/watch?v=F15X-GwvrRU',
        'https://www.youtube.com/watch?v=JKspqsHxcwk',
        'https://www.youtube.com/watch?v=z6pvbj5iR2A',
        'https://www.youtube.com/watch?v=3BlVFX_JvaM',
        'https://www.youtube.com/watch?v=5uj6D6bwq8U',
        'https://www.youtube.com/watch?v=fjebr5fmc44',
        'https://www.youtube.com/watch?v=7_3y06R112w'
    ]
},
entidades:[
    {codigo:'EN000043',funcion:['Productora']},
    {codigo:'EN000045',funcion:['Productora']},
    {codigo:'EN000044',funcion:['Emisora']}
],
especiales:[],
activo:true
},

/* ==========================================   Cutie Pie 2 You — DR000041   ========================================== */
{
codigo:'DR000041',
titulo:'Cutie Pie 2 You',
tituloOriginal:'นิ่งเฮีย 2 You',
alias:[],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:{
    codigo:'FR000011',
    orden:2
},
universo:'',
serie:'SR000040',
temporadas:2,
temporada:2,
episodios:4,
duracion:50,
estado:'Finalizado',
estreno:'2023-01-06',
finalizacion:'2023-01-27',
generos:['Romance','Comedia','Drama'],
tags:['BL'],
personas:[
    {nombre:'Lian Kilen Wang',persona:'PR000425',funcion:['Actor'],principal:true},
    {nombre:'Kuea Keerati',persona:'PR000426',funcion:['Actor'],principal:true},
    {nombre:'Yi Phayak Chatdecha Chen',persona:'PR000309',funcion:['Actor'],principal:true},
    {nombre:'Khondiao Thacha Wongtheerachot',persona:'PR000308',funcion:['Actor'],principal:true},
    {nombre:'Nuea',persona:'PR000428',funcion:['Actor'],principal:true},
    {nombre:'Syn',persona:'PR000427',funcion:['Actor'],principal:true},
    {nombre:'Foei',persona:'PR000431',funcion:['Actor'],principal:false},
    {nombre:'Ton',persona:'PR000112',funcion:['Actor'],principal:false},
    {nombre:'Nuchy',persona:'PR000432',funcion:['Actor'],principal:false},
    {nombre:'Madam Sunoko',persona:'PR000319',funcion:['Actor'],principal:false},
    {nombre:'Jay',persona:'PR000430',funcion:['Actor'],principal:false},
    {nombre:'Jaab',persona:'PR000429',funcion:['Actor'],principal:false},
    {nombre:'Sia',persona:'PR000441',funcion:['Actor'],principal:false},
    {nombre:'Kewalin',persona:'PR000439',funcion:['Actor'],principal:false},
    {nombre:'Kim',persona:'PR000442',funcion:['Actor'],principal:false},
    {persona:'PR000416',funcion:['Director']},
    {persona:'PR000443',funcion:['Guionista']},
    {persona:'PR000340',funcion:['Guionista']}
],
ships:[
    {ship:'SH000071',personajes:['Lian Kilen Wang','Kuea Keerati']},
    {ship:'SH000054',personajes:['Yi Phayak Chatdecha Chen','Khondiao Thacha Wongtheerachot']},
    {ship:'SH000072',personajes:['Nuea','Syn']}
],
sinopsis:'Lian y Kuea continúan su relación mientras afrontan los preparativos de su boda y las decisiones que deben tomar sobre su futuro juntos. Kuea también debe decidir qué camino seguir entre su vida junto a Lian y su deseo de desarrollar su carrera como artista.',
multimedia:{
    portada:['https://m.media-amazon.com/images/M/MV5BYzRlNDE1YjAtMmNmZi00YjcwLTg1Y2EtOTQyYTg5NTc2MGJkXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg',
			 'https://www.ethaicd.com/img/93437.jpg',
			 'https://img.youtube.com/vi/BPe5h1hwD04/maxresdefault.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=BPe5h1hwD04'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=QMgDXmbvPLw',
        'https://www.youtube.com/watch?v=r84aCKFNBTY',
        'https://www.youtube.com/watch?v=yJe-xRx1aZU'
    ]
},
entidades:[
    {codigo:'EN000043',funcion:['Productora']},
    {codigo:'EN000024',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   Naughty Babe — DR000042   ========================================== */
{
codigo:'DR000042',
titulo:'Naughty Babe',
tituloOriginal:'ดื้อเฮียก็หาว่าซน',
alias:[],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:{
    codigo:'FR000011',
    orden:3
},
universo:'',
serie:'SR000042',
temporadas:1,
temporada:1,
episodios:8,
duracion:50,
estado:'Finalizado',
estreno:'2023-09-02',
finalizacion:'2023-10-21',
generos:['Romance','Comedia','Drama'],
tags:['BL'],
personas:[
    {nombre:'Yi',persona:'PR000309',funcion:['Actor'],principal:true},
    {nombre:'Khondiao',persona:'PR000308',funcion:['Actor'],principal:true},
    {nombre:'Aon',persona:'PR000211',funcion:['Actor'],principal:false},
    {nombre:'Lian',persona:'PR000425',funcion:['Actor'],principal:false},
    {nombre:'Kuea',persona:'PR000426',funcion:['Actor'],principal:false},
    {nombre:'Makorn Chen',persona:'PR000409',funcion:['Actor'],principal:false},
    {nombre:'Sattha',persona:'PR000444',funcion:['Actor'],principal:false},
    {nombre:'Tem',persona:'PR000445',funcion:['Actor'],principal:false},
    {nombre:'Sathapon',persona:'PR000446',funcion:['Actor'],principal:false},
    {nombre:'Chen',persona:'PR000447',funcion:['Actor'],principal:false},
    {nombre:'Nuea',persona:'PR000428',funcion:['Actor'],principal:false},
    {nombre:'Tam',persona:'PR000448',funcion:['Actor'],principal:false},
    {nombre:'Winner',persona:'PR000449',funcion:['Actor'],principal:false},
    {persona:'PR000416',funcion:['Director']}
],
ships:[
    {ship:'SH000054',personajes:['Yi','Khondiao']},
    {ship:'SH000071',personajes:['Lian','Kuea']}
],
sinopsis:'Khondiao está comprometido con Yi, pero siente que su relación se ha enfriado y decide alejarse. Cuando Yi descubre que puede perderlo, intenta recuperar su confianza y demostrarle lo que realmente siente.',
multimedia:{
    portada:['https://image.tmdb.org/t/p/original/20c4ZGTF8nL3JmxyCASW8W5EgvG.jpg','https://image.springnews.co.th/uploads/images/contents/w1024/2023/06/xL0VtIr08Chw1ybn0Gie.webp?x-image-process=style%2Flg-webp','https://img.youtube.com/vi/AZOd8vxG95k/maxresdefault.jpg'],
    trailer:[        'https://www.youtube.com/watch?v=AZOd8vxG95k'    ],
    teaser:[],
    pilot:[        'https://www.youtube.com/watch?v=M_AJHnQDsGI'    ],
    ost:[
        'https://www.youtube.com/watch?v=',
        'https://www.youtube.com/watch?v=',
        'https://www.youtube.com/watch?v=',
        'https://www.youtube.com/watch?v='
    ]
},
entidades:[
    {codigo:'EN000043',funcion:['Productora']},
    {codigo:'EN000014',funcion:['Emisora']}
],
especiales:[],
activo:true
},

/* ==========================================   The Next Prince — DR000043   ========================================== */
{
codigo:'DR000043',
titulo:'The Next Prince',
tituloOriginal:'ข้ามฟ้าเคียงเธอ',
alias:[],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:{
    codigo:'',
    orden:0
},
universo:'',
serie:'SR000043',
temporadas:1,
temporada:1,
episodios:14,
duracion:50,
estado:'Finalizado',
estreno:'2025-05-03',
finalizacion:'2025-08-02',
generos:['Romance','Drama','Político'],
tags:['BL'],
personas:[
    {nombre:'Khanin Assavadevathin',persona:'PR000426',funcion:['Actor'],principal:true},
    {nombre:'Charan Phithakthewa',persona:'PR000425',funcion:['Actor'],principal:true},
    {nombre:'Ramil Bhuchongpisut',persona:'PR000312',funcion:['Actor'],principal:true},
    {nombre:'Paitay Ronawee',persona:'PR000450',funcion:['Actor'],principal:true},
    {nombre:'Calvin',persona:'PR000413',funcion:['Actor'],principal:true},
    {nombre:'Jay Jirat',persona:'PR000451',funcion:['Actor'],principal:true},
    {nombre:'King Thipokbowon Assavadevathin',persona:'PR000452',funcion:['Actor'],principal:false},
    {nombre:'Prince Tharin Assavadevathin',persona:'PR000453',funcion:['Actor'],principal:false},
    {nombre:'Chana Davichmetha',persona:'PR000454',funcion:['Actor'],principal:false},
    {nombre:'Wasin Meenanagarin',persona:'PR000455',funcion:['Actor'],principal:false},
    {nombre:'Thatdanai Keerakul',persona:'PR000456',funcion:['Actor'],principal:false},
    {nombre:'Rachata Bhuchongpisut',persona:'PR000444',funcion:['Actor'],principal:false},
    {nombre:'Wirun',persona:'PR000457',funcion:['Actor'],principal:false},
    {nombre:'Siwakorn',persona:'PR000458',funcion:['Actor'],principal:false},
    {nombre:'Marisa Meenanakarin',persona:'PR000459',funcion:['Actor'],principal:false},
    {nombre:'Chita',persona:'PR000460',funcion:['Actor'],principal:false},
    {nombre:'Chakri',persona:'PR000461',funcion:['Actor'],principal:false},
    {nombre:'Vetith',persona:'PR000462',funcion:['Actor'],principal:false},
    {nombre:'Ava Davichmetha',persona:'PR000463',funcion:['Actor'],principal:false},
    {nombre:'Mira Kitakhan',persona:'PR000464',funcion:['Actor'],principal:false},
    {nombre:'Hawl',persona:'PR000465',funcion:['Actor'],principal:false},
    {nombre:'Paul',persona:'PR000466',funcion:['Actor'],principal:false},
    {nombre:'June',persona:'PR000467',funcion:['Actor'],principal:false},
    {nombre:'Young Khanin',persona:'PR000468',funcion:['Actor'],principal:false},
    {persona:'PR000416',funcion:['Director']},
    {persona:'PR000417',funcion:['Director']},
    {persona:'PR000260',funcion:['Guionista']},
    {persona:'PR000469',funcion:['Guionista']},
    {persona:'PR000470',funcion:['Guionista']}
],
ships:[
    {ship:'SH000071',personajes:['Khanin Assavadevathin','Charan Phithakthewa']},
    {ship:'SH000073',personajes:['Ramil Bhuchongpisut','Paitay Ronawee']},
    {ship:'SH000074',personajes:['Calvin','Jay Jirat']}
],
sinopsis:'Khanin, heredero de un reino ficticio, se ve obligado a regresar a su país y asumir las responsabilidades de su familia. Charan, su guardaespaldas y protector desde hace años, debe mantenerlo a salvo mientras ambos afrontan sus sentimientos y las intrigas relacionadas con la sucesión.',
multimedia:{
    portada:['https://i.pinimg.com/originals/1d/1e/85/1d1e8514a9ad52ac122744659579d581.jpg','https://kpop.asiachan.com/img/445419','https://img.youtube.com/vi/xKAOhZyvcAU/maxresdefault.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=xKAOhZyvcAU'
    ],
    teaser:[],
    pilot:[
        'https://www.youtube.com/watch?v=y42OfpM43Fo'
    ],
    ost:[]
},
entidades:[
    {codigo:'EN000043',funcion:['Productora']},
    {codigo:'EN000014',funcion:['Emisora']},
    {codigo:'EN000024',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   Two Worlds — DR000044   ========================================== */
{
codigo:'DR000044',
titulo:'Two Worlds',
tituloOriginal:'โลกสองใบ ใจดวงเดียว',
alias:[],
tipo:'Drama',
anio:2024,
pais:'TH',
idioma:'th',
franquicia:{
    codigo:'',
    orden:0
},
universo:'',
serie:'SR000044',
temporadas:1,
temporada:1,
episodios:10,
duracion:48,
estado:'Finalizado',
estreno:'2024-03-21',
finalizacion:'2024-05-16',
generos:['Romance','Drama','Fantasía'],
tags:['BL'],
personas:[
    {nombre:'Tai',persona:'PR000309',funcion:['Actor'],principal:true},
    {nombre:'Kram',persona:'PR000308',funcion:['Actor'],principal:true},
    {nombre:'Phupha',persona:'PR000471',funcion:['Actor'],principal:true},
    {nombre:'Wayu',persona:'PR000472',funcion:['Actor'],principal:false},
    {nombre:'Jao',persona:'PR000473',funcion:['Actor'],principal:false},
    {nombre:'Dueandao',persona:'PR000474',funcion:['Actor'],principal:false},
    {nombre:'Phinfang',persona:'PR000475',funcion:['Actor'],principal:false},
    {nombre:'Run',persona:'PR000476',funcion:['Actor'],principal:false},
    {nombre:'Ohm',persona:'PR000477',funcion:['Actor'],principal:false},
    {nombre:'Por',persona:'PR000478',funcion:['Actor'],principal:false},
    {nombre:'Piak',persona:'PR000479',funcion:['Actor'],principal:false},
    {nombre:'Dilok',persona:'PR000480',funcion:['Actor'],principal:false},
    {nombre:'Satreekit',persona:'PR000481',funcion:['Actor'],principal:false},
    {nombre:'Prem',persona:'PR000482',funcion:['Actor'],principal:false},
    {nombre:'Young Phupha',persona:'PR000483',funcion:['Actor'],principal:false},
    {nombre:'Buai',persona:'PR000484',funcion:['Actor'],principal:false},
    {nombre:'Chat',persona:'PR000485',funcion:['Actor'],principal:false},
    {nombre:'Big Boss',persona:'PR000486',funcion:['Actor'],principal:false},
    {persona:'PR000493',funcion:['Director']},
    {persona:'PR000494',funcion:['Director']},
    {persona:'PR000015',funcion:['Guionista']}
],
ships:[
    {ship:'SH000054',personajes:['Tai','Kram']},
    {ship:'SH000075',personajes:['Wayu','Jao']}
],
sinopsis:'Kram pierde al hombre que ama, Phupha, en circunstancias trágicas y termina llegando a un mundo paralelo en el que Phupha sigue vivo y él mismo murió años atrás. Allí conoce a Tai, el hombre que fue su pareja en esa realidad, y ambos quedan unidos por una historia de amor que atraviesa dos mundos.',
multimedia:{
    portada:['https://phoenixreborn.altervista.org/wp-content/uploads/2024/03/2wo4eO_4f.jpg','https://media.senscritique.com/media/000022194397/0/two_worlds.jpg','https://img.youtube.com/vi/hDbDrL4kPRs/maxresdefault.jpg'],
    trailer:[        'https://www.youtube.com/watch?v=hDbDrL4kPRs'    ],
    teaser:[        'https://www.youtube.com/watch?v=V1hubIDj9bc'    ],
    pilot:[        'https://www.youtube.com/watch?v=EfxZ7QLQYxk'    ],
    ost:[        'https://www.youtube.com/watch?v=qMKai9fAC-o'    ]
},
entidades:[
    {codigo:'EN000046',funcion:['Productora']},
    {codigo:'EN000024',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ==========================================   Your Third — DR000045   ========================================== */
{
codigo:'DR000045',
titulo:'Your Third',
tituloOriginal:'ที่สามของเธอ',
alias:[],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:{
    codigo:'',
    orden:0
},
universo:'',
serie:'SR000045',
temporadas:1,
temporada:1,
episodios:12,
duracion:50,
estado:'En emisión',
estreno:'2026-07-26',
finalizacion:'',
generos:['Romance','Drama','Comedia'],
tags:['BL'],
personas:[
    {nombre:'Sam',persona:'PR000309',funcion:['Actor'],principal:true},
    {nombre:'Jam',persona:'PR000308',funcion:['Actor'],principal:true},
    {nombre:'Song',persona:'PR000450',funcion:['Actor'],principal:false},
    {nombre:'Sib',persona:'PR000487',funcion:['Actor'],principal:false},
    {nombre:'Thee',persona:'PR000434',funcion:['Actor'],principal:false},
    {nombre:'Decha',persona:'PR000488',funcion:['Actor'],principal:false},
    {nombre:'Pimai',persona:'PR000054',funcion:['Actor'],principal:false},
    {nombre:'Lantao',persona:'PR000445',funcion:['Actor'],principal:false},
    {nombre:'Ning',persona:'PR000489',funcion:['Actor'],principal:false},
    {nombre:'Nueng',persona:'PR000490',funcion:['Actor'],principal:false},
    {nombre:'Wasin',persona:'PR000491',funcion:['Actor'],principal:false},
    {persona:'PR000492',funcion:['Director']}
],
ships:[
    {ship:'SH000054',personajes:['Sam','Jam']},
    {ship:'SH000076',personajes:['Sib','Pimai']}
],
sinopsis:'Sam ha guardado durante años sus sentimientos por Pimai, pero cuando descubre que ella se ha convertido en la pareja de su hermano mayor, Sib, decide alejarse de su familia. Sib encarga a Jam que encuentre a Sam y consiga que regrese. Lo que comienza como una misión de trabajo acaba acercando a Jam y Sam mientras ambos afrontan sus sentimientos y las heridas del pasado.',
multimedia:{
    portada:['https://stat.ameba.jp/user_images/20250228/12/sana-sanyaa/49/5f/j/o3281409615549223876.jpg','https://pbs.twimg.com/media/HAcIxdZaEAA2lyg.jpg','https://img.youtube.com/vi/GweuZgo2gOU/maxresdefault.jpg'],
    trailer:[        'https://www.youtube.com/watch?v=GweuZgo2gOU'    ],
    teaser:[        'https://www.youtube.com/watch?v=GO4a4PWVSfg'    ],
    pilot:[        'https://www.youtube.com/watch?v=5KHgFEiPD4g'    ],
    ost:[        'https://www.youtube.com/watch?v=7EaocGI6tSw'    ]
},
entidades:[
    {codigo:'EN000043',funcion:['Productora']},
    {codigo:'EN000047',funcion:['Productora']},
    {codigo:'EN000048',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000024',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================   The Middleman's Love — DR000046   ========================================== */

	{
codigo:'DR000046',
titulo:"The Middleman's Love",
tituloOriginal:'พี่เจตคนกลาง',
alias:['Middleman’s Love','Middle Love'],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:{codigo:'FR000012',orden:2},
universo:'',
serie:'SR000046',
temporadas:1,
temporada:1,
episodios:8,
duracion:49,
estado:'Finalizado',
estreno:'2023-11-10',
finalizacion:'2023-12-29',
generos:['Romance','Comedia','Drama'],
tags:['BL'],

personas:[
{nombre:'Mai',persona:'PR000428',funcion:['Actor'],principal:true},
{nombre:'Jade',persona:'PR000427',funcion:['Actor'],principal:true},
{nombre:'King',persona:'PR000413',funcion:['Actor'],principal:false},
{nombre:'Uea',persona:'PR000495',funcion:['Actor'],principal:false},
{nombre:'Gun',persona:'PR000496',funcion:['Actor'],principal:false},
{nombre:'Bas',persona:'PR000434',funcion:['Actor'],principal:false},
{nombre:'Mongkol',persona:'PR000436',funcion:['Actor'],principal:false},
{nombre:'Tong',persona:'PR000497',funcion:['Actor'],principal:false},
{nombre:'Gus',persona:'PR000498',funcion:['Actor'],principal:false},
{nombre:'Jan',persona:'PR000499',funcion:['Actor'],principal:false},
{nombre:'Jet',persona:'PR000290',funcion:['Actor'],principal:false},
{nombre:'Mai’s Mother',persona:'PR000500',funcion:['Actor'],principal:false},
{nombre:'Jade’s Mother',persona:'PR000501',funcion:['Actor'],principal:false},
{nombre:'Jade’s Father',persona:'PR000502',funcion:['Actor'],principal:false},
{nombre:'Man',persona:'PR000503',funcion:['Actor'],principal:false},
{nombre:'Mai’s Father',persona:'PR000504',funcion:['Actor'],principal:false},
{nombre:'Boom',persona:'PR000505',funcion:['Actor'],principal:false},
{nombre:'Top',persona:'PR000506',funcion:['Actor'],principal:false},
{persona:'PR000492',funcion:['Director']},
{persona:'PR000260',funcion:['Guionista']},
{persona:'PR000469',funcion:['Guionista']}
],

ships:[
{ship:'SH000072',personajes:['Mai','Jade']},
{ship:'SH000077',personajes:['King','Uea']}
],

sinopsis:'Jade está acostumbrado a ocupar siempre el papel de intermediario y a pasar desapercibido. Cuando Mai, un nuevo becario de la empresa, empieza a mostrar interés por él, Jade cree que está interesado en otra persona y trata de convertirse en intermediario. Sin embargo, Mai está interesado en Jade y poco a poco consigue que Jade se enfrente a sus propios sentimientos.',

multimedia:{
portada:['https://image.tmdb.org/t/p/original/xkonMwqxR6Tb7LgqqUgrtn8yd87.jpg','https://img.youtube.com/vi/MwUCV0ybEK4/maxresdefault.jpg'],
trailer:['https://www.youtube.com/watch?v=MwUCV0ybEK4'],
teaser:[],
pilot:[],
ost:['https://www.youtube.com/watch?v=p0kba6O-bho']
},

entidades:[
{codigo:'EN000043',funcion:['Productora']},
{codigo:'EN000047',funcion:['Productora']},
{codigo:'EN000014',funcion:['Emisora']},
{codigo:'EN000024',funcion:['Plataforma']},
{codigo:'EN000025',funcion:['Plataforma']}
],

especiales:[],
activo:true
},
/* ==========================================   ChermChey — DR000047   ========================================== */
	{
codigo:'DR000047',
titulo:'ChermChey',
tituloOriginal:'เฉิ่มเชย',
alias:['Cherm Chey','ChermChey the Series','Choem Choei'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:{codigo:'',orden:0},
universo:'',
serie:'SR000047',
temporadas:1,
temporada:1,
episodios:10,
duracion:48,
estado:'Finalizado',
estreno:'2026-05-19',
finalizacion:'2026-07-14',
generos:['Romance','Comedia','Drama'],
tags:['BL'],

personas:[
{nombre:'Intha',persona:'PR000428',funcion:['Actor'],principal:true},
{nombre:'Eung',persona:'PR000427',funcion:['Actor'],principal:true},
{nombre:'Bom',persona:'PR000507',funcion:['Actor'],principal:false},
{nombre:'Tonhon',persona:'PR000508',funcion:['Actor'],principal:false},
{nombre:'Chonlatee',persona:'PR000509',funcion:['Actor'],principal:false},
{nombre:'Nok',persona:'PR000510',funcion:['Actor'],principal:false},
{nombre:'A-Ten',persona:'PR000511',funcion:['Actor'],principal:false},
{nombre:'Aiyaret',persona:'PR000312',funcion:['Actor'],principal:false},
{nombre:'Chennai',persona:'PR000450',funcion:['Actor'],principal:false},
{nombre:'Nine',persona:'PR000308',funcion:['Actor'],principal:false},
{nombre:'Araya',persona:'PR000434',funcion:['Actor'],principal:false},
{nombre:'Ong',persona:'PR000512',funcion:['Actor'],principal:false},
{nombre:'Lalit',persona:'PR000309',funcion:['Actor'],principal:false},
{nombre:'Ajahn',persona:'PR000394',funcion:['Actor'],principal:false},
{persona:'PR000492',funcion:['Director']}
],

ships:[
{ship:'SH000072',personajes:['Intha','Eung']}
],

sinopsis:'Eung, herido después de varias decepciones amorosas, ha dejado de creer que encontrará el amor verdadero. Después de pedir en un templo una última oportunidad para enamorarse, conoce a Intha, el confiado propietario del bar Cherm Chey. Intha comienza a acercarse a él sin ocultar sus intenciones, mientras Eung intenta protegerse de volver a sufrir. Al trabajar y convivir alrededor del bar, ambos van estrechando su relación hasta convertirse poco a poco en la persona que cada uno quiere proteger.',

multimedia:{
portada:['https://blglflix.com/wp-content/uploads/2026/06/chermchey-683x1024.jpg',
		 'https://image.tmdb.org/t/p/original/sbenI8G0SYE6zH8jFlRsVeLubFK.jpg',
		 'https://pbs.twimg.com/media/G6tlRTwa0AMjto8.jpg',
		 'https://img.youtube.com/vi/N124kAywrmE/maxresdefault.jpg'],
trailer:['https://www.youtube.com/watch?v=N124kAywrmE'],
teaser:['https://www.youtube.com/watch?v=SwFiOY_zD-0'],
pilot:[],
ost:[]
},

entidades:[
{codigo:'EN000048',funcion:['Productora']},
{codigo:'EN000047',funcion:['Productora']},
{codigo:'EN000049',funcion:['Emisora']},
{codigo:'EN000025',funcion:['Plataforma']}
],

especiales:[],
activo:true
},
/* ==========================================   Bed Friend — DR000048   ========================================== */

	{
codigo:'DR000048',
titulo:'Bed Friend',
tituloOriginal:'อย่าเล่นกับอนล',
alias:['Bed Friend Series','Don’t Play with Anon'],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:{codigo:'FR000012',orden:1},
universo:'',
serie:'SR000048',
temporadas:1,
temporada:1,
episodios:10,
duracion:48,
estado:'Finalizado',
estreno:'2023-02-18',
finalizacion:'2023-04-22',
generos:['Romance','Comedia','Drama'],
tags:['BL'],

personas:[
    {nombre:'King',persona:'PR000413',funcion:['Actor'],principal:true},
    {nombre:'Uea',persona:'PR000495',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000077',personajes:['King','Uea']}
],

sinopsis:'King y Uea son compañeros de trabajo con personalidades muy diferentes. Uea es reservado y no soporta a los hombres que se toman las relaciones a la ligera, mientras que King es conocido por ser un conquistador. Después de una noche juntos, ambos acuerdan mantener una relación de amigos con derecho a roce, estableciendo sus propias reglas para evitar involucrarse sentimentalmente. Sin embargo, sus sentimientos comienzan a cambiar y la relación termina siendo mucho más profunda de lo que habían previsto.',

multimedia:{
    portada:[
    'https://pbs.twimg.com/media/FpQ25jSaQAE0q-a?format=jpg&name=large'
],
    trailer:['https://www.youtube.com/watch?v=C7T7bbpkgjw'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=BKoV4h2LLdU'
    ]
},

entidades:[],

especiales:[],
activo:true
},

/* ==========================================  I'm Tee, Me Too — DR000049 ========================================== */

{
codigo:'DR000049',titulo:"I'm Tee, Me Too",
tituloOriginal:'คนละทีเดียวกัน',
alias:['Kon La Tee Dieow Gun','Different People - I’m Tee, Me Too'],
tipo:'Drama', 
anio:2020,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'',
temporadas:1,
temporada:1,
episodios:8,
duracion:35,
estado:'Finalizado',
estreno:'2020-09-18',
finalizacion:'2020-11-06',
generos:['Comedia','Drama'],
tags:[],

personas:[
    {nombre:'Watee',persona:'PR000162',funcion:['Actor'],principal:true},
    {nombre:'Maitee',persona:'PR000163',funcion:['Actor'],principal:true},
    {nombre:'Maytee',persona:'PR000177',funcion:['Actor'],principal:true},
    {nombre:'T-Rex',persona:'PR000513',funcion:['Actor'],principal:true},
    {nombre:'Teedo',persona:'PR000292',funcion:['Actor'],principal:true},
    {nombre:'Teedet',persona:'PR000164',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000029',personajes:['Watee','Maitee']},
    {ship:'SH000078',personajes:['Maytee','T-Rex']},
    {ship:'SH000043',personajes:['Teedo','Teedet']}
],

sinopsis:'Watee, un estudiante universitario huérfano, descubre que la casa que heredó de su madre está hipotecada y necesita encontrar una forma de conservarla. Para poder pagar la deuda, decide alquilar las habitaciones a cinco jóvenes que, casualmente, también tienen el apodo de Tee. Los seis tienen personalidades muy diferentes y deben aprender a convivir bajo el mismo techo, enfrentándose juntos a sus problemas, miedos y a las situaciones caóticas que surgen de compartir una casa.',

multimedia:{
    portada:[],
    trailer:['https://www.youtube.com/watch?v=2xRF9eMlzTU'],
    teaser:[],
    pilot:[],
    ost:[]
},

entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},

/* ==========================================   The Ex-Morning — DR000050   ========================================== */

{
codigo:'DR000050',titulo:'The Ex-Morning',
tituloOriginal:'เพราะแฟนเก่าเปลี่ยนแปลงบ่อย',
alias:['Phro Faen Kao Plianplaeng Boi','Because Exes Change Frequently'],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000050',
temporadas:1,
temporada:1,
episodios:10,
duracion:55,
estado:'Finalizado',
estreno:'2025-05-22',
finalizacion:'2025-07-24',
generos:['Romance','Comedia','Drama'],
tags:['BL'],

personas:[
    {nombre:'Padtaphi',persona:'PR000162',funcion:['Actor'],principal:true},
    {nombre:'Tamtawan',persona:'PR000163',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000029',personajes:['Padtaphi','Tamtawan']}
],

sinopsis:'Padtaphi, un reconocido periodista de televisión conocido como el “Príncipe del pronóstico”, ve su carrera caer en picado después de un incidente que provoca una fuerte reacción pública. Para recuperar su reputación, recibe la oportunidad de desarrollar un nuevo programa de noticias, pero debe trabajar con un nuevo productor. El problema es que ese productor es Tamtawan, su antiguo novio. Obligados a trabajar juntos de nuevo, ambos tendrán que enfrentarse a los problemas profesionales y, sobre todo, a los sentimientos que todavía permanecen entre ellos.',

multimedia:{
    portada:[],
    trailer:['https://www.youtube.com/watch?v=jajW3bDRf3E'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=sZef3yFGU7o',
        'https://www.youtube.com/watch?v=-4fLeu6THjo'
    ]
},

entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},

/* ==========================================   Write You Again — DR000051   ========================================== */

{
codigo:'DR000051',titulo:'Write You Again',
tituloOriginal:'เขียนรักครั้งใหม่',
alias:['Khian Rak Khrang Mai'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000051',
temporadas:1,
temporada:1,
episodios:0,
duracion:0,
estado:'Anunciado',
estreno:'',
finalizacion:'',
generos:['Romance','Drama'],
tags:['BL'],

personas:[
    {nombre:'Nine',persona:'PR000162',funcion:['Actor'],principal:true},
    {nombre:'',persona:'PR000163',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000029',personajes:['Nine','']}
],

sinopsis:'Diez años después de sufrir un accidente que le hizo perder sus recuerdos, Nine decide regresar a la casa donde vivió durante su infancia con la esperanza de recuperar su pasado. Allí se reencuentra con una persona importante de su vida que conoce recuerdos que él ya no puede recordar y que está dispuesto a ayudarle a descubrir qué ocurrió.',

multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:['https://www.youtube.com/watch?v=4-_CShCsPbI'],
    ost:[]
},

entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},

/* ==========================================   Vice Versa — DR000052   ========================================== */

{
codigo:'DR000052',
titulo:'Vice Versa',
tituloOriginal:'รักสลับโลก',
alias:['Vice Versa: The Series','Rak Salap Lok'],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000052',
temporadas:1,
temporada:1,
episodios:12,
duracion:55,
estado:'Finalizado',
estreno:'2022-07-16',
finalizacion:'2022-10-01',
generos:['Romance','Drama','Fantasía','Juvenil'],
tags:['BL'],

personas:[
    {nombre:'Puen',persona:'PR000520',funcion:['Actor'],principal:true},
    {nombre:'Talay',persona:'PR000521',funcion:['Actor'],principal:true},
    {nombre:'Tess',persona:'PR000546',funcion:['Actor'],principal:false},
    {nombre:'Tun',persona:'PR000547',funcion:['Actor'],principal:false},
    {nombre:'Au',persona:'PR000533',funcion:['Actor'],principal:false},
    {nombre:'Fuse',persona:'PR000534',funcion:['Actor'],principal:false}
],

ships:[
    {ship:'SH000083',personajes:['Puen','Talay']},
    {ship:'SH000100',personajes:['Tess','Tun']},
    {ship:'SH000092',personajes:['Au','Fuse']}
],

sinopsis:'Talay despierta en el cuerpo de otra persona después de sufrir un accidente y descubre que se encuentra en un universo paralelo. Allí conoce a Puen, un famoso actor que también ha llegado a ese mundo después de un accidente y ahora ocupa el cuerpo de otra persona. Ambos deben adaptarse a su nueva realidad mientras intentan descubrir cómo regresar a su universo y cumplir la misión que tienen por delante.',

multimedia:{
    portada:[],
    trailer:['https://www.youtube.com/watch?v=RbpBsChDTnk'],
    teaser:[],
    pilot:[],
    ost:[]
},

entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},


/* ==========================================   Last Twilight — DR000053   ========================================== */

{
codigo:'DR000053',		titulo:'Last Twilight',
tituloOriginal:'ภาพนายไม่เคยลืม',
alias:[],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000053',
temporadas:1,
temporada:1,
episodios:12,
duracion:56,
estado:'Finalizado',
estreno:'2023-11-10',
finalizacion:'2024-01-26',
generos:['Romance','Drama'],
tags:['BL'],

personas:[
    {nombre:'Mhok',persona:'PR000520',funcion:['Actor'],principal:true},
    {nombre:'Day',persona:'PR000521',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000083',personajes:['Mhok','Day']}
],

sinopsis:'Day, un joven jugador de bádminton con un futuro prometedor, está perdiendo la vista y se enfrenta a la posibilidad de quedarse completamente ciego. Mhok, un joven con dificultades económicas que necesita urgentemente dinero, acepta trabajar como su cuidador. Lo que comienza como un trabajo termina transformando la vida de ambos y creando un vínculo cada vez más profundo.',

multimedia:{
    portada:[],
    trailer:['https://www.youtube.com/watch?v=CWO7ab2T10E'],
    teaser:[],
    pilot:[],
    ost:[]
},

entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},


/* ==========================================   My Magic Prophecy — DR000054   ========================================== */

{
codigo:'DR000054', titulo:'My Magic Prophecy',
tituloOriginal:'ทำนายทายทัพ',
alias:['Tham Nai Thai Thap'],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000054',
temporadas:1,
temporada:1,
episodios:10,
duracion:56,
estado:'Finalizado',
estreno:'2025-07-27',
finalizacion:'2025-09-28',
generos:['Romance','Drama','Comedia','Misterio'],
tags:['BL'],

personas:[
    {nombre:'Thapfah',persona:'PR000520',funcion:['Actor'],principal:true},
    {nombre:'In',persona:'PR000521',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000083',personajes:['Thapfah','In']}
],

sinopsis:'In es un adivino especializado en las cartas del tarot que se ve obligado a realizar una lectura falsa para ayudar a una amiga. Allí conoce a Thapfah, un médico de cuidados intensivos que no cree en la adivinación. In le advierte que una serie de desgracias podrían poner su vida en peligro. Cuando los acontecimientos comienzan a suceder, Thapfah termina refugiándose junto a In en Mae Hong Son, donde ambos tendrán que enfrentarse a sus diferencias y al destino que parece unirlos.',

multimedia:{
    portada:[],
    trailer:['https://www.youtube.com/watch?v=vowe0tx6BZg'],
    teaser:[],
    pilot:['https://www.youtube.com/watch?v=C6PLUuYbVS0'],
    ost:[]
},

entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},


/* ==========================================   I Will Always Save You — DR000055   ========================================== */

{
codigo:'DR000055',			titulo:'I Will Always Save You',
tituloOriginal:'โปรดอยู่ในความคุ้มครองของป้องปืน',
alias:[],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000055',
temporadas:1,
temporada:1,
episodios:0,
duracion:0,
estado:'Anunciado',
estreno:'',
finalizacion:'',
generos:['Acción','Romance','Comedia'],
tags:['BL'],

personas:[
    {nombre:'',persona:'PR000520',funcion:['Actor'],principal:true},
    {nombre:'',persona:'PR000521',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000083',personajes:['','']}
],

sinopsis:'Una nueva serie de acción, romance y comedia protagonizada por Jimmy Jitaraphol Potiwihok y Sea Tawinan Anukoolprasert, anunciada por GMMTV para 2026.',

multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:['https://www.youtube.com/watch?v=6oXwGSyvsxg'],
    ost:[]
},

entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},
];
