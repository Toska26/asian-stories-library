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
		 { personajes: ['Ji Hyun', 'Jae Won'] }
       /* { ship: 'SH000005', personajes: ['Ji Hyun', 'Jae Won'] }*/
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
		especiales:[    {        titulo:'Between Us Special',        episodios:1    }],
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
    portada:['https://i.pinimg.com/736x/91/ad/6d/91ad6d0dc82e8c4ebf5ac1eceea2f565.jpg'],
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
    portada:['https://i.pinimg.com/736x/36/8f/4f/368f4f69b37bdf7e204976f6bc78a372.jpg'],
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
    portada:['https://i.pinimg.com/736x/65/fb/47/65fb47be56be0984b958ea27ab311ae2.jpg'],
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
    portada:['https://i.pinimg.com/1200x/54/4d/6b/544d6bad216e1c99f4228c586ec9847e.jpg'],
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
portada:['https://i.pinimg.com/736x/71/e1/71/71e171a149c2493cbd88c717556088fa.jpg',
		 'https://i.pinimg.com/1200x/ac/9a/89/ac9a89e0fe08e485c74657983a0367f3.jpg',
		 'https://i.pinimg.com/1200x/9d/fd/8c/9dfd8c3c3d6908616df1e4ee6df9bf61.jpg',
		 'https://i.pinimg.com/736x/5c/be/24/5cbe2473f8b2e7dc84961443c030a2d0.jpg'],
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
    portada:['https://i.pinimg.com/736x/d8/7c/5a/d87c5ac994dd9df2f16376ca2f57cd20.jpg'],
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
    portada:['https://i.pinimg.com/736x/57/fe/0f/57fe0f2349332ca9630f0cff8b955d76.jpg'],
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

/* ==========================================   Even Sun — DR000056   ========================================== */

{
codigo:'DR000056',			titulo:'Even Sun',
tituloOriginal:'ฉันนี่แหละนายอาทิตย์',
alias:['Even Sun Series',"I'm Mr. Arthid"],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000056',
temporadas:1,
temporada:1,
episodios:6,
duracion:45,
estado:'Finalizado',
estreno:'2022-06-29',
finalizacion:'2022-08-03',
generos:['BL','Romance','Comedia'],
tags:['BL'],

personas:[
    {nombre:'Arthit',persona:'PR000059',funcion:['Actor'],principal:true},
    {nombre:'Sun',persona:'PR000058',funcion:['Actor'],principal:true},
    {nombre:'Mangkorn',persona:'PR000549',funcion:['Actor'],principal:false},
    {nombre:'Ashing',persona:'PR000347',funcion:['Actor'],principal:false},
    {nombre:'JJ',persona:'PR000472',funcion:['Actor'],principal:false},
    {nombre:'Nai',persona:'PR000473',funcion:['Actor'],principal:false}
],

ships:[
    {ship:'SH000014',personajes:['Arthit','Sun']},
    {ship:'SH000102',personajes:['Mangkorn','Ashing']}
],

sinopsis:'Sun es un cobrador de deudas que no consigue cobrar ninguna. Cuando su padre le encarga cobrar una deuda a Arthit, viaja hasta la isla donde vive su objetivo. Allí conoce a Talay y Nai, amigos de Arthit, y poco a poco su misión comienza a convertirse en una historia de amor.',

multimedia:{
portada:['https://i.pinimg.com/1200x/8f/d0/7b/8fd07bbd67647fd2a2fc393930b4e690.jpg'],
    trailer:['https://www.youtube.com/watch?v=aEvDt94-bew'],
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

/* ==========================================   Revamp The Undead Story — DR000057   ========================================== */

{
codigo:'DR000057',			titulo:'Revamp The Undead Story',
tituloOriginal:'แวมไพร์โปรเจ็คต์',
alias:['The Vampire Project'],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000057',
temporadas:1,
temporada:1,
episodios:10,
duracion:50,
estado:'Finalizado',
estreno:'2025-08-23',
finalizacion:'2025-10-25',
generos:['BL','Fantasía','Romance','Sobrenatural','Drama'],
tags:['BL'],

personas:[
    {nombre:'Ramil',persona:'PR000059',funcion:['Actor'],principal:true},
    {nombre:'Punn',persona:'PR000058',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000014',personajes:['Ramil','Punn']}
],

sinopsis:'Punn, propietario de una tienda de antigüedades, recibe el encargo de reparar una antigua pintura. Al cortarse con un cristal, su sangre entra en contacto con el cuadro y despierta a Ramil, el último heredero de una familia de vampiros que llevaba más de cien años sellado en la pintura. Ramil ha perdido sus poderes y es perseguido por un grupo de cazadores, por lo que Punn deberá ayudarle a recuperar sus habilidades mientras la relación entre ambos se desarrolla.',

multimedia:{
    portada:['https://i.pinimg.com/736x/70/61/9d/70619d479cc002cf792341079cc63ccc.jpg'],
    trailer:['https://www.youtube.com/watch?v=dSQ5g4d2DEk'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=RwZz4ncwk0Y',
        'https://www.youtube.com/watch?v=xjqUTTal5bY',
        'https://www.youtube.com/watch?v=7jbA07Zu_R0'
    ]
},

entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},
	
/* ==========================================   Plan B to U — DR000058   ========================================== */

{
codigo:'DR000058',			titulo:'Plan B to U',
tituloOriginal:'จากศัตรูสู่ที่รัก',
alias:['Jak Sattru Su Teerak'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000058',
temporadas:1,
temporada:1,
episodios:0,
duracion:0,
estado:'Anunciado',
estreno:'',
finalizacion:'',
generos:['BL','Romance','Comedia','Drama','Sobrenatural'],
tags:['BL'],

personas:[
    {nombre:'Krit',persona:'PR000059',funcion:['Actor'],principal:true},
    {nombre:'Nile',persona:'PR000058',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000014',personajes:['Krit','Nile']}
],

sinopsis:'Nile compra una casa a un precio muy bajo a Krit, director ejecutivo de la discográfica Rabbit Hole, pero pronto descubre que la casa está embrujada. Cuando Krit se niega a cancelar la venta, Nile decide conseguir unas prácticas en su empresa para vengarse. Lo que comienza como un plan de venganza acaba acercando a ambos mientras tienen que enfrentarse a la convivencia, al trabajo y a los fenómenos sobrenaturales de la casa.',

multimedia:{
    portada:['https://i.pinimg.com/1200x/dd/bb/cf/ddbbcf7890b617b675d578bfd465a1ce.jpg'],
    trailer:['https://www.youtube.com/watch?v=jpnjz1r8WPA'],
    teaser:[],
    pilot:['https://www.youtube.com/watch?v=jpnjz1r8WPA'],
    ost:[]
},

entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},

/* ==========================================   My School President — DR000059   ========================================== */
{
codigo:'DR000059',
titulo:'My School President',
tituloOriginal:'แฟนผมเป็นประธานนักเรียน',
alias:['My Boyfriend is the School President','My Boyfriend is the Student Body President'],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000059',
temporadas:1,
temporada:1,
episodios:12,
duracion:55,
estado:'Finalizado',
estreno:'2022-12-02',
finalizacion:'2023-02-24',
generos:['BL','Romance','Comedia','Escolar','Juventud','Música'],
tags:['BL'],
	
personas:[
    {nombre:'Tinn',persona:'PR000522',funcion:['Actor'],principal:true},
    {nombre:'Gun',persona:'PR000523',funcion:['Actor'],principal:true},
    {nombre:'Win',persona:'PR000524',funcion:['Actor'],principal:true},
    {nombre:'Sound',persona:'PR000525',funcion:['Actor'],principal:true},
    {nombre:'Tiwson',persona:'PR000532',funcion:['Actor'],principal:true},
    {nombre:'Por',persona:'PR000550',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000084',personajes:['Tinn','Gun']},
    {ship:'SH000085',personajes:['Win','Sound']},
    {ship:'SH000104',personajes:['Tiwson','Por']}
],

sinopsis:'Gun es el líder del club de música Chinzhilla y está decidido a salvarlo de su posible desaparición y conseguir participar en el concurso Hot Wave. Para ello necesita la ayuda de Tinn, el presidente estudiantil e hijo de la directora del instituto, que lleva tiempo enamorado de Gun en secreto. Lo que comienza como una petición de ayuda para salvar el club se convierte poco a poco en una historia de amistad, música y primer amor.',

multimedia:{
portada:['https://i.pinimg.com/736x/c8/da/3c/c8da3c135d83ecd5cd10e98b9dc8c469.jpg','https://i.pinimg.com/1200x/89/62/a0/8962a0d7d4f46ae82ebf7172b3601c9b.jpg'],
trailer:['https://www.youtube.com/watch?v=5MfQ9Npm2-w'],
teaser:[],
pilot:[],
ost:[
'https://www.youtube.com/watch?v=Mkw_GfFjhOA',
'https://www.youtube.com/watch?v=lU1sN10Hses',
'https://www.youtube.com/watch?v=puv8H85I8bQ',
'https://www.youtube.com/watch?v=lj3bhv2FGDc',
'https://www.youtube.com/watch?v=gNOo1gzXdeg',
'https://www.youtube.com/watch?v=sa11tgLpEvQ',
'https://www.youtube.com/watch?v=jy-vwRPvqTY',
'https://www.youtube.com/watch?v=BHcgRZYrczo',
'https://www.youtube.com/watch?v=28dwvPncYAE'
]
},

entidades:[
{codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},

/* ==========================================   Moonlight Chicken — DR000060   ========================================== */

{
codigo:'DR000060',
titulo:'Moonlight Chicken',
tituloOriginal:'พระจันทร์มันไก่',
alias:['Midnight Series: Moonlight Chicken'],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000060',
temporadas:1,
temporada:1,
episodios:8,
duracion:60,
estado:'Finalizado',
estreno:'2023-02-08',
finalizacion:'2023-03-02',
generos:['BL','Romance','Drama','Slice of Life'],
tags:['BL'],

personas:[
    {nombre:'Jim',persona:'PR000198',funcion:['Actor'],principal:true},
    {nombre:'Wen',persona:'PR000514',funcion:['Actor'],principal:true},
    {nombre:'Alan',persona:'PR000388',funcion:['Actor'],principal:true},
    {nombre:'Gaipa',persona:'PR000017',funcion:['Actor'],principal:true},
    {nombre:'Heart',persona:'PR000522',funcion:['Actor'],principal:true},
    {nombre:'Li Ming',persona:'PR000523',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000079',personajes:['Jim','Wen']},
    {ship:'SH000068',personajes:['Alan','Gaipa']},
    {ship:'SH000084',personajes:['Heart','Li Ming']}
],


sinopsis:'Jim, propietario de un pequeño restaurante de arroz con pollo, conoce una noche a Wen, un cliente que llega al local después de beber. Lo que debía ser un encuentro de una sola noche acaba dando paso a una relación que obliga a ambos a replantearse sus vidas. Paralelamente, Li Ming, el sobrino de Jim, comienza a acercarse a Heart, un compañero de clase con discapacidad auditiva, mientras las relaciones del entorno del restaurante se cruzan con problemas familiares, económicos y personales.',

multimedia:{
portada:['https://i.pinimg.com/736x/cc/19/9f/cc199f6c018610d195126374bb1bdc4a.jpg','https://i.pinimg.com/736x/ae/cd/7b/aecd7b0f8bb71b7dc5f600ddc2478a50.jpg','https://i.pinimg.com/1200x/75/5a/54/755a5470dc932a50e65e5424add69662.jpg'],
trailer:['https://www.youtube.com/watch?v=ug1kDpXvzg8'],
teaser:['https://www.youtube.com/watch?v=FlEkwF0EPv4'],
pilot:[],
ost:[
'https://www.youtube.com/watch?v=BIaX7YjJkzU',
'https://www.youtube.com/watch?v=0INmj1L9qEM'
]
},

entidades:[
{codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},

/* ==========================================   My Love Mix-Up! — DR000061   ========================================== */

{
codigo:'DR000061',
titulo:'My Love Mix-Up!',
tituloOriginal:'เขียนรักด้วยยางลบ',
alias:['Khian Rak Duai Yanglop','Kieta Hatsukoi'],
tipo:'Drama',
anio:2024,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000061',
temporadas:1,
temporada:1,
episodios:12,
duracion:50,
estado:'Finalizado',
estreno:'2024-06-07',
finalizacion:'2024-08-23',
generos:['BL','Romance','Comedia','Escolar','Juventud'],
tags:['BL'],

personas:[
    {nombre:'Kongthap',persona:'PR000522',funcion:['Actor'],principal:true},
    {nombre:'Atom',persona:'PR000523',funcion:['Actor'],principal:true},
    {nombre:'Half',persona:'PR000551',funcion:['Actor'],principal:true},
    {nombre:'Mudmee',persona:'PR000552',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000084',personajes:['Kongthap','Atom']},
    {ship:'SH000105',personajes:['Half','Mudmee']}
],

sinopsis:'Atom, un estudiante de instituto enamorado de su compañera Mudmee, descubre por accidente que ella ha escrito el nombre de Kongthap, un popular compañero, en su goma de borrar. Al intentar proteger el secreto de Mudmee, Atom provoca un malentendido que hace que Kongthap crea que él está enamorado de él. A partir de ahí, la confusión inicial da paso a una historia de amistad, descubrimiento personal y primer amor.',

multimedia:{
portada:['https://i.pinimg.com/736x/ed/26/78/ed2678364dace8f4441cf58e1b74ce9b.jpg','https://i.pinimg.com/736x/bb/b1/1d/bbb11d18edf26739f1b69d775210f148.jpg'],
trailer:['https://www.youtube.com/watch?v=iaNysvrKOqk'],
teaser:[],
pilot:[],
ost:[
'https://www.youtube.com/watch?v=40HWx_Uj_To',
'https://www.youtube.com/watch?v=seX0he6aJ7U',
'https://www.youtube.com/watch?v=9o3iVZGg28o',
'https://www.youtube.com/watch?v=Q2ieGZ0D8Ew',
'https://www.youtube.com/watch?v=uGIYu9PyJEU',
'https://www.youtube.com/watch?v=CK94AcazHJE'
]
},

entidades:[
{codigo:'EN000004',funcion:['Productora']}
],

especiales:[],
activo:true
},

/* ==========================================   Ticket to Heaven — DR000062   ========================================== */

{
codigo:'DR000062',
titulo:'Ticket to Heaven',
tituloOriginal:'เด็กชายไม่ไปสวรรค์',
alias:['The Boy Who Doesn’t Go to Heaven','Dek Chai Mai Pai Sawan'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000062',
temporadas:1,
temporada:1,
episodios:6,
duracion:55,
estado:'Finalizado',
estreno:'2026-05-30',
finalizacion:'2026-07-04',
generos:['BL','Romance','Drama','Escolar','Juventud'],
tags:['BL'],

personas:[
    {nombre:'Tanrak',persona:'PR000522',funcion:['Actor'],principal:true},
    {nombre:'Barth',persona:'PR000523',funcion:['Actor'],principal:true}
],

ships:[
    {ship:'SH000084',personajes:['Barth','Tanrak']}
],

sinopsis:'Tanrak es un joven profundamente religioso que estudia en un entorno cristiano y sueña con convertirse en sacerdote para reencontrarse algún día con sus padres en el cielo. Su vida cambia cuando llega Barth, un nuevo estudiante marcado por heridas personales y con una visión muy diferente de la fe. La relación entre ambos crece mientras Tanrak se enfrenta al conflicto entre sus creencias, las normas de su entorno y unos sentimientos que no puede ignorar.',

multimedia:{
portada:['https://i.pinimg.com/736x/e0/41/1b/e0411b9c91dcf5e03b56febb23ca9c21.jpg',
'https://i.pinimg.com/736x/04/ac/66/04ac667cde232fbf04ae3a5564698555.jpg',
'https://i.pinimg.com/736x/e9/88/bf/e988bf9b20ceb6046ee8a2bcee378b39.jpg',
'https://i.pinimg.com/736x/84/3a/ee/843aeefa1acaf3ad47e5e6315ab94892.jpg'],
trailer:['https://www.youtube.com/watch?v=9rPBmHoxQX4'],
teaser:[],
pilot:['https://www.youtube.com/watch?v=idzwDVPAmMQ'],
ost:[
'https://www.youtube.com/watch?v=6DB7wFVaebs',
'https://www.youtube.com/watch?v=MTrKtAYUjq8',
'https://www.youtube.com/watch?v=05eatQM91jY'
]
},

entidades:[
{codigo:'EN000004',funcion:['Productora']}
],

activo:true
},
/* ==========================================   Only Boo! — DR000063   ========================================== */
	{
codigo:'DR000063',
titulo:'Only Boo!',
tituloOriginal:'แค่ที่แกง',
alias:['Khae Thi Kaeng','Kae Tee Kaeng'],
tipo:'Drama',
anio:2024,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000063',
temporadas:1,
temporada:1,
episodios:12,
duracion:50,
estado:'Finalizado',
estreno:'2024-03-31',
finalizacion:'2024-06-23',
generos:[
    'Comedia',
    'Romance'
],
tags:[
    'BL',
    'Escolar',
    'Juventud',
    'Música'
],
personas:[
    {nombre:'Kang',persona:'PR000526',funcion:['Actor'],principal:true},
    {nombre:'Moo',persona:'PR000527',funcion:['Actor'],principal:true},
    {nombre:'Potae',persona:'PR000553',funcion:['Actor'],principal:true},
    {nombre:'Payos',persona:'PR000554',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000086',personajes:['Kang','Moo']},
    {ship:'SH000106',personajes:['Potae','Payos']}
],
sinopsis:'Moo, un estudiante de secundaria que sueña con debutar como integrante de un grupo de chicos, conoce a Kang, un joven que vende comida preparada. Moo queda fascinado por la amabilidad de Kang y comienza a cortejarlo mientras continúa entrenándose para convertirse en idol. Sin embargo, cuando finalmente consigue debutar, descubre que el contrato de su agencia incluye una estricta prohibición de tener pareja.',
multimedia:{
    portada:['https://i.pinimg.com/736x/81/6a/b6/816ab6a6a9338f197a57f47d0a078319.jpg',
			'https://i.pinimg.com/736x/2b/b5/83/2bb583b2cc1ebd0d0a9cade060224ede.jpg',
			'https://i.pinimg.com/736x/82/4f/89/824f890c8147dcaa31b457352dff3f42.jpg',
			'https://i.pinimg.com/736x/d6/59/fa/d659facc83a2401e1b5c072db3281d77.jpg'],
    trailer:['https://www.youtube.com/watch?v=kNJHaz3VgJI'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=sU4_YSbfLdg',
        'https://www.youtube.com/watch?v=Gp_5O-U-KAA',
        'https://www.youtube.com/watch?v=FlubMEV94SM',
        'https://www.youtube.com/watch?v=OAWVsWucowQ',
        'https://www.youtube.com/watch?v=7OqvmVanrBc',
        'https://www.youtube.com/watch?v=wq6BZgnWzxI',
        'https://www.youtube.com/watch?v=7TrTUZM68J0'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],
especiales:[
    'บุกที่กอง แค่ที่แกง Only Boo!'
],
activo:true
},
/* ==========================================   Head 2 Head — DR000064   ========================================== */

{
codigo:'DR000064',
titulo:'Head 2 Head',
tituloOriginal:'ไหนใครว่าพวกมันไม่ถูกกัน',
alias:['Nai Khrai Wa Phuak Man Mai Thuk Kan','Who Says They Don’t Get Along?'],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000064',
temporadas:1,
temporada:1,
episodios:12,
duracion:50,
estado:'Finalizado',
estreno:'2025-10-26',
finalizacion:'2026-01-11',
generos:[
    'Comedia',
    'Romance',
    'Sobrenatural'
],
tags:[
    'BL',
    'Universidad',
    'Juventud'
],
personas:[
    {nombre:'Jerome',persona:'PR000526',funcion:['Actor'],principal:true},
    {nombre:'Jinn',persona:'PR000527',funcion:['Actor'],principal:true},
    {nombre:'Farm',persona:'PR000535',funcion:['Actor'],principal:true},
    {nombre:'Van',persona:'PR000536',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000086',personajes:['Jerome','Jinn']},
    {ship:'SH000093',personajes:['Farm','Van']}
],
sinopsis:'Jerome y Jinn son rivales desde la infancia y continúan enfrentándose cuando ambos ingresan en la universidad para estudiar diseño de moda. Sus vidas permanecen constantemente entrelazadas: estudian juntos, sus casas están frente a frente, comparten grupo de amigos y sus familias mantienen una estrecha relación. Todo cambia cuando Jerome comienza a soñar con acontecimientos situados diez años en el futuro y descubre que la persona que tanto detesta terminará convirtiéndose en su pareja.',
multimedia:{
    portada:['https://i.pinimg.com/736x/08/69/b3/0869b335aa60f2633d15161686da5932.jpg',
			'https://i.pinimg.com/736x/34/f9/d4/34f9d44d81d82dfbdb5f9dff3434ba60.jpg'],
    trailer:[ 'https://www.youtube.com/watch?v=7iKRgTqxFp0'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=v4O9ysuVBuY',
        'https://www.youtube.com/watch?v=RT1lDAID3_I',
        'https://www.youtube.com/watch?v=_10ZSPksHd4',
        'https://www.youtube.com/watch?v=T4daihy57FY'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000049',funcion:['Emisora']}
],
especiales:[
    'ไหนใครว่าพวกมันไม่ถูกกัน Head 2 Head Special'
],
activo:true
},	
/* ==========================================   WEIRDO-101 — DR000065   ========================================== */
{
codigo:'DR000065',
titulo:'WEIRDO-101',
tituloOriginal:'แรงโน้มถ่วงระหว่างเรา',
alias:['Raeng Nom Thuang Rawang Rao','The Gravity Between Us'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000065',
temporadas:1,
temporada:1,
episodios:10,
duracion:41,
estado:'En emisión',
estreno:'2026-08-14',
finalizacion:'',
generos:[
    'Comedia',
    'Romance'
],
tags:[
    'BL',
    'Escolar',
    'Juventud'
],
personas:[
    {nombre:'Cheewa',persona:'PR000526',funcion:['Actor'],principal:true},
    {nombre:'Niran',persona:'PR000527',funcion:['Actor'],principal:true},
    {nombre:'Pok',persona:'PR000554',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000086',personajes:['Cheewa','Niran']}
],
sinopsis:'Niran, un estudiante de secundaria y atleta de judo que lleva una vida despreocupada, conoce a Cheewa, un estudiante brillante del club de astronomía con una forma de pensar y comunicarse muy particular. Después de que Niran lo salva de un estudiante problemático, Cheewa comienza a acercarse a él de una manera directa y poco convencional, haciendo que Niran empiece a cuestionarse sus propios sentimientos.',
multimedia:{
    portada:['https://i.pinimg.com/736x/04/db/4a/04db4a798c3bfb103153808bc88dbf46.jpg',
			'https://i.pinimg.com/736x/72/0d/fb/720dfb0441e165503c93b08256764944.jpg'],
    trailer:['https://www.youtube.com/watch?v=FoAiCEWA_ko'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=NYQlEk3Bg0A',
        'https://www.youtube.com/watch?v=vRH6Po4jAiQ'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000014',funcion:['Emisora']},
    {codigo:'EN000049',funcion:['Emisora']}
],
especiales:[
    'WEIRDO-101 แรงโน้มถ่วงระหว่างเรา Special'
],
activo:true
},

	/* ==========================================   CHERRY MAGIC 30 ยังซิง — DR000066   ========================================== */
{
codigo:'DR000066',
titulo:'Cherry Magic 30 ยังซิง',
tituloOriginal:'30 ยังซิง',
alias:['Cherry Magic Thailand'],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000066',
temporadas:1,
temporada:1,
episodios:12,
duracion:47,
estado:'Finalizado',
estreno:'2023-12-09',
finalizacion:'2024-03-02',
generos:[
    'Comedia',
    'Fantasía',
    'Romance'
],
tags:[
    'BL'
],
personas:[
    {nombre:'Karan',persona:'PR000292',funcion:['Actor'],principal:true},
    {nombre:'Achi',persona:'PR000164',funcion:['Actor'],principal:true},
    {nombre:'Jinta',persona:'PR000529',funcion:['Actor'],principal:true},
    {nombre:'Min',persona:'PR000530',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000043',personajes:['Karan','Achi']},
    {ship:'SH000089',personajes:['Jinta','Min']}
],
sinopsis:'Achi es un empleado de una empresa de material de oficina que sigue soltero y virgen al cumplir treinta años. Ese día descubre que ha adquirido la capacidad de leer la mente de otras personas mediante el contacto físico. Al intentar evitar tocar a los demás, termina leyendo accidentalmente los pensamientos de Karan, su compañero de trabajo, y descubre que este está enamorado de él. Achi intenta entonces mantener las distancias para evitar que la situación vaya a más, pero sus sentimientos por Karan comienzan a cambiar.',
multimedia:{
    portada:['https://i.pinimg.com/736x/05/46/5f/05465f21a2c2180e85b5fd59553bc4dc.jpg',
'https://i.pinimg.com/736x/7c/b7/ef/7cb7efbc4bc24e21f4327170ad4043d7.jpg',
'https://i.pinimg.com/1200x/d5/2c/8c/d52c8cb1709a7c6277e80d7d6a8b8c6a.jpg',
'https://i.pinimg.com/736x/50/bb/5d/50bb5dfbc2dfc04eb35da37a0a4740ee.jpg',
'https://i.pinimg.com/736x/78/68/b3/7868b38857791fbc9c928b2897d9f141.jpg',
        'https://stat.ameba.jp/user_images/20240218/16/pokapokanyanko/0e/08/j/o1642204815403057552.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=2suXbor3jDA'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=mcMQsbACF7w',
        'https://www.youtube.com/watch?v=2gIPMO-q_HU',
        'https://www.youtube.com/watch?v=2l7LvWGwSd0',
        'https://www.youtube.com/watch?v=rAh2ae1OC0M'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ========================================== A DOG AND A PLANE — DR000067   ========================================== */
{
codigo:'DR000067',
titulo:'A Dog and a Plane',
tituloOriginal:'หมาเห่าเครื่องบิน',
alias:['Maa Hao Khrueangbin'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000067',
temporadas:1,
temporada:1,
episodios:10,
duracion:60,
estado:'Finalizado',
estreno:'2026-05-29',
finalizacion:'2026-07-31',
generos:[
    'Comedia',
    'Romance'
],
tags:[
    'BL'
],
personas:[
    {nombre:'Toto',persona:'PR000292',funcion:['Actor'],principal:true},
    {nombre:'Kanit',persona:'PR000164',funcion:['Actor'],principal:true},
    {nombre:'Akki',persona:'PR000293',funcion:['Actor'],principal:true},
    {nombre:'Veha',persona:'PR000555',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000043',personajes:['Toto','Kanit']},
    {ship:'SH000107',personajes:['Akki','Veha']}
],
sinopsis:'Toto, jefe de un equipo de rescate, conoce a Kanit, un auxiliar de vuelo perfeccionista, después de un intercambio accidental de equipaje. Aunque sus personalidades y formas de vida son completamente opuestas, las circunstancias hacen que tengan que encontrarse una y otra vez. Cuando Kanit le pide a Toto que le ayude a descubrir si su novio, el piloto Lion, le es infiel, la misión de rescate acaba convirtiéndose en una historia de sentimientos y amor entre ambos.',
multimedia:{
    portada:['https://i.pinimg.com/736x/87/cd/50/87cd5014d4da555714b6a50aeb01ccbc.jpg',
'https://i.pinimg.com/736x/37/35/b7/3735b7ede40c751fce25ff761bfc40ec.jpg',
'https://i.pinimg.com/736x/47/40/d9/4740d9dcfe7f55588dabbd7de99185df.jpg',
        'https://images.justwatch.com/poster/345823831/s718/a-dog-and-a-plane.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=6B7K-81A8-A'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=YXBNTcU98Q0',
        'https://www.youtube.com/watch?v=VrEG58iy7QY',
        'https://www.youtube.com/watch?v=pFXR7bElyxo',
        'https://www.youtube.com/watch?v=PcDDS-7ur4s'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000014',funcion:['Emisora']},
    {codigo:'EN000049',funcion:['Emisora']}
],
especiales:[
    'หมาเห่าเครื่องบิน A Dog and A Plane : Boarding Time'
],
activo:true
},
	/* ==========================================    PERFECT 10 LINERS — DR000068   ========================================== */
{
codigo:'DR000068',
titulo:'Perfect 10 Liners',
tituloOriginal:'สายรหัสเทวดา',
alias:['Sai Rหัสเทวดา','Perfect 10 Liners'],
tipo:'Drama',
anio:2024,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000068',
temporadas:1,
temporada:1,
episodios:24,
duracion:60,
estado:'Finalizado',
estreno:'2024-10-27',
finalizacion:'2025-04-06',
generos:[
    'Comedia',
    'Romance'
],
tags:[
    'BL',
    'Universidad',
    'Juventud'
],
personas:[
    {nombre:'Arc',persona:'PR000516',funcion:['Actor'],principal:true},
    {nombre:'Arm',persona:'PR000517',funcion:['Actor'],principal:true},
    {nombre:'Yotha',persona:'PR000191',funcion:['Actor'],principal:true},
    {nombre:'Gun',persona:'PR000073',funcion:['Actor'],principal:true},
    {nombre:'Faifa',persona:'PR000529',funcion:['Actor'],principal:true},
    {nombre:'Wine',persona:'PR000530',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000081',personajes:['Arc','Arm']},
    {ship:'SH000087',personajes:['Yotha','Gun']},
    {ship:'SH000089',personajes:['Faifa','Wine']}
],
sinopsis:'La vida universitaria de seis estudiantes de ingeniería se entrelaza a través del sistema de mentoría de los Perfect 10 Liners. Arc y Arm comienzan con una relación complicada después de que Arm publique accidentalmente una fotografía de su mentor en una página universitaria. Yotha y Gun se acercan cuando Yotha acepta ayudar a Gun con su miedo a dormir a oscuras. Mientras tanto, Wine, el hermano menor del mentor de Yotha, termina bajo el cuidado de Faifa, que se convierte poco a poco en una persona especial para él. Las tres historias avanzan entre amistad, convivencia, conflictos y sentimientos que terminan convirtiéndose en amor.',
multimedia:{
    portada:['https://i.pinimg.com/736x/fa/6d/92/fa6d927155189ebccd37e8f117cbd201.jpg',
'https://i.pinimg.com/736x/66/e7/cc/66e7cc2230e8c2ca9d89be46a03fdc4a.jpg',
'https://i.pinimg.com/736x/06/3d/ca/063dcae7cc04a4fa3fbb5ce49e37275b.jpg',
'https://i.pinimg.com/736x/ff/25/f2/ff25f28b4c8cdc0c47e7716afdbbf2f2.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=bbiPjsgdKjU'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=6Vm6AaAzvIw',
        'https://www.youtube.com/watch?v=AhbyQyT49QE',
        'https://www.youtube.com/watch?v=itsxy1gUIYY',
        'https://www.youtube.com/watch?v=fyiXjRdB3U0'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000029',funcion:['Plataforma']}
],
especiales:[
    'สายรหัสเทวดา Perfect 10 Liners Special'
],
activo:true
},

	/* ==========================================    MY ROMANCE SCAMMER — DR000069   ========================================== */
{
codigo:'DR000069',
titulo:'My Romance Scammer',
tituloOriginal:'รักจริง หลังแต่ง',
alias:['Rak Ching Lang Taeng','Real Love After Marriage'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000069',
temporadas:1,
temporada:1,
episodios:12,
duracion:59,
estado:'Finalizado',
estreno:'2026-02-01',
finalizacion:'2026-04-19',
generos:[
    'Comedia',
    'Romance'
],
tags:[
    'BL'
],
personas:[
    {nombre:'Tim',persona:'PR000529',funcion:['Actor'],principal:true},
    {nombre:'Pai',persona:'PR000530',funcion:['Actor'],principal:true},
    {nombre:'Yu',persona:'PR000055',funcion:['Actor'],principal:true},
    {nombre:'North',persona:'PR000556',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000089',personajes:['Tim','Pai']},
    {ship:'SH000108',personajes:['Yu','North']}
],
sinopsis:'Pai y North, dos primos y herederos de la familia Jiramongkolthanan, se convierten en el objetivo de dos estafadores, Tim y Yu, que pretenden casarse con ellos para acceder a su fortuna. Mientras North se casa en secreto con Yu y descubre después que ha sido engañado, Tim continúa preparando su boda con Pai sin que este sepa que su prometido es un estafador. Lo que comienza como un plan para conseguir dinero se complica cuando los sentimientos de los cuatro hombres empiezan a ser reales.',
multimedia:{
    portada:['https://i.pinimg.com/736x/07/f3/16/07f3161f410e032d857bda6400903c5a.jpg',
'https://i.pinimg.com/736x/94/e9/5b/94e95bd08fc9dd48898e4a8ea545253f.jpg',
'https://i.pinimg.com/736x/90/44/52/90445225c81f05baf5d85015fdc54525.jpg'],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=8K0o0Ip2ukk',
        'https://www.youtube.com/watch?v=TkGOlxUhYB0',
        'https://www.youtube.com/watch?v=NdrYTlqHWlk'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000029',funcion:['Plataforma']}
],
especiales:[
    'My Romance Scammer รักจริง หลังแต่ง Special'
],
activo:true
},

/* ==========================================    TWENTY ONE — DR000070   ========================================== */
{
codigo:'DR000070',
titulo:'Twenty One',
tituloOriginal:'21วัน ลองมารักกันดูไหม',
alias:['Twenty One เราลองมารักกันสัก21วันดูไหม','21 Days, Shall We Try Falling in Love?'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000070',
temporadas:1,
temporada:1,
episodios:'',
duracion:'',
estado:'Anunciado',
estreno:'',
finalizacion:'',
generos:[
    'Comedia',
    'Romance'
],
tags:[
    'BL',
    'Juventud',
    'Música'
],
personas:[
    {nombre:'Aii',persona:'PR000529',funcion:['Actor'],principal:true},
    {nombre:'Koon',persona:'PR000530',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000089',personajes:['Aii','Koon']}
],
sinopsis:'Aii y Koon quedan destrozados después de ser rechazados por la misma persona. Al conocerse y descubrir que tienen muchas cosas en común, comienzan a apoyarse mutuamente y terminan convirtiéndose en compañeros de piso. Cuando Aii se da cuenta de que sus sentimientos por Koon van más allá de la amistad y se lo confiesa, Koon teme perder la relación que ya tienen. Finalmente propone un experimento de veintiún días para descubrir si Aii puede conseguir que se enamore de él.',
multimedia:{
    portada:['https://i.pinimg.com/736x/f5/09/cf/f509cfccc368495857c0dc2348a8094a.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=kqiruuXSplM'
    ],
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

/* ==========================================   NEVER LET ME GO — DR000071   ========================================== */
{
codigo:'DR000071',  titulo:'Never Let Me Go',
tituloOriginal:'เพื่อนายแค่หนึ่งเดียว',
alias:['Phuea Nai Khae Nueng Diao'],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000071',
temporadas:1,
temporada:1,
episodios:12,
duracion:53,
estado:'Finalizado',
estreno:'2022-12-13',
finalizacion:'2023-02-28',
generos:['Drama','Romance','Acción'],
tags:['BL','Escolar','Juventud'],
personas:[
    {nombre:'Palm',persona:'PR000515',funcion:['Actor'],principal:true},
    {nombre:'Nuengdiao',persona:'PR000284',funcion:['Actor'],principal:true},
    {nombre:'Chopper',persona:'PR000191',funcion:['Actor'],principal:true},
    {nombre:'Ben',persona:'PR000548',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000080',personajes:['Palm','Nuengdiao']},
    {ship:'SH000101',personajes:['Chopper','Ben']}
],
sinopsis:'Nuengdiao es el heredero de una familia poderosa cuya vida cambia cuando su padre es asesinado. Para protegerlo, Palm, hijo de un empleado de confianza de la familia, se convierte en su guardaespaldas. Mientras ambos afrontan amenazas y conflictos familiares, la relación entre ellos evoluciona de la protección y la amistad hacia el amor. Paralelamente, Chopper y Ben desarrollan su propia historia mientras se enfrentan a los problemas de sus respectivas familias.',
multimedia:{
    portada:[	'https://i.pinimg.com/736x/f1/de/85/f1de850015bb6e377b8c8330ea00878b.jpg',
				'https://i.pinimg.com/736x/74/05/9e/74059ea8aff473735a0f37841e7785c0.jpg',
				'https://i.pinimg.com/1200x/b3/82/6e/b3826e8f88df9e048b731c0390092886.jpg',
				'https://i.pinimg.com/1200x/14/7c/1f/147c1f4b88a6db6a6e4c71560ddaa26b.jpg',
 		    	'https://i.imgur.com/rdPMFaZ.jpg'
	],
    trailer:[        'https://www.youtube.com/watch?v=p8AwJVKAJAM'    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=Bzx89phzpek',
        'https://www.youtube.com/watch?v=E_iHxCqX_vE'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']}
],
especiales:[],
activo:true
},


/* ==========================================   DANGEROUS ROMANCE — DR000072   ========================================== */
{
codigo:'DR000072',	titulo:'Dangerous Romance',
tituloOriginal:'หัวใจในสายลม',
alias:['Hua Jai Nai Lom'],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000072',
temporadas:1,
temporada:1,
episodios:12,
duracion:45,
estado:'Finalizado',
estreno:'2023-08-18',
finalizacion:'2023-11-03',
generos:['Drama','Romance'],
tags:['BL','Escolar','Juventud'],
personas:[
    {nombre:'Kanghan',persona:'PR000191',funcion:['Actor'],principal:true},
    {nombre:'Sailom',persona:'PR000548',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000101',personajes:['Kanghan','Sailom']}
],
sinopsis:'Sailom es un estudiante becado con pocos recursos que, tras enfrentarse a Kanghan, un compañero rico y problemático, termina trabajando como su tutor particular. Lo que comienza como una relación marcada por los conflictos y las diferencias sociales se transforma gradualmente en una amistad y después en sentimientos que ninguno de los dos esperaba.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/bb/b0/17/bbb01756181ada9d0a2ec61a3a1a0e84.jpg',
			'https://i.pinimg.com/736x/f5/73/2c/f5732cf3863d37167d6e026eaaaeb927.jpg',
			'https://i.pinimg.com/1200x/8c/dd/3a/8cdd3a371c4f51a4cc53e3a4da4fe6b6.jpg',
   			 'https://cms.dmpcdn.com/ugcarticle/2023/08/20/5a185af0-3f3b-11ee-8dbf-6f718e4dc00c_webp_original.webp',
 			 'https://bancodeseries.com.br/images/posters/31433.jpg'
	],
    trailer:[
        'https://www.youtube.com/watch?v=-gV6qWZIJmg',
        'https://www.youtube.com/watch?v=HEmIL-kZQjQ'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=8P9N82LkW7U',
        'https://www.youtube.com/watch?v=nQj3Bw8qFAQ',
        'https://www.youtube.com/watch?v=oYxA2EbIJFc'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   LOVE YOU TEACHER — DR000073   ========================================== */
{
codigo:'DR000073',	titulo:'Love You Teacher',
tituloOriginal:'รักครูเท่าโลกเลย',
alias:['Rak Khru Thao Lok Loei'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000073',
temporadas:1,
temporada:1,
episodios:10,
duracion:47,
estado:'Finalizado',
estreno:'2026-03-14',
finalizacion:'2026-05-16',
generos:['Comedia','Romance','Drama'],
tags:['BL','Escolar','Juventud'],
personas:[
    {nombre:'Pobmek',persona:'PR000191',funcion:['Actor'],principal:true},
    {nombre:'Solar',persona:'PR000073',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000087',personajes:['Pobmek','Solar']}
],
sinopsis:'Pobmek es un profesor de primaria de carácter serio que no se lleva especialmente bien con los niños. Su novio Solar, también profesor, es mucho más alegre y afectuoso. Después de que Solar sufra un accidente que le provoca una lesión cerebral y hace que su mente regrese ocasionalmente a la de un niño de siete años, Pobmek tendrá que enfrentarse a una nueva realidad mientras intenta cuidar de la persona que ama y mantener su relación.',
multimedia:{
	 portada:['https://i.pinimg.com/736x/d8/56/e8/d856e8d5ef5b0d9f622222bca19e7fc1.jpg',
			'https://i.pinimg.com/736x/d0/40/8d/d0408d5c8e67dfc70e6caf68b031cd26.jpg',
    		'https://static.tvmaze.com/uploads/images/original_untouched/545/1363706.jpg'
			],
    trailer:[        'https://www.youtube.com/watch?v=c4QnAOLeI2o'    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=-OwlECihP68',
        'https://www.youtube.com/watch?v=PE1RN0rkau4',
        'https://www.youtube.com/watch?v=8e15jzG0Pao',
        'https://www.youtube.com/watch?v=C85IgYzuDqA'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000041',funcion:['Plataforma']}
],
especiales:[],
activo:true
},


/* ==========================================   HEARTBOUND — DR000074   ========================================== */
{
codigo:'DR000074',	titulo:'Heartbound',
tituloOriginal:'สุดทางหัวใจ',
alias:[],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000074',
temporadas:1,
temporada:1,
episodios:'',
duracion:'',
estado:'Anunciado',
estreno:'',
finalizacion:'',
generos:['Drama','Romance'],
tags:['BL'],
personas:[
    {nombre:'Gun',persona:'PR000191',funcion:['Actor'],principal:true},
    {nombre:'Aiyara',persona:'PR000073',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000087',personajes:['Gun','Aiyara']}
],
sinopsis:'Un accidente inesperado pone a un arquitecto en problemas con la persona equivocada: un empresario latino perteneciente a una familia mafiosa. Aunque sus personalidades son muy diferentes, la cercanía entre ambos hace que sus sentimientos crezcan.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/f9/44/27/f94427dbb0b5ef08799d9669283f0d35.jpg',
			'https://i.pinimg.com/736x/5d/c8/b7/5dc8b79cb84d156e72ca62df77ecc831.jpg',
			'https://i.pinimg.com/736x/74/48/3f/74483f57e4f267c7fede42b7591b1715.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=I1guVkLJ4mU'
    ],
    teaser:[],
    pilot:[],
    ost:[]
},
entidades:[    {codigo:'EN000004',funcion:['Productora']}],
especiales:[],
activo:true
},

/* ==========================================   ENCHANTÉ — DR000075   ========================================== */
{
codigo:'DR000075',
titulo:'Enchanté',
tituloOriginal:'ใครคืออองชองเต',
alias:['Who Is Enchanté?'],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000075',
temporadas:1,
temporada:1,
episodios:10,
duracion:45,
estado:'Finalizado',
estreno:'2022-01-28',
finalizacion:'2022-04-01',
generos:['Comedia','Romance'],
tags:['BL','Universidad','Juventud'],
personas:[
    {nombre:'Akk',persona:'PR000516',funcion:['Actor'],principal:true},
    {nombre:'Theo',persona:'PR000517',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000081',personajes:['Akk','Theo']}
],
sinopsis:'Theo regresa a Tailandia después de haber vivido varios años en Francia y retoma su amistad con Akk, su vecino y amigo de la infancia. Al encontrar en un libro de la biblioteca unos mensajes firmados por alguien que se identifica como Enchanté, Theo comienza a buscar su identidad. Cuatro estudiantes se presentan como el misterioso Enchanté, mientras Akk lo ayuda a descubrir quién está detrás de los mensajes. Durante la búsqueda, la relación entre Theo y Akk empieza a cambiar y ambos deben enfrentarse a sentimientos que habían permanecido ocultos desde su infancia.',
multimedia:{
    portada:[        'https://media.senscritique.com/media/000020508093/0/enchante.jpg'    ],
    trailer:[        'https://www.youtube.com/watch?v=7nBxV1IRIcg'    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=IHT_jd61RFQ',
        'https://www.youtube.com/watch?v=02f64J53ry4'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},


/* ==========================================   A BOSS AND A BABE — DR000076   ========================================== */
{
codigo:'DR000076',
titulo:'A Boss and a Babe',
tituloOriginal:'ชอกะเชร์คู่กันต์',
alias:['Cho Ka Cher Khu Gun','Together, Cher and Gun'],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000076',
temporadas:1,
temporada:1,
episodios:12,
duracion:43,
estado:'Finalizado',
estreno:'2023-03-03',
finalizacion:'2023-05-19',
generos:['Comedia','Romance'],
tags:['BL','Universidad','Juventud','Trabajo','Videojuegos'],
personas:[
    {nombre:'Gun',persona:'PR000516',funcion:['Actor'],principal:true},
    {nombre:'Cher',persona:'PR000517',funcion:['Actor'],principal:true},
    {nombre:'Thir',persona:'PR000557',funcion:['Actor'],principal:true},
    {nombre:'Zo',persona:'PR000558',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000081',personajes:['Gun','Cher']},
    {ship:'SH000109',personajes:['Thir','Zo']}
],
sinopsis:'Cher, un estudiante universitario en su último año que aspira a convertirse en jugador profesional de e-sports, comienza unas prácticas en una empresa de videojuegos dirigida por Gun. El carácter directo y despreocupado de Cher llama la atención de su jefe, que además descubre que él es el creador del canal ASMR que le ayuda a dormir cada noche. Lo que comienza como una relación entre jefe y becario evoluciona poco a poco hacia una relación sentimental. Al mismo tiempo, Thir y Zo desarrollan su propia historia dentro de la empresa.',
multimedia:{
    portada:[        'https://www.gmm-tv.com/cms/upload_file/category/poster/d49fb8dd118081053469cd986f0a5481.jpg'    ],
    trailer:[        'https://www.youtube.com/watch?v=ddFvBD4kCy8'    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=4zak6EoLYOs',
        'https://www.youtube.com/watch?v=oAu8XZJbbKw'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},


/* ==========================================   MELODY OF SECRETS — DR000077   ========================================== */
{
codigo:'DR000077',
titulo:'Melody of Secrets',
tituloOriginal:'ความลับในบทเพลงที่บรรเลงไม่รู้จบ',
alias:['Khwam Lap Nai Bot Phleng Thi Banleng Mai Ru Chop'],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000077',
temporadas:1,
temporada:1,
episodios:10,
duracion:45,
estado:'Finalizado',
estreno:'2025-12-05',
finalizacion:'2026-02-13',
generos:['Drama','Romance','Misterio','Thriller'],
tags:['BL','Música','Crimen','Misterio'],
personas:[
    {nombre:'Tankhun',persona:'PR000516',funcion:['Actor'],principal:true},
    {nombre:'Botpleng',persona:'PR000517',funcion:['Actor'],principal:true},
    {nombre:'Thanphop',persona:'PR000529',funcion:['Actor'],principal:true},
    {nombre:'Botpleng',persona:'PR000530',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000081',personajes:['Tankhun','Botpleng']},
    {ship:'SH000089',personajes:['Thanphop','Botpleng']}
],
sinopsis:'Botpleng es un joven periodista que ha perdido parte de sus recuerdos tras un accidente. Cuando encuentra un diario que habla de una relación amorosa de su pasado, descubre el nombre de Tankhun, un hombre que supuestamente fue su primer amor. Al reencontrarse con él, Botpleng sospecha que algo no encaja y decide acercarse a Tankhun mientras investiga un misterioso caso de asesinato relacionado con el día en que se conocieron. A medida que salen a la luz secretos, recuerdos e identidades ocultas, ambos vuelven a enfrentarse a unos sentimientos que parecían pertenecer al pasado.',
multimedia:{
    portada:[        ' https://i.pinimg.com/736x/e8/94/ac/e894ac0e5e620e19d0b8e7ced52c8da2.jpg',
					 'https://i.pinimg.com/736x/d8/cd/01/d8cd01ee076318ca4a8e53a288600218.jpg',
					 'https://i.pinimg.com/736x/66/ec/a3/66eca353df653a65f952f1b33116658d.jpg'    ],
    trailer:[        'https://www.youtube.com/watch?v=ouGVE645dXE'    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=8E1YTlqyHBE',
        'https://www.youtube.com/watch?v=LH_50OZn-0g'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000014',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},


/* ==========================================   LOVERS & GANGSTERS — DR000078   ========================================== */
{
codigo:'DR000078',
titulo:'Lovers & Gangsters',
tituloOriginal:'หงเสนคลุกฝุ่น',
alias:[],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000078',
temporadas:1,
temporada:1,
episodios:'',
duracion:'',
estado:'Anunciado',
estreno:'',
finalizacion:'',
generos:['Drama','Romance','Acción'],
tags:['BL','Mafia','Histórico','Gangsters'],
personas:[
    {nombre:'Hongsen',persona:'PR000516',funcion:['Actor'],principal:true},
    {nombre:'YongYi',persona:'PR000517',funcion:['Actor'],principal:true},
    {nombre:'Seng',persona:'PR000559',funcion:['Actor'],principal:true},
    {nombre:'Zo',persona:'PR000390',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000081',personajes:['Hongsen','YongYi']},
    {ship:'SH000110',personajes:['Seng','Zo']}
],
sinopsis:'Ambientada en la Tailandia de los años 50, la historia gira en torno a dos bandas de gánsteres rivales. Hongsen lidera la banda Kaoyod y se ve sorprendido cuando YongYi, cuyo padre fue asesinado por su grupo, decide entrar en la banda. A pesar del conflicto y del pasado que los separa, ambos terminan desarrollando sentimientos. Al mismo tiempo, Seng, hermano de YongYi y líder de la banda rival Klukfoon, busca vengarse de Hongsen mientras su relación con Zo complica todavía más el enfrentamiento entre las dos familias.',
multimedia:{
    portada:[        'https://image.idntimes.com/post/20251125/img_3010_7740836d-92c6-4ce3-b666-3eef403023d5.jpeg?tr=w-640'    ],
    trailer:[],
    teaser:[],
    pilot:[        'https://www.youtube.com/watch?v=s-Wu-tmQXTM'    ],
    ost:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']}
],
especiales:[],
activo:true
},

/* ==========================================   STAR IN MY MIND — DR000079   ========================================== */
{
codigo:'DR000079',
titulo:'Star in My Mind',
tituloOriginal:'แล้วแต่ดาว',
alias:[],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:{ codigo:'FR000013', orden:1 },
universo:'',
serie:'SR000079',
temporadas:1,
temporada:1,
episodios:8,
duracion:'45 min',
estado:'Finalizado',
estreno:'2022-04-08',
finalizacion:'2022-05-27',
generos:['Comedia','Romance','Juventud'],
tags:['BL','Romance','Universidad','Reencuentro'],
personas:[
    {nombre:'Daonuea',persona:'PR000519',funcion:['Actor'],principal:true},
    {nombre:'Khabkluen',persona:'PR000518',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000082',personajes:['Daonuea','Khabkluen']}
],
sinopsis:'Daonuea regresa a Tailandia después de varios años estudiando en Alemania y vuelve a encontrarse con Khabkluen, su primer amor universitario. Años atrás, Daonuea se había declarado, pero no recibió la respuesta que esperaba. Ahora, al reencontrarse, descubre que sus sentimientos por Khabkluen siguen presentes y que quizá la historia entre ambos todavía no ha terminado.',
multimedia:{
    portada:['https://i.pinimg.com/736x/07/31/c9/0731c902e73ae5774dd51bc165295d38.jpg',
'https://i.pinimg.com/736x/15/2a/6d/152a6d82b6e065b277e39f20accce006.jpg',
'https://i.pinimg.com/1200x/aa/30/f5/aa30f557e6d0f56f877f297a780f3b41.jpg',
'https://i.pinimg.com/736x/62/6f/e5/626fe55c7e2c29a5586a6727658038ad.jpg','https://image.tmdb.org/t/p/original/ep50huHBkNMS3mvhWCo298DyRsn.jpg'],
    trailer:['https://www.youtube.com/watch?v=LbxTzpWqGWE'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=Dt4Rp05OImE',
        'https://www.youtube.com/watch?v=TKng-k4dq-w',
        'https://www.youtube.com/watch?v=q1ED0Ty8X_o'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   SKY IN YOUR HEART — DR000080   ========================================== */
{
codigo:'DR000080',
titulo:'Sky in Your Heart',
tituloOriginal:'ขั้วฟ้าของผม',
alias:[],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:{ codigo:'FR000013', orden:2 },
universo:'',
serie:'SR000080',
temporadas:1,
temporada:1,
episodios:8,
duracion:'45 min',
estado:'Finalizado',
estreno:'2022-06-03',
finalizacion:'2022-07-22',
generos:['Romance'],
tags:['BL','Romance','Universidad','Montaña'],
personas:[
    {nombre:'Fah',persona:'PR000270',funcion:['Actor'],principal:true},
    {nombre:'Prince',persona:'PR000530',funcion:['Actor'],principal:true},
    {nombre:'Khabkluen',persona:'PR000518',funcion:['Actor'],principal:false},
    {nombre:'Daonuea',persona:'PR000519',funcion:['Actor'],principal:false}
],
ships:[
    {ship:'SH000111',personajes:['Fah','Prince']},
    {ship:'SH000082',personajes:['Khabkluen','Daonuea']}
],
sinopsis:'Fah, un estudiante de medicina, viaja a una remota zona montañosa junto a su amigo Prince para realizar voluntariado. Allí conoce a Prince, un joven de carácter reservado con quien inicialmente mantiene una relación complicada. La convivencia y las experiencias que comparten hacen que sus sentimientos evolucionen mientras descubren nuevas facetas del otro.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/9b/2d/9a/9b2d9a292a7647acb631a428a30ad6d3.jpg','https://i.pinimg.com/736x/bc/93/91/bc93913738a5ef580fc28ac43df112ef.jpg','https://static.tvmaze.com/uploads/images/original_untouched/409/1024982.jpg'],
    trailer:['https://www.youtube.com/watch?v=7USu2ixI37k'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=q1ED0Ty8X_o',
        'https://www.youtube.com/watch?v=CwIeJVt1CqM'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   HIDDEN AGENDA — DR000081   ========================================== */
{
codigo:'DR000081',
titulo:'Hidden Agenda',
tituloOriginal:'วาระซ่อนเร้น',
alias:[],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000081',
temporadas:1,
temporada:1,
episodios:12,
duracion:'48 min',
estado:'Finalizado',
estreno:'2023-07-09',
finalizacion:'2023-09-24',
generos:['Comedia','Romance'],
tags:['BL','Universidad','Romance','Amistad'],
personas:[
    {nombre:'Joke',persona:'PR000518',funcion:['Actor'],principal:true},
    {nombre:'Zo',persona:'PR000519',funcion:['Actor'],principal:true},
    {nombre:'Pat',persona:'PR000533',funcion:['Actor'],principal:false},
    {nombre:'Jeng',persona:'PR000534',funcion:['Actor'],principal:false}
],
ships:[
    {ship:'SH000082',personajes:['Joke','Zo']},
    {ship:'SH000092',personajes:['Pat','Jeng']}
],
sinopsis:'Zo es un estudiante universitario que quiere acercarse a Nita y decide pedir ayuda a Joke, un estudiante experimentado en relaciones y seducción. Lo que comienza como una estrategia para conquistar a otra persona acaba acercando cada vez más a Zo y Joke. Mientras ambos descubren sus verdaderos sentimientos, la relación entre Pat y Jeng también evoluciona a su alrededor.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/7b/55/22/7b552242d1798912152bb8410456e354.jpg',
'https://i.pinimg.com/736x/0b/a8/d2/0ba8d2c78ac4667b3c178a5f89a57c4e.jpg',
'https://i.pinimg.com/736x/19/80/4b/19804ba7f5dd2170a545c98af7fa570a.jpg',
'https://i.pinimg.com/736x/3b/d4/11/3bd4112d5c79e666406ff45566c6ba68.jpg','https://image.tmdb.org/t/p/original/uxNm0RfDTxTK2cg5Zt4dJZNbxDJ.jpg'],
    trailer:['https://www.youtube.com/watch?v=UdPTjMt52jM'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=AYz5JGU1TWg',
        'https://www.youtube.com/watch?v=Tryba5gU1h0'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']}
],
especiales:[],
activo:true
},

/* ==========================================   THE HEART KILLERS — DR000082   ========================================== */
{
codigo:'DR000082',
titulo:'The Heart Killers',
tituloOriginal:'เขาจ้างให้ผมจีบนักฆ่า',
alias:[],
tipo:'Drama',
anio:2024,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000082',
temporadas:1,
temporada:1,
episodios:12,
duracion:'',
estado:'Finalizado',
estreno:'2024-11-20',
finalizacion:'2025-02-05',
generos:['Comedia','Romance','Acción','Suspense'],
tags:['BL','Mafia','Asesinos','Acción','Romance'],
personas:[
    {nombre:'Fadel',persona:'PR000518',funcion:['Actor'],principal:true},
    {nombre:'Style',persona:'PR000519',funcion:['Actor'],principal:true},
    {nombre:'Kant',persona:'PR000388',funcion:['Actor'],principal:true},
    {nombre:'Bison',persona:'PR000017',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000082',personajes:['Fadel','Style']},
    {ship:'SH000068',personajes:['Kant','Bison']}
],
sinopsis:'Kant, un tatuador con problemas económicos, recibe el encargo de acercarse a dos hermanos que trabajan como asesinos a sueldo. Para cumplir su misión se alía con su amigo Style, pero el plan se complica cuando ambos terminan desarrollando sentimientos por los hermanos Fadel y Bison. Entre secretos, encargos y peligros, las relaciones ponen en riesgo tanto la misión como la vida de todos ellos.',
multimedia:{
    portada:['https://i.pinimg.com/736x/16/17/ea/1617ea0bae65ab72ea35b2e16d2ce553.jpg',
'https://i.pinimg.com/736x/bd/f1/13/bdf1134a9263c7ffd24ec3643ae7b0c6.jpg',
'https://i.pinimg.com/736x/c7/f1/f7/c7f1f75f85e7917d1c67995e42e0f30b.jpg',
'https://i.pinimg.com/736x/36/87/33/368733e2f3296616a417e9a17f53375a.jpg','https://static.tvmaze.com/uploads/images/original_untouched/544/544932.jpg'],
    trailer:['https://www.youtube.com/watch?v=jfagnr691kE'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=x5cMa7MKz9s',
        'https://www.youtube.com/watch?v=pLuNEX9v2-8',
        'https://www.youtube.com/watch?v=5e-UG_Y6Rng',
        'https://www.youtube.com/watch?v=rKmZsVBCzrs',
        'https://www.youtube.com/watch?v=1ky1hKdAJK4'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000007',funcion:['Productora']},
    {codigo:'EN000050',funcion:['Productora']},
    {codigo:'EN000024',funcion:['Plataforma']},
    {codigo:'EN000025',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   DARE YOU TO DEATH — DR000083   ========================================== */
{
codigo:'DR000083',
titulo:'Dare You to Death',
tituloOriginal:'ไขคดีเป็น เห็นคดีตาย',
alias:[],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000083',
temporadas:1,
temporada:1,
episodios:10,
duracion:'',
estado:'Finalizado',
estreno:'2026-04-02',
finalizacion:'2026-06-04',
generos:['Drama','Romance','Misterio','Thriller'],
tags:['BL','Policial','Misterio','Investigación','Crimen'],
personas:[
    {nombre:'Jade',persona:'PR000518',funcion:['Actor'],principal:true},
    {nombre:'Kamin',persona:'PR000519',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000082',personajes:['Jade','Kamin']}
],
sinopsis:'Jade, un joven policía, se ve obligado a investigar una serie de muertes misteriosas junto a Kamin, un inspector que ha regresado al país después de estudiar en el extranjero. Aunque sus personalidades y métodos son muy diferentes, ambos deben trabajar juntos para descubrir quién está detrás de los asesinatos. Mientras la investigación avanza y el peligro aumenta, la relación entre ellos también se vuelve cada vez más cercana.',
multimedia:{
    portada:['https://i.pinimg.com/736x/09/51/92/095192a6e06bfc616da3e641deae187d.jpg','https://i.pinimg.com/1200x/5d/d3/40/5dd340b8b7946ff676e4c0ab277b0c69.jpg','https://pbs.twimg.com/media/G7XzWOVawAAGjAq.jpg'],
    trailer:['https://www.youtube.com/watch?v=OdaPoeA6lFU'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=Zezj30oOUds',
        'https://www.youtube.com/watch?v=RLxFl6LmmRc',
        'https://www.youtube.com/watch?v=rzVvmwXUORE'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000040',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   HOW TO SURVIVE MY CEO — DR000084   ========================================== */
{
codigo:'DR000084',
titulo:'How to Survive My CEO',
tituloOriginal:'พัตลมอย่าแย่',
alias:[],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000084',
temporadas:1,
temporada:1,
episodios:'',
duracion:'',
estado:'Anunciado',
estreno:'',
finalizacion:'',
generos:['Comedia','Romance'],
tags:['BL','Romance','Oficina','CEO'],
personas:[
    {nombre:'Patlom',persona:'PR000518',funcion:['Actor'],principal:true},
    {nombre:'Pafon',persona:'PR000519',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000082',personajes:['Patlom','Pafon']}
],
sinopsis:'Patlom es un joven empresario cuya vida está completamente centrada en el trabajo hasta que conoce a Pafon. Después de un encuentro inesperado entre ambos, descubre que Pafon será su nuevo becario. Lo que comienza como una situación complicada pronto se transforma en una relación marcada por la atracción, los malentendidos y los sentimientos que ambos intentan ocultar.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/f3/28/d4/f328d4225d7c4a04d2aef6c2ad043b84.jpg','https://mintmagth.s3.ap-southeast-1.amazonaws.com/photos/shares/Mint%20People/2025/NOV/GMMTV%202026/6926d1b98e9b0.jpeg'],
    trailer:[],
    teaser:[],
    pilot:['https://www.youtube.com/watch?v=vqnTE9LMoA8'],
    ost:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000010',funcion:['Productora']},
    {codigo:'EN000007',funcion:['Productora']}
],
especiales:[],
activo:true
},
/* ==========================================   A TALE OF THOUSAND STARS — DR000085   ========================================== */
{
codigo:'DR000085',
titulo:'A Tale of Thousand Stars',
tituloOriginal:'นิทานพันดาว',
alias:['1000 Stars'],
tipo:'Drama',
anio:2021,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000085',
temporadas:1,
temporada:1,
episodios:10,
duracion:'65 min',
estado:'Finalizado',
estreno:'2021-01-29',
finalizacion:'2021-04-02',
generos:['Drama','Romance'],
tags:['BL','Romance','Drama','Vida rural','Profesor','Naturaleza'],
personas:[
    {nombre:'Phupha',persona:'PR000198',funcion:['Actor'],principal:true},
    {nombre:'Tian',persona:'PR000514',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000079',personajes:['Phupha','Tian']}
],
sinopsis:'Tian recibe un trasplante de corazón tras la muerte de Torfun, una joven maestra voluntaria. Después de conocer su historia y descubrir su último deseo, decide viajar hasta la aldea de Pha Pun Dao para ocupar su puesto como profesor voluntario. Allí conoce a Phupha, el jefe de los guardabosques, con quien inicialmente mantiene una relación complicada que poco a poco se transforma en un vínculo cada vez más profundo.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/df/9d/7e/df9d7e24c06228ffa49bb459190e27c3.jpg',
'https://i.pinimg.com/736x/d2/20/18/d22018aaaa1270635342fc2d60795065.jpg','https://media.senscritique.com/media/000020255386/0/a_tale_of_thousand_stars.jpg'],
    trailer:['https://www.youtube.com/watch?v=o-gaRz2AE_Y'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=O-QWKCcbRFg',
        'https://www.youtube.com/watch?v=MYmRz0Qkwkw',
        'https://www.youtube.com/watch?v=KEYwYja1Ndg',
        'https://www.youtube.com/watch?v=o2YLervmNAk'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000022',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   CUPID'S LAST WISH — DR000086   ========================================== */
{
codigo:'DR000086',
titulo:"Cupid's Last Wish",
tituloOriginal:'พินัยกรรมกามเทพ',
alias:[],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000086',
temporadas:1,
temporada:1,
episodios:10,
duracion:'43 min',
estado:'Finalizado',
estreno:'2022-02-21',
finalizacion:'2022-03-22',
generos:['Romance','Fantasía','Aventura'],
tags:['BL','Romance','Fantasía','Cambio de cuerpo','Amistad','Viaje'],
personas:[
    {nombre:'Korn',persona:'PR000198',funcion:['Actor'],principal:true},
    {nombre:'Win',persona:'PR000514',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000079',personajes:['Korn','Win']}
],
sinopsis:'Win y su hermana Lin sufren un accidente que provoca que sus cuerpos se intercambien. Win, atrapado en el cuerpo de su hermana, debe emprender un viaje junto a Korn, su antiguo mejor amigo, para conseguir el agua sagrada de cuatro templos y recuperar su cuerpo antes de que se cumplan siete días. Durante el viaje, la relación entre ambos comienza a cambiar y los sentimientos que habían permanecido ocultos salen a la luz.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/72/42/c1/7242c13ff0d652dea76620160fb32cc3.jpg',
'https://i.pinimg.com/1200x/01/f5/46/01f546dbc6cb0863c0fa7a748d7e05e2.jpg',
'https://i.pinimg.com/1200x/f9/e4/d7/f9e4d78e6a2c49d4e79208a040c36da2.jpg','https://media.senscritique.com/media/000020377948/0/cupid_s_last_wish.jpg'],
    trailer:['https://www.youtube.com/watch?v=_-M8vcelnQM'],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=zpys4Ga3q_Q',
        'https://www.youtube.com/watch?v=muL7HT50TXA'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000026',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   OSSAN'S LOVE THAILAND — DR000087   ========================================== */
{
codigo:'DR000087',
titulo:"Ossan's Love Thailand",
tituloOriginal:'รักนี้ให้ “นาย”',
alias:['Rak Ni Hai Nai'],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000087',
temporadas:1,
temporada:1,
episodios:12,
duracion:'53 min',
estado:'Finalizado',
estreno:'2025-01-06',
finalizacion:'2025-03-24',
generos:['Comedia','Romance','Drama'],
tags:['BL','Romance','Comedia','Oficina','Jefe','Triángulo amoroso','Remake'],
personas:[
    {nombre:'Heng',persona:'PR000198',funcion:['Actor'],principal:true},
    {nombre:'Mo',persona:'PR000514',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000079',personajes:['Heng','Mo']}
],
sinopsis:'Heng es un joven soltero que trabaja como agente inmobiliario y cuya vida amorosa parece no tener rumbo. Todo cambia cuando descubre que su jefe, Kongdech, está enamorado de él. Al mismo tiempo, su compañero de trabajo y compañero de piso, Mo, también comienza a desarrollar sentimientos por Heng. En medio de este inesperado triángulo amoroso, Heng tendrá que descubrir quién ocupa realmente su corazón.',
multimedia:{
    portada:['https://i.pinimg.com/736x/96/26/7a/96267a3023e7f44c2b76a62df0d7c3c9.jpg',
'https://i.pinimg.com/736x/f4/ae/88/f4ae886a3c05e625de8e884fe55c7176.jpg',
'https://i.pinimg.com/736x/6e/d2/b2/6ed2b21df17a9b6cdf7ddfe47811acdb.jpg',
'https://i.pinimg.com/736x/2d/ba/b0/2dbab07f8e022940bbad793974d94374.jpg'],
    trailer:['https://www.youtube.com/watch?v=lsEDajn3xJ4'],
    teaser:[],
    pilot:[],
    ost:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']},
    {codigo:'EN000051',funcion:['Productora']}
],
especiales:[],
activo:true
},

/* ==========================================   CUPID'S GHOST — DR000088   ========================================== */
{
codigo:'DR000088',
titulo:"Cupid's Ghost",
tituloOriginal:'ผีผลักให้รักคุณ',
alias:['Phi Phlak Hai Rak Khun'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000088',
temporadas:1,
temporada:1,
episodios:'',
duracion:'',
estado:'Anunciado',
estreno:'',
finalizacion:'',
generos:['Romance','Comedia','Fantasía'],
tags:['BL','Romance','Comedia','Fantasma','Sobrenatural'],
personas:[
    {nombre:'Jett Sukhati',persona:'PR000198',funcion:['Actor'],principal:true},
    {nombre:'Phut',persona:'PR000514',funcion:['Actor'],principal:true},
    {nombre:'Ing',persona:'PR000055',funcion:['Actor'],principal:false},
    {nombre:'Nile',persona:'PR000556',funcion:['Actor'],principal:false}
],
ships:[
    {ship:'SH000079',personajes:['Jett Sukhati','Phut']},
    {ship:'SH000108',personajes:['Ing','Nile']}
],
sinopsis:'Phut es un florista que tiene miedo de los fantasmas y, por ello, también de los funerales. Cuando se encuentra con un fantasma en la funeraria de Jett, este le ofrece un trabajo que consiste en comunicarse con las personas fallecidas a las que presta sus servicios. A partir de ese encuentro comenzará una historia de romance, fantasmas y situaciones inesperadas.',
multimedia:{
    portada:['https://i.pinimg.com/736x/d8/cf/24/d8cf2450ae1635da35390ba0635eb2a8.jpg','https://i.pinimg.com/736x/37/52/5b/37525bae286a24374898a9bfa60816fa.jpg'],
    trailer:[],
    teaser:[],
    pilot:['https://www.youtube.com/watch?v=KYwx7hLWTOM'],
    ost:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000007',funcion:['Productora']},
    {codigo:'EN000052',funcion:['Productora']}
],
especiales:[],
activo:true
},
/* ==========================================   THE ECLIPSE — DR000089  ========================================== */
{
codigo:'DR000089',
titulo:'The Eclipse',
tituloOriginal:'คาธ',
alias:['Khat'],
tipo:'Drama',
anio:2022,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000089',
temporadas:1,
temporada:1,
episodios:12,
duracion:'45 min',
estado:'Finalizado',
estreno:'2022-08-12',
finalizacion:'2022-10-28',
generos:['Romance','Misterio','Juvenil'],
tags:['BL','Instituto','Estudiantes','Maldición','Sobrenatural','Enemigos a amantes','LGBTQ+'],
personas:[
    {nombre:'Akk',persona:'PR000388',funcion:['Actor'],principal:true},
    {nombre:'Ayan',persona:'PR000017',funcion:['Actor'],principal:true},
    {nombre:'Khanlong',persona:'PR000294',funcion:['Actor'],principal:false},
    {nombre:'Thuaphu',persona:'PR000560',funcion:['Actor'],principal:false}
],
ships:[
    {ship:'SH000068',personajes:['Akk','Ayan']},
    {ship:'SH000112',personajes:['Khanlong','Thuaphu']}
],
sinopsis:'En la estricta escuela masculina Suppalo, los alumnos deben cumplir unas normas muy severas bajo la amenaza de una antigua maldición que, según los rumores, se vuelve más poderosa cuando se acerca un eclipse solar. Akk, jefe de los prefectos estudiantiles, tiene la misión de hacer cumplir las reglas, mientras que Ayan, un nuevo alumno decidido a descubrir la verdad sobre la muerte de su tío, desafía constantemente la autoridad del centro. La rivalidad entre ambos irá transformándose mientras descubren los secretos que rodean a la escuela y a la misteriosa maldición.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/f0/dd/7e/f0dd7e587c13d216bfaca4012cae1aa8.jpg',
'https://i.pinimg.com/736x/01/0f/4b/010f4b1e0d83c8f58efdb7b4d200cc06.jpg',
'https://i.pinimg.com/736x/52/ec/d2/52ecd2da60343101d71bc076d492e1ac.jpg',
'https://i.pinimg.com/1200x/b5/81/5b/b5815b9af9a469efcffc0e0cef405985.jpg',
        'https://cms.dmpcdn.com/ugcarticle/2022/10/21/5438e210-50ff-11ed-9875-f91c51608aaa_original.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=cAUsEo1_frs'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=iVRzQhRf0Z0'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},	
	/* ==========================================   CAT FOR CASH — DR000090  ========================================== */
{
codigo:'DR000090',
titulo:'Cat for Cash',
tituloOriginal:'เปย์รักด้วยแมวเลี้ยง',
alias:['Pay Rak Duai Maeo Liang'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000090',
temporadas:1,
temporada:1,
episodios:10,
duracion:'45 min',
estado:'Finalizado',
estreno:'2026-01-20',
finalizacion:'2026-03-24',
generos:['Comedia','Romance','Sobrenatural'],
tags:['BL','Gatos','Cafetería','Deudas','Familia','Poderes sobrenaturales','Comunicación con animales'],
personas:[
    {nombre:'Tiger',persona:'PR000388',funcion:['Actor'],principal:true},
    {nombre:'Lynx',persona:'PR000017',funcion:['Actor'],principal:true},
    {nombre:'Pug',persona:'PR000524',funcion:['Actor'],principal:false},
    {nombre:'Leo',persona:'PR000525',funcion:['Actor'],principal:false}
],
ships:[
    {ship:'SH000068',personajes:['Tiger','Lynx']},
    {ship:'SH000085',personajes:['Pug','Leo']}
],
sinopsis:'Tiger, un cobrador de deudas amante de los gatos, recibe inesperadamente un poder especial que le permite comunicarse con ellos. Poco antes de morir, la propietaria de una cafetería de gatos le pide que ayude a mantener el negocio a salvo de las deudas y de su propio hijo, Lynx, un intérprete que detesta a los gatos y quiere vender la cafetería. Mientras intentan mantener el negocio en funcionamiento, los conflictos familiares y la relación entre Tiger y Lynx harán que la cafetería se convierta en el escenario de una historia de amor y situaciones inesperadas.',
multimedia:{
    portada:['https://i.pinimg.com/736x/97/b7/ed/97b7eda73fc55bc11dcf52296d83aa64.jpg',
'https://i.pinimg.com/1200x/8b/08/e6/8b08e6f089e71d2a822d867d4285a4fd.jpg',
'https://i.pinimg.com/736x/de/3e/81/de3e8128ec4471f443e06e5c6684987e.jpg',
'https://i.pinimg.com/1200x/26/8c/1f/268c1fe020944ea38a02fc6fbc318ebb.jpg',
'https://i.pinimg.com/1200x/84/40/76/8440766130f98d24903b738224819e2f.jpg',
        'https://truevisions.co.th/static/9a89afbd-cefa-4805-a939-f31466d6f980.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=H6l2SWc3SLI'
    ],
    teaser:[],
    pilot:[
        'https://www.youtube.com/watch?v=1M-6KmMCE20'
    ],
    ost:[
        'https://www.youtube.com/watch?v=egMP38-uh78',
        'https://www.youtube.com/watch?v=CIv2LZx6hZ4'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000007',funcion:['Productora']},
    {codigo:'EN000053',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000049',funcion:['Emisora']}
],
especiales:[],
activo:true
},

	/* ==========================================   WE ARE — DR000091 ========================================== */
{
codigo:'DR000091',
titulo:'We Are',
tituloOriginal:'We Are คือเรารักกัน',
alias:['We Are คือเรารักกัน'],
tipo:'Drama',
anio:2024,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000091',
temporadas:1,
temporada:1,
episodios:16,
duracion:'45 min',
estado:'Finalizado',
estreno:'2024-04-03',
finalizacion:'2024-07-17',
generos:['Romance','Comedia','Juvenil'],
tags:['BL','Universidad','Estudiantes','Amistad','Vida universitaria','Enamoramiento'],
personas:[
    {nombre:'Phum',persona:'PR000515',funcion:['Actor'],principal:true},
    {nombre:'Peem',persona:'PR000284',funcion:['Actor'],principal:true},
    {nombre:'Q',persona:'PR000524',funcion:['Actor'],principal:true},
    {nombre:'Toey',persona:'PR000525',funcion:['Actor'],principal:true},
    {nombre:'Tan',persona:'PR000533',funcion:['Actor'],principal:true},
    {nombre:'Fang',persona:'PR000534',funcion:['Actor'],principal:true},
    {nombre:'Chain',persona:'PR000561',funcion:['Actor'],principal:false},
    {nombre:'Pun',persona:'PR000556',funcion:['Actor'],principal:false}
],
ships:[
    {ship:'SH000080',personajes:['Phum','Peem']},
    {ship:'SH000085',personajes:['Q','Toey']},
    {ship:'SH000092',personajes:['Tan','Fang']},
    {ship:'SH000113',personajes:['Chain','Pun']}
],
sinopsis:'Un grupo de amigos universitarios intenta compaginar sus estudios, la amistad y los sentimientos que comienzan a surgir entre ellos. Phum y Peem, Q y Toey, Tan y Fang, y Chain y Pun vivirán diferentes etapas de sus relaciones mientras descubren que el amor puede aparecer en medio de la amistad y de las situaciones más caóticas de la vida universitaria.',
multimedia:{
    portada:['https://i.pinimg.com/736x/fa/2f/04/fa2f044dea673902a386061519533709.jpg',
'https://i.pinimg.com/736x/3a/79/3a/3a793a544640dfee9ec27869bdd8c87c.jpg',
'https://i.pinimg.com/1200x/70/9a/e0/709ae096a8e4023777c06fead82829fd.jpg',
'https://i.pinimg.com/736x/cc/f3/bb/ccf3bbc9d5afe4aec80cc166ed430925.jpg',
'https://i.pinimg.com/736x/48/bf/88/48bf8882b625705e3be03b73dee350e7.jpg',
'https://i.pinimg.com/736x/2b/a7/c7/2ba7c715e9cb1b540d937157bc4a5797.jpg',
'https://i.pinimg.com/1200x/9c/42/e6/9c42e63e276dfc973ad564a8f83ffc1e.jpg',
        'https://bldramas.com/wp-content/uploads/2024/04/we-are-poster.webp'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=LHiFM1mfahk'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=RRD1Rtsj4cE',
        'https://www.youtube.com/watch?v=3Om0znCNfJ0',
        'https://www.youtube.com/watch?v=-Y9NfUPdlFg',
        'https://www.youtube.com/watch?v=B9RqVCGTRxE'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   MEMOIR OF RATI — DR000092  ========================================== */
{
codigo:'DR000092',
titulo:'Memoir of Rati',
tituloOriginal:'จาฤกรติชา',
alias:['Memoir Of Rati','Jarak Rati Cha'],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000092',
temporadas:1,
temporada:1,
episodios:12,
duracion:'60 min',
estado:'Finalizado',
estreno:'2025-06-20',
finalizacion:'2025-09-05',
generos:['Romance','Drama','Histórico'],
tags:['BL','Época','Siam','Aristocracia','Diferencias sociales','Amor prohibido','Francia','Intérprete'],
personas:[
    {nombre:'Rati',persona:'PR000562',funcion:['Actor'],principal:true},
    {nombre:'Theeratorn',persona:'PR000559',funcion:['Actor'],principal:true},
    {nombre:'Mek',persona:'PR000533',funcion:['Actor'],principal:false},
    {nombre:'Dech',persona:'PR000534',funcion:['Actor'],principal:false}
],
ships:[
    {ship:'SH000114',personajes:['Rati','Theeratorn']},
    {ship:'SH000092',personajes:['Mek','Dech']}
],
sinopsis:'Rati, un huérfano de origen humilde que fue criado bajo la protección de una familia aristocrática, regresa a Siam después de veinte años como intérprete de la embajada francesa. Allí conoce a Theeratorn, un noble que ocupa un alto cargo en el Ministerio de Educación. Lo que comienza como un encuentro marcado por el amor a primera vista se transforma en una relación que debe enfrentarse a las diferencias sociales y a las restricciones de la sociedad de la época. Al mismo tiempo, Mek, un humilde trabajador, desarrolla una relación con Dech, un joven aristócrata cuya posición social amenaza con convertirse en un obstáculo para ambos.',
multimedia:{
    portada:['https://i.pinimg.com/736x/9a/b4/f6/9ab4f671bed700e21751b9912e782767.jpg',
'https://i.pinimg.com/736x/08/37/ee/0837ee9dec828d536cf6b5e7e2d2d3d0.jpg',
'https://i.pinimg.com/736x/fe/55/ee/fe55eeda58bcf666becf0d65a496786f.jpg',
'https://i.pinimg.com/1200x/8d/eb/97/8deb9745d0069cd9a263046041f58520.jpg',        'https://images.plex.tv/photo?scale=1&size=large-1920&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FatpWS19QH1HOwaUrw2cxyEW6ay3.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=o1vKWWNFaTI'
    ],
    teaser:[],
    pilot:[
        'https://www.youtube.com/watch?v=OZ-PXZVPZck'
    ],
    ost:[
        'https://www.youtube.com/watch?v=qxBmzCnwJcE',
        'https://www.youtube.com/watch?v=C3cTRd79oeU',
        'https://www.youtube.com/watch?v=o2vH_wey7nc'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

/* ==========================================   BILLIONAIRE BIKER — DR000093  ========================================== */
{
codigo:'DR000093',
titulo:'Billionaire Biker',
tituloOriginal:'Billionaire Biker',
alias:[],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000093',
temporadas:1,
temporada:1,
episodios:'',
duracion:'',
estado:'Anunciado',
estreno:'',
finalizacion:'',
generos:['Romance','Comedia'],
tags:['BL','Oficina','Jefe y empleado','Motocicleta','Diferencias sociales','Rico y pobre'],
personas:[
    {nombre:'Win',persona:'PR000533',funcion:['Actor'],principal:true},
    {nombre:'Ocean',persona:'PR000534',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000092',personajes:['Win','Ocean']}
],
sinopsis:'Ocean llega a su primer día de trabajo y, al confundir una motocicleta con la de un conductor de mototaxi, termina subiéndose a la moto de Win, el vicepresidente de la empresa. Divertido por el malentendido y atraído por Ocean, Win comienza a pagarle para que realice diferentes tareas con la intención de mantenerlo cerca. Lo que empieza como una situación inesperada en el trabajo pronto se transforma en una relación cada vez más cercana.',
multimedia:{
    portada:['https://i.pinimg.com/736x/48/bb/04/48bb04b82dbfd1f35b9d08a1da8f1545.jpg',
        'https://m.media-amazon.com/images/M/MV5BMDA5Nzc5MTMtZTU4My00MzhhLTlmMTctZmNhMTc0YWRjYmQ5XkEyXkFqcGc%40._V1_.jpg'
    ],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[
        'https://www.youtube.com/watch?v=_aanEYBtdYY'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000007',funcion:['Productora']},
    {codigo:'EN000005',funcion:['Productora']}
],
especiales:[],
activo:true
},

/* ==========================================   THAT SUMMER — DR000094  ========================================== */
{
codigo:'DR000094',
titulo:'That Summer',
tituloOriginal:'ผมเจอเจ้าชายบนชายหาด',
alias:['Pom Choe Chaochai Bon Chai Hat'],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000094',
temporadas:1,
temporada:1,
episodios:10,
duracion:'50 min',
estado:'Finalizado',
estreno:'2025-09-19',
finalizacion:'2025-11-21',
generos:['Romance','Drama','Aventura'],
tags:['BL','Playa','Isla','Amnesia','Príncipe','Verano','Familia','Identidad oculta'],
personas:[
    {nombre:'Lava',persona:'PR000524',funcion:['Actor'],principal:true},
    {nombre:'Davin',persona:'PR000525',funcion:['Actor'],principal:true},
    {nombre:'Pheng',persona:'PR000293',funcion:['Actor'],principal:false},
    {nombre:'Wut',persona:'PR000555',funcion:['Actor'],principal:false}
],
ships:[
    {ship:'SH000085',personajes:['Lava','Davin']},
    {ship:'SH000107',personajes:['Pheng','Wut']}
],
sinopsis:'Lava es enviado por su madre a vivir junto al mar con su tío Pheng. Allí encuentra en la playa a un joven que ha perdido la memoria y que resulta ser Davin, un príncipe. Mientras intenta descubrir quién es realmente, Lava lo acoge y lo llama Wave, y ambos comienzan a convivir mientras surge una relación cada vez más cercana. Al mismo tiempo, Pheng y el doctor Wut forman su propia historia alrededor de la vida en la isla.',
multimedia:{
    portada:['https://i.pinimg.com/736x/43/19/2f/43192fe46cf51d3f508c2696d56055e4.jpg',
'https://i.pinimg.com/736x/37/86/39/37863982a80618afe8f2109b20a56b62.jpg',
'https://i.pinimg.com/736x/d4/8d/9b/d48d9b05f8dc3ebe75cbca39c8b3d38a.jpg',
        'https://m.media-amazon.com/images/M/MV5BM2Y2Yzk3NDUtNzA0My00MjQxLWFhYjItMDFlYjM4ZjIxNGE3XkEyXkFqcGc%40._V1_.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=oE2qF1AB-ks'
    ],
    teaser:[],
    pilot:[
        'https://www.youtube.com/watch?v=-TYPNqkn9p4'
    ],
    ost:[
        'https://www.youtube.com/watch?v=0-TWkSAljyM',
        'https://www.youtube.com/watch?v=ejF6Ye_aiGA',
        'https://www.youtube.com/watch?v=0dpOb9QxZt0'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ==========================================
   SENIOR SECRET LOVE: PUPPY HONEY — DR000095
   ========================================== */
{
codigo:'DR000095',
titulo:'Senior Secret Love: Puppy Honey',
tituloOriginal:'รุ่นพี่ Secret Love ตอน Puppy Honey',
alias:['Puppy Honey'],
tipo:'Drama',
anio:2016,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000095',
temporadas:2,
temporada:1,
episodios:6,
duracion:'45 min',
estado:'Finalizado',
estreno:'2016-03-20',
finalizacion:'2016-04-24',
generos:['Romance','Comedia'],
tags:['BL','Universidad','Veterinaria','Animales','Club de animales','Fobia a los perros','Amistad'],
personas:[
    {nombre:'Porsche',persona:'PR000563',funcion:['Actor'],principal:true},
    {nombre:'Emma',persona:'PR000564',funcion:['Actor'],principal:true},
    {nombre:'Pick',persona:'PR000177',funcion:['Actor'],principal:true},
    {nombre:'Rome',persona:'PR000513',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000115',personajes:['Porsche','Emma']},
    {ship:'SH000078',personajes:['Pick','Rome']}
],
sinopsis:'Porsche y Pick son estudiantes de cuarto año de veterinaria y forman parte de un club universitario dedicado al cuidado de perros y gatos. Cuando el decano decide cerrar el club, Porsche busca la ayuda de Emma, una estudiante de primer año y sobrina del decano, para evitar que desaparezca. Emma ama a los animales, especialmente a los gatos, pero tiene miedo de los perros. Mientras Porsche intenta ayudarla a superar su fobia, Pick y Rome, el mejor amigo de Emma, comienzan a descubrir que entre ellos existe algo más que amistad.',
multimedia:{
    portada:['https://i.pinimg.com/736x/6b/11/6d/6b116d8256c54c9cb0d7cc7313895888.jpg',
'https://i.pinimg.com/1200x/85/78/19/85781949b2bbc70cd90deff7f09e3215.jpg',
        'https://media.fstatic.com/YYHr9c8rzFzJTQNL6nr-EAW0iMs%3D/322x478/smart/filters%3Aformat%28webp%29/media/movies/covers/2016/04/secret-love-puppy-love_tNone.jpg',
        'https://media.fstatic.com/Br4WL8CFgVydPJ50UKQrcELBGb8%3D/322x478/smart/filters%3Aformat%28webp%29/media/movies/covers/2016/05/secret-love-puppy-honey_t205675.jpg'
    ],
    trailer:[],
    teaser:[
        'https://www.youtube.com/watch?v=9WOCQoyiJC8'
    ],
    pilot:[
        'https://www.youtube.com/watch?v=O8HFbePqinQ'
    ],
    ost:[
        'https://www.youtube.com/watch?v=PQO7PXBvDhA',
        'https://www.youtube.com/watch?v=HBcRC5tMzwA'
    ],
    videos:[
        'https://www.youtube.com/watch?v=S4QT7prMhrA'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000005',funcion:['Productora']},
    {codigo:'EN000014',funcion:['Emisora']},
    {codigo:'EN000022',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================
   SENIOR SECRET LOVE: PUPPY HONEY 2 — DR000096
   ========================================== */
{
codigo:'DR000096',
titulo:'Senior Secret Love: Puppy Honey 2',
tituloOriginal:'รุ่นพี่ Secret Love เรื่อง Puppy Honey 2',
alias:['Puppy Honey 2','Scan Heart Nai Mor Ma'],
tipo:'Drama',
anio:2017,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000095',
temporadas:2,
temporada:2,
episodios:8,
duracion:'45 min',
estado:'Finalizado',
estreno:'2017-03-18',
finalizacion:'2017-05-06',
generos:['Romance','Comedia','Drama'],
tags:['BL','Universidad','Veterinaria','Animales','Relación a distancia','Celos','Triángulo amoroso','Descubrimiento personal'],
personas:[
    {nombre:'Porsche',persona:'PR000563',funcion:['Actor'],principal:true},
    {nombre:'Emma',persona:'PR000564',funcion:['Actor'],principal:true},
    {nombre:'Pick',persona:'PR000177',funcion:['Actor'],principal:true},
    {nombre:'Rome',persona:'PR000513',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000115',personajes:['Porsche','Emma']},
    {ship:'SH000078',personajes:['Pick','Rome']}
],
sinopsis:'Porsche se marcha para realizar unas prácticas de veterinaria lejos del campus, dejando a Emma atrás. La distancia comienza a poner a prueba su relación y provoca inseguridades entre ambos. Al mismo tiempo, Pick y Rome intentan comprender qué sienten realmente el uno por el otro, mientras la aparición de nuevas personas complica todavía más su relación. Entre celos, dudas y decisiones personales, las dos parejas tendrán que enfrentarse a lo que realmente sienten.',
multimedia:{
    portada:['https://i.pinimg.com/736x/77/e7/a0/77e7a00d388475e03e552fc768786b43.jpg',
'https://i.pinimg.com/1200x/85/78/19/85781949b2bbc70cd90deff7f09e3215.jpg',
        'https://media.fstatic.com/4JfihAzguyaqqnHggKUw2_8nS5M%3D/322x478/smart/filters%3Aformat%28webp%29/media/movies/covers/2017/03/secret-love2_gmm.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=PSVqApjgVSk'
    ],
    teaser:[],
    pilot:[
        'https://www.youtube.com/watch?v=5e_1r-7DqJA'
    ],
    ost:[
        'https://www.youtube.com/watch?v=U59mhy4oAJg',
        'https://www.youtube.com/watch?v=5PchmOS55Wo'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000005',funcion:['Productora']},
    {codigo:'EN000014',funcion:['Emisora']},
    {codigo:'EN000022',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================
   THEORY OF LOVE — DR000097
   ========================================== */
{
codigo:'DR000097',
titulo:'Theory of Love',
tituloOriginal:'ทฤษฎีจีบเธอ',
alias:['Theory of Love: ทฤษฎีจีบเธอ'],
tipo:'Drama',
anio:2019,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000097',
temporadas:1,
temporada:1,
episodios:12,
duracion:'48-62 min',
estado:'Finalizado',
estreno:'2019-06-01',
finalizacion:'2019-08-17',
generos:['Romance','Comedia','Drama'],
tags:['BL','Universidad','Cine','Amigos a amantes','Amor no correspondido','Amistad','Triángulo amoroso','Películas'],
personas:[
    {nombre:'Third',persona:'PR000513',funcion:['Actor'],principal:true},
    {nombre:'Khai',persona:'PR000177',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000078',personajes:['Khai','Third']}
],
sinopsis:'Third es un estudiante de tercer año de cine que lleva tres años enamorado en secreto de su mejor amigo Khai. Khai es un chico popular, mujeriego y convencido de que nunca saldría con una amiga o amigo. Cansado de sufrir por un amor que parece imposible, Third decide intentar dejar atrás sus sentimientos. Pero cuando Third empieza a alejarse, Khai comienza a darse cuenta de que lo que siente por su mejor amigo es algo más que amistad.',
multimedia:{
    portada:['https://i.pinimg.com/736x/e7/de/20/e7de202da269cc4e73d8c4d9cbce3050.jpg',
'https://i.pinimg.com/1200x/67/3f/71/673f71735ae7dfc1a5d3e989ba09ffa5.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=UQT1x-4ciI4'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=sJwCwbk3YVw',
        'https://www.youtube.com/watch?v=5m245fHSW5o'
    ],
    videos:[
        'https://www.youtube.com/watch?v=KTFPdhWw5Pc',
        'https://www.youtube.com/watch?v=9zm_x_Fhve4'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000022',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ==========================================
   NOT ME — DR000098
   ========================================== */
{
codigo:'DR000098',
titulo:'Not Me',
tituloOriginal:'เขา...ไม่ใช่ผม',
alias:['Khao... Mai Chai Phom','He... Is Not Me'],
tipo:'Drama',
anio:2021,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000098',
temporadas:1,
temporada:1,
episodios:14,
duracion:'45 min',
estado:'Finalizado',
estreno:'2021-12-12',
finalizacion:'2022-03-20',
generos:['Romance','Acción','Thriller','Misterio','Drama'],
tags:['BL','Gemelos','Identidad oculta','Amistad','Pandilla','Motocicletas','Justicia social','Activismo','Doble identidad','Venganza'],
personas:[
    {nombre:'Sean',persona:'PR000177',funcion:['Actor'],principal:true},
    {nombre:'White',persona:'PR000513',funcion:['Actor'],principal:true},
    {nombre:'Yok',persona:'PR000388',funcion:['Actor'],principal:true},
    {nombre:'Dan',persona:'PR000268',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000078',personajes:['Sean','White']},
    {ship:'SH000116',personajes:['Yok','Dan']}
],
sinopsis:'White regresa a Tailandia después de quince años viviendo en el extranjero y descubre que su hermano gemelo Black ha sido brutalmente golpeado y se encuentra en coma. Al enterarse de que Black formaba parte de una banda de motoristas junto a Sean, Gram y Yok, White decide hacerse pasar por su hermano para descubrir quién lo atacó. Sin embargo, cuanto más tiempo pasa con el grupo, más descubre sobre la verdadera personalidad de Black y sobre las injusticias contra las que luchan sus nuevos compañeros. Sean empieza a sospechar que el comportamiento de Black ha cambiado y, mientras intenta descubrir qué ocurre realmente, ambos terminan desarrollando sentimientos el uno por el otro.',
multimedia:{
    portada:['https://i.pinimg.com/736x/f5/7d/e3/f57de36aa28a02087d267eacbd20caaf.jpg',
'https://i.pinimg.com/736x/9f/20/c0/9f20c046c4eba1c1ab54febd39833a06.jpg',
'https://i.pinimg.com/1200x/bb/2b/39/bb2b39bddf142aabc916cb0fe6f2e8ad.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=Q91hKXjq_3s'
    ],
    teaser:[],
    pilot:[
        'https://www.youtube.com/watch?v=BtAKkC7wIHc'
    ],
    ost:[
        'https://www.youtube.com/watch?v=d5rGW310K-I',
        'https://www.youtube.com/watch?v=JQm5-fmo_xg'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000054',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ==========================================
   COOKING CRUSH — DR000099
   ========================================== */
{
codigo:'DR000099',
titulo:'Cooking Crush',
tituloOriginal:'อาหารเป็นยังไงครับหมอ',
alias:['Cooking Crush: What’s Zabb?','Ahan Pen Yang Ngai Khrap Mor'],
tipo:'Drama',
anio:2023,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000099',
temporadas:1,
temporada:1,
episodios:12,
duracion:'45-53 min',
estado:'Finalizado',
estreno:'2023-11-26',
finalizacion:'2024-02-18',
generos:['Romance','Comedia'],
tags:['BL','Cocina','Medicina','Universidad','Restaurante','Amigos a amantes','Chef','Estudiante de medicina'],
personas:[
    {nombre:'Ten',persona:'PR000177',funcion:['Actor'],principal:true},
    {nombre:'Prem',persona:'PR000513',funcion:['Actor'],principal:true},
    {nombre:'Fire',persona:'PR000294',funcion:['Actor'],principal:false},
    {nombre:'Dynamite',persona:'PR000565',funcion:['Actor'],principal:false}
],
ships:[
    {ship:'SH000078',personajes:['Ten','Prem']},
    {ship:'SH000117',personajes:['Fire','Dynamite']}
],
sinopsis:'Prem es un estudiante de tercer año que sueña con convertirse en chef y dirige un pequeño restaurante junto a sus amigos Fire y Dynamite. Cuando pierde la confianza en su cocina, conoce a Ten, un estudiante de medicina que está constantemente estresado y tiene problemas para comer. Ten le pide a Prem que le enseñe a cocinar y Prem aprovecha la oportunidad para ganar dinero. Lo que comienza como unas simples clases de cocina acaba acercándolos cada vez más, mientras Fire y Dynamite también desarrollan su propia relación.',
multimedia:{
    portada:['https://i.pinimg.com/736x/94/9f/aa/949faae66af2384bcec4b00e7b904936.jpg',
'https://i.pinimg.com/736x/fe/8b/3a/fe8b3ab0550f88aed960a9e5bf862680.jpg',
'https://i.pinimg.com/1200x/af/f3/27/aff327d0433b7ee64a71e300c0da7c3c.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=8YMAN'
    ],
    teaser:[],
    pilot:[
        'https://www.youtube.com/watch?v=EDabs7Cc_yA'
    ],
    ost:[
        'https://www.youtube.com/watch?v=VGYKFKL_doU',
        'https://www.youtube.com/watch?v=EG3UDbCpYwY'
    ],
    videos:[
        'https://www.youtube.com/watch?v=KFojlKegciE',
        'https://www.youtube.com/watch?v=i3Ufp7ZspGg'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000029',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ==========================================
   THE TRAINEE — DR000100
   ========================================== */
{
codigo:'DR000100',
titulo:'The Trainee',
tituloOriginal:'ฝึกงานเทอมนี้ รักพี่ได้มั้ย',
alias:['Fuek Ngan Term Ni Rak Phi Dai Mai','This Semester’s Internship, Can I Love You?'],
tipo:'Drama',
anio:2024,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000100',
temporadas:1,
temporada:1,
episodios:12,
duracion:'45 min',
estado:'Finalizado',
estreno:'2024-06-30',
finalizacion:'2024-09-15',
generos:['Romance','Comedia','Drama'],
tags:['BL','Prácticas profesionales','Cine','Productora audiovisual','Universidad','Oficina','Diferencia de edad','Mentor y aprendiz','Amigos a amantes'],
personas:[
    {nombre:'Jane',persona:'PR000177',funcion:['Actor'],principal:true},
    {nombre:'Ryan',persona:'PR000513',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000078',personajes:['Jane','Ryan']}
],
sinopsis:'Ryan es un estudiante universitario apasionado por el cine que consigue unas prácticas como asistente de dirección en una productora. Allí conoce a Jane, un asistente de dirección experimentado que se convierte en su supervisor y mentor. Lo que al principio parece una relación complicada entre un becario entusiasta y un mentor exigente empieza a cambiar cuando Ryan descubre el lado más amable de Jane. Mientras Ryan intenta aprender todo lo necesario para desenvolverse en el mundo laboral, sus sentimientos por Jane también comienzan a crecer.',
multimedia:{
    portada:['https://i.pinimg.com/736x/97/94/73/979473b3256846206709881e06e96d1d.jpg',
'https://i.pinimg.com/736x/8c/5c/bd/8c5cbd406b748c2014a963259543668d.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=nSVsbgeZ_tc'
    ],
    teaser:[],
    pilot:[
        'https://www.youtube.com/watch?v=a4QnzSdBgRg'
    ],
    ost:[
        'https://www.youtube.com/watch?v=zaXe5'
    ],
    videos:[
        'https://www.gmm-tv.com/contents/z7bjj/'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000055',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================
   BURNOUT SYNDROME — DR000101
   ========================================== */
{
codigo:'DR000101',
titulo:'Burnout Syndrome',
tituloOriginal:'ภาวะรักคนหมดไฟ',
alias:['Phawa Rak Khon Mot Fai'],
tipo:'Drama',
anio:2025,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000101',
temporadas:1,
temporada:1,
episodios:10,
duracion:'48 min',
estado:'Finalizado',
estreno:'2025-11-26',
finalizacion:'2026-02-04',
generos:['Romance','Drama'],
tags:['BL','Triángulo amoroso','Arte','Trabajo','Burnout','Desigualdad social','Jefe y empleado','Artista','Identidad','Deseo'],
personas:[
    {nombre:'Koh',persona:'PR000177',funcion:['Actor'],principal:true},
    {nombre:'Jira',persona:'PR000513',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000078',personajes:['Koh','Jira']}
],
sinopsis:'Koh es un hombre de negocios que conoce a Jira, un artista que atraviesa una etapa complicada y trabaja para salir adelante. Intrigado por su personalidad y por la inspiración que encuentra en él, Koh contrata a Jira para que lo utilice como modelo para sus obras. Lo que comienza como una relación profesional entre cliente y artista se transforma poco a poco en una relación marcada por la atracción, los sentimientos y los conflictos personales. Mientras tanto, Pheem, amigo cercano de Jira, también se encuentra atrapado en sus propios sentimientos, haciendo que la relación entre los tres se vuelva cada vez más complicada.',
multimedia:{
    portada:['https://i.pinimg.com/736x/57/75/78/57757813d32bfa63a883865cfbdaeb00.jpg',
'https://i.pinimg.com/1200x/f8/7b/73/f87b737534f888b77beccbed18e2b18d.jpg',
'https://i.pinimg.com/736x/a6/47/50/a647500843610acea3287f9ca7c306d0.jpg'],
    trailer:[
        'https://www.youtube.com/watch?v=iqtE21HQ-KU'
    ],
    teaser:[
        'https://www.youtube.com/watch?v=weYZQ40m5mY'
    ],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=q1KLb1H7Zr8',
        'https://www.youtube.com/watch?v=xnI_vtKkTvc'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000007',funcion:['Productora']},
    {codigo:'EN000056',funcion:['Productora']},
    {codigo:'EN000006',funcion:['Emisora']},
    {codigo:'EN000024',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ==========================================
   GUNSHOT — DR000102
   ========================================== */
{
codigo:'DR000102',
titulo:'Gunshot',
tituloOriginal:'ผมหลงรักฆาตกร',
alias:['Phom Long Rak Khatakon'],
tipo:'Drama',
anio:2026,
pais:'TH',
idioma:'th',
franquicia:'',
universo:'',
serie:'SR000102',
temporadas:1,
temporada:1,
episodios:'',
duracion:'',
estado:'Próximo estreno',
estreno:'',
finalizacion:'',
generos:['Romance','Acción','Thriller','Misterio','Drama'],
tags:['BL','Policía','Asesino','Venganza','Crimen','Investigación','Trauma','Pasado','Identidad','Amor prohibido'],
personas:[
    {nombre:'Kongpon',persona:'PR000177',funcion:['Actor'],principal:true},
    {nombre:'Mini',persona:'PR000513',funcion:['Actor'],principal:true}
],
ships:[
    {ship:'SH000078',personajes:['Kongpon','Mini']}
],
sinopsis:'Kongpon es un policía que se encuentra con Mini, un joven marcado por un pasado doloroso y consumido por el deseo de vengarse de quienes le hicieron daño. Mientras Kongpon intenta comprenderlo y ayudarlo a superar sus heridas, Mini continúa atrapado en un camino de violencia y venganza. La relación entre ambos se desarrolla en medio de una investigación criminal y de los secretos que rodean el pasado de Mini.',
multimedia:{
    portada:['https://i.pinimg.com/736x/d2/94/57/d2945703700e8a331c6ac74380cc851d.jpg'],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[
        'https://www.youtube.com/watch?v=pT8es0G-oH4',
        'https://www.youtube.com/watch?v=-iZMjFWGzSg'
    ]
},
entidades:[
    {codigo:'EN000004',funcion:['Productora']},
    {codigo:'EN000007',funcion:['Productora']}
],
especiales:[],
activo:true
},

	/* ==========================================
   WHERE YOUR EYES LINGER — DR000103
   ========================================== */
{
codigo:'DR000103',
titulo:'Where Your Eyes Linger',
tituloOriginal:'너의 시선이 머무는 곳에',
alias:[
    'Neoeui Siseoni Meomuneun Gose',
    'The Place Where Your Gaze Rests',
    'Before Your Eyes Stop',
    'Beyond Your Line of Sight'
],
tipo:'Drama',
anio:2020,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000103',
temporadas:1,
temporada:1,
episodios:8,
duracion:'10 min',
estado:'Finalizado',
estreno:'2020-05-22',
finalizacion:'2020-06-12',
generos:[
    'Drama',
    'Romance',
    'Melodrama',
    'Juventud'
],
tags:[
    'BL',
    'Instituto',
    'Chaebol',
    'Guardaespaldas',
    'Amigos de infancia',
    'Amor secreto',
    'Familia',
    'Artes marciales'
],
personas:[
    {nombre:'Han Tae-joo',persona:'PR000567',funcion:['Actor'],principal:true},
    {nombre:'Kang-gook',persona:'PR000568',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Han Tae-joo','Kang-gook']}
],
sinopsis:'Han Tae-joo es el único heredero de TB Group y vive bajo la estricta vigilancia de su familia. Su mejor amigo de la infancia, Kang-gook, es también su guardaespaldas y permanece siempre a su lado. Cuando una nueva compañera de clase comienza a acercarse a Kang-gook, los sentimientos que ambos habían mantenido ocultos empiezan a salir a la superficie y su relación deja de parecer una simple amistad.',
multimedia:{
    portada:['https://i.pinimg.com/736x/40/f3/d2/40f3d2c1535fd13a38c0929f796c3506.jpg',
'https://i.pinimg.com/736x/f4/db/64/f4db64b75323543809e6daedaa60b6c3.jpg',
        'https://pimg.1px.tw/pink03049/1589087541-3219822327.jpg'
    ],
    trailer:[
        'https://www.viki.com/videos/1166381v'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=DAkkbcKfwaU',
        'https://www.youtube.com/watch?v=t_b61QULfTA',
        'https://www.youtube.com/watch?v=Y0_urZWQJ5Q'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000057',funcion:['Productora']},
    {codigo:'EN000058',funcion:['Productora']},
    {codigo:'EN000028',funcion:['Plataforma']},
    {codigo:'EN000029',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ==========================================
   MR. HEART — DR000104
   ========================================== */
{
codigo:'DR000104',
titulo:'Mr. Heart',
tituloOriginal:'Mr. 하트',
alias:[
    'Mr. Heart',
    'Mr.하트'
],
tipo:'Drama',
anio:2020,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000104',
temporadas:1,
temporada:1,
episodios:8,
duracion:'10 min',
estado:'Finalizado',
estreno:'2020-09-18',
finalizacion:'2020-10-02',
generos:[
    'Drama',
    'Romance',
    'Deportes',
    'Juventud'
],
tags:[
    'BL',
    'Instituto',
    'Atletismo',
    'Maratón',
    'Entrenamiento',
    'Competición',
    'Deporte',
    'Entrenador'
],
personas:[
    {nombre:'Go Sang-ha',persona:'PR000569',funcion:['Actor'],principal:true},
    {nombre:'Jin Won',persona:'PR000570',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Go Sang-ha','Jin Won']}
],
sinopsis:'Jin Won es una joven promesa del maratón que concentra toda su atención en mejorar como corredor. Para ayudarle a mantener el ritmo durante sus entrenamientos, su entrenador le asigna a Go Sang-ha como liebre. La cercanía entre ambos hace que Sang-ha desarrolle sentimientos por Jin Won mientras los dos afrontan juntos las exigencias del deporte y sus propias inseguridades.',
multimedia:{
    portada:['https://i.pinimg.com/736x/9c/85/13/9c85136ddb53c9074be9f521f9d16c2d.jpg',
        'https://bancodeseries.tv.br/images/posters/20563.jpg'
    ],
    trailer:[
        'https://www.viki.com/videos/1172045v'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=WE_TYBBMUvQ'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000057',funcion:['Productora']},
    {codigo:'EN000059',funcion:['Productora']},
    {codigo:'EN000028',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================
   WISH YOU: YOUR MELODY FROM MY HEART — DR000105
   ========================================== */
{
codigo:'DR000105',
titulo:'Wish You: Your Melody from My Heart',
tituloOriginal:'나의 마음속 너의 멜로디',
alias:[
    'Wish You',
    'Wish You: Your Melody in My Heart',
    'Naui Maeumsok Neoui Mellodi'
],
tipo:'Drama',
anio:2020,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000105',
temporadas:1,
temporada:1,
episodios:8,
duracion:'10 min',
estado:'Finalizado',
estreno:'2020-12-04',
finalizacion:'2020-12-25',
generos:[
    'Drama',
    'Romance',
    'Música',
    'Juventud'
],
tags:[
    'BL',
    'Música',
    'Cantante',
    'Músico',
    'Cantautor',
    'Discográfica',
    'Convivencia',
    'Amor',
    'Sueños'
],
personas:[
    {nombre:'Kang In-soo',persona:'PR000571',funcion:['Actor'],principal:true},
    {nombre:'Yoon Sang-yi',persona:'PR000572',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Kang In-soo','Yoon Sang-yi']}
],
sinopsis:'Kang In-soo es un cantante callejero que sueña con convertir su pasión por la música en una carrera profesional. Sus actuaciones llaman la atención de Yoon Sang-yi, un teclista que trabaja para una importante compañía discográfica. Cuando Sang-yi decide ayudarle a entrar en un proyecto para nuevos artistas, ambos comienzan a acercarse mientras intentan compaginar sus sentimientos con las exigencias de la industria musical.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/dc/70/04/dc70041942b9423fd2d4157be3ecef6d.jpg',	
'https://i.pinimg.com/736x/cd/29/7a/cd297a9c19e98a9e530baa1d3164557e.jpg',
        'https://resize-image.vocus.cc/resize?norotation=true&quality=80&sign=twVTqrfh3YV16-IOQ8jrqR-IDnLjlJBQJRrwixSs2V8&url=https%3A%2F%2Fimages.vocus.cc%2F60ae0d16-0813-4be6-8bfe-abfbbef4125e.jpg&width=740'
    ],
    trailer:['https://www.viki.com/videos/1175155v',
        'https://www.youtube.com/watch?v=4orkIeDUvLA'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://youtu.be/-tUdu_7DATM',
        'https://youtu.be/wISW-M7xMhM',
        'https://youtu.be/oIf_af0XOmw',
        'https://youtu.be/5HY4XAnpoqc'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000060',funcion:['Productora']},
    {codigo:'EN000061',funcion:['Productora']},
    {codigo:'EN000062',funcion:['Distribuidora','Plataforma']},
    {codigo:'EN000028',funcion:['Plataforma']},
    {codigo:'EN000029',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ==========================================
   COLOR RUSH — DR000106
   ========================================== */
{
codigo:'DR000106',
titulo:'Color Rush',
tituloOriginal:'컬러 러쉬',
alias:[
    'Color Rush',
    'Keoleo Reoswi'
],
tipo:'Drama',
anio:2020,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000106',
temporadas:2,
temporada:1,
episodios:8,
duracion:'15 min',
estado:'Finalizado',
estreno:'2020-12-30',
finalizacion:'2021-01-21',
generos:[
    'Drama',
    'Romance',
    'Misterio',
    'Fantasía',
    'Juventud'
],
tags:[
    'BL',
    'Instituto',
    'Mono',
    'Probe',
    'Daltonismo',
    'Colores',
    'Desaparición',
    'Investigación',
    'Sobrenatural',
    'Destino'
],
personas:[
    {nombre:'Choi Yeon-woo',persona:'PR000573',funcion:['Actor'],principal:true},
    {nombre:'Go Yoo-han',persona:'PR000574',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Choi Yeon-woo','Go Yoo-han']}
],
sinopsis:'Choi Yeon-woo es un mono, una persona que percibe el mundo únicamente en tonos grises debido a una alteración neurológica. Todo cambia cuando conoce a Go Yoo-han, su probe, cuya presencia provoca en él el fenómeno conocido como color rush y le permite experimentar los colores por primera vez. Mientras intenta comprender esta conexión, Yeon-woo también continúa buscando respuestas sobre la desaparición de su madre.',
multimedia:{
    portada:['https://i.pinimg.com/1200x/2e/61/09/2e6109ea1b0035b850774a8f9489035f.jpg',
'https://i.pinimg.com/1200x/12/09/e6/1209e6013722704661810491a68bc72b.jpg',
'https://i.pinimg.com/736x/9e/01/ca/9e01caeccc733e23d9b7a8301e63d0b3.jpg',
        'https://images.justwatch.com/poster/333489955/s718/color-rush.jpg'
    ],
    trailer:[
        'https://www.viki.com/videos/1176447v'
    ],
    teaser:[],
    pilot:[],
    ost:[
        'https://www.youtube.com/watch?v=tPBPO0nOitk'
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000063',funcion:['Productora']},
    {codigo:'EN000064',funcion:['Productora']},
    {codigo:'EN000028',funcion:['Plataforma']},
    {codigo:'EN000022',funcion:['Plataforma']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},

	/* ==========================================  COLOR RUSH 2 — DR000107   ========================================== */
{
codigo:'DR000107',
titulo:'Color Rush 2',
tituloOriginal:'컬러 러쉬 2',
alias:[
    'Color Rush 2',
    'Colour Rush 2'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000106',
temporadas:2,
temporada:2,
episodios:8,
duracion:'15 min',
estado:'Finalizado',
estreno:'2022-01-21',
finalizacion:'2022-01-21',
generos:[
    'Drama',
    'Romance',
    'Misterio',
    'Fantasía',
    'Thriller',
    'Juventud'
],
tags:[
    'BL',
    'Instituto',
    'Mono',
    'Probe',
    'Daltonismo',
    'Colores',
    'Desaparición',
    'Investigación',
    'Sobrenatural',
    'Identidad secreta',
    'Secretos',
    'Búsqueda'
],
personas:[
    {nombre:'Choi Yeon-woo',persona:'PR000573',funcion:['Actor'],principal:true},
    {nombre:'Go Yoo-han',persona:'PR000574',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Choi Yeon-woo','Go Yoo-han']}
],
sinopsis:'Después de la desaparición de Go Yoo-han y de su madre, Choi Yeon-woo vuelve a enfrentarse a un mundo sin colores mientras intenta descubrir la verdad. En su búsqueda conoce a Kim Se-hyun, un compañero que decide ayudarle y protegerlo. Al mismo tiempo, Yeon-woo descubre que existen más monos y que el fenómeno que relaciona a los monos con sus probes esconde secretos que van mucho más allá de su propia experiencia.',
multimedia:{
    portada:['https://i.pinimg.com/736x/49/c3/7a/49c37abb7b5e46ddd6de2587ad03ba8a.jpg',
'https://i.pinimg.com/1200x/e2/d5/0f/e2d50f83a4b4773d386765f5773d76f5.jpg',
        'https://image.kpopmap.com/2021/11/Color-rush-season-2-2022-scaled.jpg'
    ],
    trailer:[
        'https://www.viki.com/videos/1191353v'
    ],
    teaser:[],
    pilot:[],
    ost:[
       /* 'https://www.youtube.com/watch?v=ZdhwfHsucrY',
        'https://www.youtube.com/watch?v=i7nvTQpJJn0'*/
    ],
    videos:[]
},
entidades:[
    {codigo:'EN000063',funcion:['Productora']},
    {codigo:'EN000065',funcion:['Productora']},
    {codigo:'EN000028',funcion:['Plataforma']},
    {codigo:'EN000022',funcion:['Plataforma']},
    {codigo:'EN000031',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
		/* ==========================================  To My Star — DR000108   ========================================== */
	{
codigo:'DR000108',
titulo:'To My Star',
tituloOriginal:'나의 별에게',
alias:[
    'To My Star',
    'Naui Byeolege'
],
tipo:'Drama',
anio:2021,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000108',
temporadas:2,
temporada:1,
episodios:9,
duracion:'12-15 min',
estado:'Finalizado',
estreno:'2021-01-22',
finalizacion:'2021-02-05',
generos:['Drama','Romance','Comedia','Juventud'],
tags:['BL','Cocina','Actor','Chef','Convivencia','Enemies to lovers','Celebridad','Vida cotidiana'],
personas:[
    {nombre:'Kang Seo Joon',persona:'PR000575',funcion:['Actor'],principal:true},
    {nombre:'Han Ji Woo',persona:'PR000576',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Kang Seo Joon','Han Ji Woo']}
],
sinopsis:'Kang Seo Joon, un famoso actor en la cima de su carrera, se ve obligado a esconderse temporalmente de la prensa y termina compartiendo casa con Han Ji Woo, un chef reservado y de carácter difícil. La convivencia entre ambos comienza con constantes choques, pero poco a poco la distancia entre ellos se transforma en una relación más íntima.',
multimedia:{
    portada:[
        'https://i.pinimg.com/1200x/20/7d/f8/207df8bfc181a9bd7cfeabc7380f2a6a.jpg',
        'https://i.pinimg.com/1200x/c9/cd/7a/c9cd7a18eeb21ebc2b59b1cf20fbaea3.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=Pw7YwEFdJpQ'
    ],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[
    {codigo:'EN000058',funcion:['Productora']},
    {codigo:'EN000066',funcion:['Productora']},
    {codigo:'EN000028',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
			/* ==========================================  You Make Me Dance — DR000109   ========================================== */
	{
codigo:'DR000109',
titulo:'You Make Me Dance',
tituloOriginal:'유 메이크 미 댄스',
alias:[
    'You Make Me Dance',
    'Yoo Meikeu Mi Daenseu'
],
tipo:'Drama',
anio:2021,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000109',
temporadas:1,
temporada:1,
episodios:8,
duracion:'15 min',
estado:'Finalizado',
estreno:'2021-02-26',
finalizacion:'2021-03-19',
generos:['Drama','Romance','Juventud'],
tags:['BL','Danza','Ballet','Estudiante','Tutor','Familia','Sueños','Convivencia'],
personas:[
    {nombre:'Song Shi On',persona:'PR000577',funcion:['Actor'],principal:true},
    {nombre:'Jin Hong Seok',persona:'PR000578',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Song Shi On','Jin Hong Seok']}
],
sinopsis:'Song Shi On es un estudiante de danza que lucha por mantener vivo su sueño de convertirse en bailarín profesional mientras afronta problemas económicos y familiares. Jin Hong Seok, un cobrador de deudas que ha abandonado sus propios sueños, entra inesperadamente en su vida y ambos comienzan a cambiar la forma en que entienden el amor y sus propias aspiraciones.',
multimedia:{
    portada:[
        'https://i.pinimg.com/1200x/29/63/1d/29631dbb91d50492bd4d3080ab1f343c.jpg',
        'https://i.pinimg.com/1200x/c0/07/60/c007601bf09e057f7ee9dadd90f4b3bf.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=yj8f5GyQFA8'
    ],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[
        'https://www.youtube.com/watch?v=eLZqxmzPWzc'
    ]
},
entidades:[
    {codigo:'EN000057',funcion:['Productora']},
    {codigo:'EN000068',funcion:['Productora']},
    {codigo:'EN000059',funcion:['Productora']},
    {codigo:'EN000028',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
			/* ==========================================  Nobleman Ryu's Wedding — DR000110   ========================================== */
	{
codigo:'DR000110',
titulo:"Nobleman Ryu's Wedding",
tituloOriginal:'류선비의 혼례식',
alias:[
    "Nobleman Ryu's Wedding",
    'Ryu Seonbiui Honryesik'
],
tipo:'Drama',
anio:2021,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000110',
temporadas:1,
temporada:1,
episodios:8,
duracion:'9-13 min',
estado:'Finalizado',
estreno:'2021-04-15',
finalizacion:'2021-05-06',
generos:['Romance','Comedia','Drama','Histórico'],
tags:['BL','Joseon','Matrimonio','Identidad secreta','Travestismo','Familia','Política','Amor prohibido'],
personas:[
    {nombre:'Ryu Ho Sun',persona:'PR000571',funcion:['Actor'],principal:true},
    {nombre:'Choi Ki Wan',persona:'PR000569',funcion:['Actor'],principal:true},
    {nombre:'Kim Tae Hyung',persona:'PR000568',funcion:['Actor'],principal:false}
],
ships:[
    {personajes:['Ryu Ho Sun','Choi Ki Wan']}
],
sinopsis:'El día de su boda, la prometida de Ryu Ho Sun desaparece porque se niega a aceptar un matrimonio concertado. Su hermano Choi Ki Wan decide ocupar su lugar temporalmente para evitar las consecuencias políticas y familiares. Lo que comienza como un matrimonio de conveniencia se transforma poco a poco en una relación inesperada, mientras Kim Tae Hyung también desarrolla sentimientos por Ki Wan.',
multimedia:{
    portada:[
        'https://i.pinimg.com/1200x/43/76/c4/4376c4169b97643aaf5ee4dc0e6dd1d4.jpg',
        'https://i.pinimg.com/1200x/4d/09/28/4d0928afd462b07f05d3019bc255a180.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=gKhhN0cXdgY'
    ],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[
    {codigo:'EN000060',funcion:['Productora']},
    {codigo:'EN000061',funcion:['Productora']},
    {codigo:'EN000062',funcion:['Distribuidora','Plataforma']},
    {codigo:'EN000022',funcion:['Plataforma']},
    {codigo:'EN000029',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
		/* ==========================================  Light on Me — DR000111   ========================================== */
	{
codigo:'DR000111',
titulo:'Light on Me',
tituloOriginal:'새빛남고 학생회',
alias:[
    'Light on Me',
    'Saebit Boys High School Council',
    'Saebitnamgo Haksaenghoe'
],
tipo:'Drama',
anio:2021,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000111',
temporadas:2,
temporada:1,
episodios:16,
duracion:'19 min',
estado:'Finalizado',
estreno:'2021-06-29',
finalizacion:'2021-08-19',
generos:['Drama','Romance','Comedia','Juventud'],
tags:['BL','Instituto','Consejo estudiantil','Triángulo amoroso','Amistad','Primer amor','Competición'],
personas:[
    {nombre:'Woo Tae Kyung',persona:'PR000579',funcion:['Actor'],principal:true},
    {nombre:'Noh Shin Woo',persona:'PR000580',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Woo Tae Kyung','Noh Shin Woo']}
],
sinopsis:'Woo Tae Kyung es un estudiante de secundaria que siempre ha tenido dificultades para hacer amigos. Al entrar en el consejo estudiantil de Saebit High School conoce a Noh Shin Woo, Shin Da On y Nam Gung On. Las nuevas amistades y los sentimientos que surgen dentro del grupo hacen que Tae Kyung descubra poco a poco qué significa enamorarse.',
multimedia:{
    portada:[
        'https://i.pinimg.com/1200x/6b/86/d2/6b86d2a3fd641a68d3944a492913ca94.jpg',
        'https://i.pinimg.com/1200x/5d/85/9d/5d859d7a470e5ba5c02d34eed330bc3f.jpg',
        'https://i.pinimg.com/736x/dd/97/32/dd97322fb3abf7f9d8957dec21cdc24d.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=Hr1seS7XmgI'
    ],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[
    {codigo:'EN000071',funcion:['Productora']},
    {codigo:'EN000028',funcion:['Plataforma']},
    {codigo:'EN000029',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
/* ==========================================  Peach of Time — DR000112   ========================================== */
	{
codigo:'DR000112',
titulo:'Peach of Time',
tituloOriginal:'피치 오브 타임',
alias:[
    'Peach of Time',
    'Peach of Time: Siganui Bogeun'
],
tipo:'Drama',
anio:2021,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000112',
temporadas:1,
temporada:1,
episodios:10,
duracion:'20-30 min',
estado:'Finalizado',
estreno:'2021-08-30',
finalizacion:'2021-09-27',
generos:['Drama','Romance','Fantasía','Melodrama'],
tags:['BL','Fantasma','Amistad','Familia','Tailandia','Corea del Sur','Vida después de la muerte','Secreto'],
personas:[
    {nombre:'Peach',persona:'PR000312',funcion:['Actor'],principal:true},
    {nombre:'Yoon Oh',persona:'PR000581',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Peach','Yoon Oh']}
],
sinopsis:'Peach, un joven tailandés, viaja a Corea del Sur para visitar a su amigo Yoon Oh. Sin embargo, descubre que Yoon Oh ha muerto y que su espíritu permanece ligado a este mundo por un motivo que Peach todavía desconoce. Mientras intenta ayudarle a resolver sus asuntos pendientes, ambos se enfrentan a sentimientos que habían permanecido ocultos.',
multimedia:{
    portada:[
        'https://i.pinimg.com/1200x/f5/ae/54/f5ae542e72c25b46fe9cd90b44cfff8f.jpg',
        'https://i.pinimg.com/736x/88/1b/a6/881ba67882bebe64ac32b595160a0f44.jpg',
        'https://i.pinimg.com/1200x/42/a4/3c/42a43c2e08361e5e3fd46eed72e35148.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=K72GelOnZw0'
    ],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[
    {codigo:'EN000072',funcion:['Productora']},
    {codigo:'EN000073',funcion:['Productora']},
    {codigo:'EN000074',funcion:['Distribuidora']},
    {codigo:'EN000029',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================  The Tasty Florida — DR000113   ========================================== */
	{
codigo:'DR000113',
titulo:'The Tasty Florida',
tituloOriginal:'플로리다반점',
alias:[
    'The Tasty Florida',
    'Florida Banjeom'
],
tipo:'Drama',
anio:2021,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000113',
temporadas:1,
temporada:1,
episodios:8,
duracion:'10-12 min',
estado:'Finalizado',
estreno:'2021-09-24',
finalizacion:'2021-10-15',
generos:['Romance','Comedia','Juventud'],
tags:['BL','Universidad','Restaurante','Cocina','Casa de huéspedes','Primer amor'],
personas:[
    {nombre:'Seo Hae Won',persona:'PR000582',funcion:['Actor'],principal:true},
    {nombre:'Baek Eun Gyu',persona:'PR000583',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Seo Hae Won','Baek Eun Gyu']}
],
sinopsis:'Seo Hae Won es un estudiante universitario de primer año que se muda a una casa de huéspedes. En la azotea descubre Florida Banjeom, un restaurante chino atendido por varios jóvenes. Allí conoce a Baek Eun Gyu y comienza una relación que transforma su vida universitaria.',
multimedia:{
    portada:[
        'https://i.pinimg.com/736x/c3/b3/77/c3b3771f65cac320bb7a1f95fc8e56e6.jpg',
        'https://i.pinimg.com/1200x/23/a1/b5/23a1b54634484d48e6582c54cbbc96f6.jpg'
    ],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:['https://www.youtube.com/watch?v=',
        'https://www.youtube.com/watch?v='],
    videos:[]
},

entidades:[
    {codigo:'EN000061',funcion:['Productora']},
    {codigo:'EN000060',funcion:['Productora']},
    {codigo:'EN000062',funcion:['Distribuidora','Plataforma']},
    {codigo:'EN000022',funcion:['Plataforma']},
    {codigo:'EN000028',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================  My Sweet Dear — DR000114   ========================================== */
	{
codigo:'DR000114',
titulo:'My Sweet Dear',
tituloOriginal:'마이 스윗 디어',
alias:[
    'My Sweet Dear',
    'Mai Seuwit Dieo'
],
tipo:'Drama',
anio:2021,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000114',
temporadas:1,
temporada:1,
episodios:8,
duracion:'13 min',
estado:'Finalizado',
estreno:'2021-10-21',
finalizacion:'2021-11-11',
generos:['Drama','Romance','Comedia'],
tags:['BL','Cocina','Chef','Restaurante','Enemies to lovers','Rivalidad','Trabajo'],
personas:[
    {nombre:'Yoon Do Gun',persona:'PR000584',funcion:['Actor'],principal:true},
    {nombre:'Choi Jung Woo',persona:'PR000568',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Yoon Do Gun','Choi Jung Woo']}
],
sinopsis:'Yoon Do Gun es el chef principal de Laura Dining, un restaurante de prestigio. Su forma creativa de entender la cocina choca con la visión comercial de la propietaria, que contrata a Choi Jung Woo, un chef talentoso especializado en reproducir recetas de éxito. La rivalidad entre ambos acaba transformándose en una relación mucho más personal.',
multimedia:{
    portada:[
        'https://i.pinimg.com/736x/9f/c9/76/9fc976c29920a66a8b6c72a78b2a009f.jpg',
        'https://i.pinimg.com/736x/ed/0a/45/ed0a45a775489ded5350056f30a250ec.jpg',
        'https://i.pinimg.com/736x/71/38/9c/71389cac8015a364c307b6910f98aacb.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=O4G5I_J-jy8'
    ],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[
    {codigo:'EN000028',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================  Tinted With You — DR000115   ========================================== */
	{
codigo:'DR000115',
titulo:'Tinted With You',
tituloOriginal:'물들여',
alias:[
    'Tinted With You',
    'Muldeulyeo'
],
tipo:'Drama',
anio:2021,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000115',
temporadas:1,
temporada:1,
episodios:8,
duracion:'12-15 min',
estado:'Finalizado',
estreno:'2021-12-23',
finalizacion:'2022-01-14',
generos:['Drama','Romance','Fantasía','Histórico'],
tags:['BL','Viaje en el tiempo','Joseon','Príncipe heredero','Pintura','Guardaespaldas','Destino','Amor prohibido'],
personas:[
    {nombre:'Eun Ho',persona:'PR000585',funcion:['Actor'],principal:true},
    {nombre:'Lee Heon',persona:'PR000586',funcion:['Actor'],principal:true},
    {nombre:'Geum',persona:'PR000027',funcion:['Actor'],principal:false}
],
ships:[
    {personajes:['Eun Ho','Lee Heon']}
],
sinopsis:'Eun Ho, un estudiante de arte de la época actual, descubre un cuadro que lo transporta a la Corea de la era Joseon. Allí conoce a Lee Heon, un príncipe heredero destronado que vive bajo la amenaza de sus enemigos. Mientras Eun Ho intenta encontrar el camino de regreso a su época, ambos desarrollan sentimientos que ponen sus vidas en peligro.',
multimedia:{
    portada:[
        'https://i.pinimg.com/736x/d0/81/07/d0810743603c042064da1ee4f6b87d31.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=fWVNI2u1tQk'
    ],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[
    {codigo:'EN000061',funcion:['Productora']},
    {codigo:'EN000062',funcion:['Distribuidora','Plataforma']},
    {codigo:'EN000028',funcion:['Plataforma']},
    {codigo:'EN000076',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================  Behind Cut — DR000116   ========================================== */
	{
codigo:'DR000116',
titulo:'Behind Cut',
tituloOriginal:'비하인드 컷',
alias:[
    'Behind Cut',
    'Bihindeu Keot'
],
tipo:'Drama',
anio:2021,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000116',
temporadas:1,
temporada:1,
episodios:8,
duracion:'15 min',
estado:'Finalizado',
estreno:'2021-12-28',
finalizacion:'2022-01-19',
generos:['Drama','Romance','Juventud'],
tags:['BL','Moda','Fotografía','Diseño','Amistad','Amor no correspondido','Trabajo'],
personas:[
    {nombre:'Ki Jin',persona:'PR000587',funcion:['Actor'],principal:true},
    {nombre:'Yeong Woo',persona:'PR000588',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Ki Jin','Yeong Woo']}
],
sinopsis:'Ki Jin es un joven diseñador de moda que intenta abrirse camino mientras compagina su trabajo con sus sueños. Su vida cambia cuando conoce a Yeong Woo, un fotógrafo con quien desarrolla una relación que le obliga a enfrentarse a sus inseguridades y a las decisiones que ha tomado para alcanzar sus objetivos.',
multimedia:{
    portada:[
        'https://i.pinimg.com/1200x/0b/e0/23/0be02329339a1da0e572f208c5610859.jpg'
    ],
    trailer:[
        'https://www.youtube.com/watch?v=1jYZ9RlS3VM'
    ],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[
    {codigo:'EN000060',funcion:['Productora']},
    {codigo:'EN000075',funcion:['Productora']},
    {codigo:'EN000028',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================  To My Star 2 — DR000117   ========================================== */
	{
codigo:'DR000117',
titulo:'To My Star 2',
tituloOriginal:'나의 별에게2 : 우리의 못다 한 이야기',
alias:[
    'To My Star 2',
    'To My Star 2: Our Untold Stories',
    'Naui Byeolege 2'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000108',
temporadas:2,
temporada:2,
episodios:10,
duracion:'25-40 min',
estado:'Finalizado',
estreno:'2022-06-05',
finalizacion:'2022-07-03',
generos:['Drama','Romance','Melodrama'],
tags:['BL','Convivencia','Ruptura','Reencuentro','Chef','Actor','Segunda oportunidad','Vida rural'],
personas:[
    {nombre:'Kang Seo Joon',persona:'PR000575',funcion:['Actor'],principal:true},
    {nombre:'Han Ji Woo',persona:'PR000576',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Kang Seo Joon','Han Ji Woo']}
],
sinopsis:'Después de haber construido una vida juntos, Kang Seo Joon y Han Ji Woo atraviesan una crisis que termina separándolos. Cuando Seo Joon desaparece de la vida de Ji Woo, ambos deben enfrentarse a las heridas y malentendidos que los alejaron mientras intentan descubrir si todavía existe un camino para volver a estar juntos.',
multimedia:{
    portada:[
        'https://i.pinimg.com/736x/30/b4/4c/30b44c48995f5416beddcce16c4545e0.jpg',
        'https://i.pinimg.com/1200x/a6/59/70/a6597056f2d868f61cc189202d84efa7.jpg',
        'https://i.pinimg.com/1200x/d2/2d/f0/d22df097d53a96e6cb10dea29ff2a63e.jpg'
    ],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[
    {codigo:'EN000058',funcion:['Productora']},
    {codigo:'EN000066',funcion:['Productora']},
    {codigo:'EN000028',funcion:['Plataforma']}
],
especiales:[],
activo:true
},
	/* ==========================================  Light on Me 2 — DR000118   ========================================== */
	{
codigo:'DR000118',
titulo:'Light on Me 2',
tituloOriginal:'새빛남고 학생회 2',
alias:[
    'Light on Me 2',
    'Light on Me Season 2'
],
tipo:'Drama',
anio:2026,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000111',
temporadas:2,
temporada:2,
episodios:10,
duracion:'30 min',
estado:'Próximo estreno',
estreno:'',
finalizacion:'',
generos:['Drama','Romance','Misterio','Juventud'],
tags:['BL','Instituto','Consejo estudiantil','Misterio','Carta de amor','Nuevos estudiantes'],
personas:[
    {nombre:'Woo Tae Kyung',persona:'PR000579',funcion:['Actor'],principal:true},
    {nombre:'Noh Shin Woo',persona:'PR000580',funcion:['Actor'],principal:true}
],
ships:[
    {personajes:['Woo Tae Kyung','Noh Shin Woo']}
],
sinopsis:'Un nuevo estudiante llega al consejo estudiantil de Saebit High School y se ve envuelto en un misterio relacionado con una carta de amor. La historia vuelve al entorno del instituto para presentar nuevos conflictos, relaciones y secretos.',
multimedia:{
    portada:[
        'https://welcon.kocca.kr/cmm/getImage.do?fileSn=1&thumb=&atchFileId=FILE_67b6ecc5-b5b9-4705-ae68-341c8d49966c'
    ],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[
    {codigo:'EN000071',funcion:['Productora']}
],
especiales:[],
activo:true
},

		/* ===============  KISSABLE LIPS — DR000119   =================== */
{
codigo:'DR000119',
titulo:'Kissable Lips',
tituloOriginal:'깨물고 싶은',
alias:[
    'Kissable Lips',
    'Kissable Lips: Bite Me',
    'Kkaemulgo Sipeun'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000119',
temporadas:1,
temporada:1,
episodios:8,
duracion:'15 min',
estado:'Finalizado',
estreno:'2022-02-03',
finalizacion:'2022-02-25',
generos:[
    'Drama',
    'Romance',
    'Fantasía'
],
tags:[
    'BL',
    'Vampiros',
    'Sobrenatural',
    'Instituto',
    'Amor',
    'Vida eterna'
],
personas:[],
ships:[],
sinopsis:'Kim Jun-ho es un vampiro que necesita beber sangre humana para sobrevivir, pero su vida se complica cuando descubre que está perdiendo su capacidad de vivir eternamente. Su única posibilidad es encontrar a una persona cuya sangre pueda salvarlo. Cuando conoce a Choi Min-hyun, un estudiante humano con una sangre especial, comienza a acercarse a él y sus sentimientos terminan complicando sus planes iniciales.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  SEMANTIC ERROR — DR000120   =================== */
{
codigo:'DR000120',
titulo:'Semantic Error',
tituloOriginal:'시맨틱 에러',
alias:[
    'Semantic Error',
    'Simaentig Ereo'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000120',
temporadas:1,
temporada:1,
episodios:8,
duracion:'25 min',
estado:'Finalizado',
estreno:'2022-02-16',
finalizacion:'2022-03-10',
generos:[
    'Drama',
    'Romance',
    'Comedia',
    'Juventud'
],
tags:[
    'BL',
    'Universidad',
    'Programación',
    'Diseño',
    'Compañeros de clase',
    'Enemigos a amantes',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Chu Sang-woo es un estudiante de informática metódico y estricto que decide eliminar de un trabajo en grupo los nombres de sus compañeros, que no habían participado en el proyecto. Esta decisión provoca que Jang Jae-young, un popular estudiante de diseño, tenga problemas para graduarse. Jae-young decide entonces enfrentarse a Sang-woo, pero la tensión entre ambos termina transformándose poco a poco en atracción.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  OH! BOARDING HOUSE — DR000121   =================== */
{
codigo:'DR000121',
titulo:'Oh! Boarding House',
tituloOriginal:'하숙집 오!번지',
alias:[
    'Oh! Boarding House',
    'Boarding House No. 5',
    'Hasukjip O!beonji'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000121',
temporadas:1,
temporada:1,
episodios:8,
duracion:'15 min',
estado:'Finalizado',
estreno:'2022-02-22',
finalizacion:'2022-03-16',
generos:[
    'Drama',
    'Romance',
    'Comedia'
],
tags:[
    'BL',
    'Pensión',
    'Convivencia',
    'Instituto',
    'Amistad',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Sul Won se hace cargo de la pensión de su madre y empieza a convivir con un grupo de huéspedes muy diferentes entre sí. Entre ellos está Kim Chul-soo, un profesor de instituto que se convierte en una presencia cada vez más importante en su vida. La convivencia y las situaciones cotidianas hacen que sus sentimientos comiencen a cambiar.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  FIRST LOVE AGAIN — DR000122   =================== */
{
codigo:'DR000122',
titulo:'First Love Again',
tituloOriginal:'첫사랑만 세번째',
alias:[
    'First Love, Again',
    'First Love for the Third Time',
    'Cheotsarangman Sebeonjjae'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000122',
temporadas:1,
temporada:1,
episodios:6,
duracion:'25 min',
estado:'Finalizado',
estreno:'2022-02-11',
finalizacion:'2022-03-18',
generos:[
    'Drama',
    'Romance',
    'Fantasía'
],
tags:[
    'BL',
    'Reencarnación',
    'Vidas pasadas',
    'Escritor',
    'Editor',
    'Destino',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Yeon Seok ha vivido varias vidas esperando reencontrarse con su primer amor. En su tercera vida finalmente encuentra a Ha Yeon, pero descubre que ahora su antiguo amor ha renacido como un hombre. Cuando ambos vuelven a encontrarse por motivos de trabajo, Yeon Seok intenta mantenerse alejado, aunque sus sentimientos y los recuerdos de sus vidas anteriores hacen que la situación se vuelva cada vez más complicada.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  BLUE OF WINTER — DR000123   =================== */
{
codigo:'DR000123',
titulo:'Blue of Winter',
tituloOriginal:'유도소년',
alias:[
    'Blue of Winter',
    'Judo Boy',
    'Yudo Sonyeon'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000123',
temporadas:1,
temporada:1,
episodios:5,
duracion:'10 min',
estado:'Finalizado',
estreno:'2022-03-15',
finalizacion:'2022-03-29',
generos:[
    'Drama',
    'Romance',
    'Juventud',
    'Deportes'
],
tags:[
    'BL',
    'Instituto',
    'Judo',
    'Triángulo amoroso',
    'Amistad',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Un estudiante de instituto perteneciente al club de judo comienza a acercarse a un nuevo compañero. Mientras ambos desarrollan sentimientos, una tercera persona también se enamora del protagonista, creando un triángulo amoroso que pone a prueba sus relaciones.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  BLUEMING — DR000124   =================== */
{
codigo:'DR000124',
titulo:'Blueming',
tituloOriginal:'블루밍',
alias:[
    'Blueming',
    'Bluming'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000124',
temporadas:1,
temporada:1,
episodios:11,
duracion:'15 min',
estado:'Finalizado',
estreno:'2022-03-31',
finalizacion:'2022-03-31',
generos:[
    'Drama',
    'Romance',
    'Juventud'
],
tags:[
    'BL',
    'Universidad',
    'Cine',
    'Estudiantes de cine',
    'Popularidad',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Cha Si-won es un estudiante de cine que se esfuerza constantemente por mantener una imagen perfecta y ser popular. Su seguridad comienza a tambalearse cuando conoce a Hyeong Da-woon, un compañero de clase naturalmente carismático que parece no tener que esforzarse para llamar la atención. La rivalidad inicial entre ambos da paso poco a poco a una relación más cercana.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  CHERRY BLOSSOMS AFTER WINTER — DR000125   =================== */
{
codigo:'DR000125',
titulo:'Cherry Blossoms After Winter',
tituloOriginal:'겨울 지나 벚꽃',
alias:[
    'Cherry Blossoms After Winter',
    'Gyeoul Jina Beotkkot'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000125',
temporadas:1,
temporada:1,
episodios:8,
duracion:'25 min',
estado:'Finalizado',
estreno:'2022-02-24',
finalizacion:'2022-04-14',
generos:[
    'Drama',
    'Romance',
    'Juventud'
],
tags:[
    'BL',
    'Instituto',
    'Universidad',
    'Amigos de infancia',
    'Familia',
    'Convivencia',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Después de quedar huérfano, Seo Hae-bom se muda con la familia de su amigo de la infancia, Jo Tae-sung. Los dos crecen juntos bajo el mismo techo, pero al llegar al instituto comienzan a descubrir que sus sentimientos han cambiado. Lo que durante años había parecido una relación familiar empieza a transformarse en amor.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  OCEAN LIKES ME — DR000126   =================== */
{
codigo:'DR000126',
titulo:'Ocean Likes Me',
tituloOriginal:'나와 같은 바다',
alias:[
    'Ocean Likes Me',
    'Nawa Gateun Bada'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000126',
temporadas:1,
temporada:1,
episodios:8,
duracion:'15 min',
estado:'Finalizado',
estreno:'2022-04-26',
finalizacion:'2022-05-18',
generos:[
    'Drama',
    'Romance',
    'Comedia'
],
tags:[
    'BL',
    'Mar',
    'Restaurante',
    'Udon',
    'Música',
    'Convivencia',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Han Ba-da llega a una pequeña localidad costera con el sueño de abrir un restaurante de udon junto al mar. Allí conoce a Tommy, un músico que regresa a Corea después de vivir en el extranjero. Mientras intentan superar sus propios problemas, ambos comienzan a acercarse y a descubrir nuevos sentimientos.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  LOVE IN SPRING — DR000127   =================== */
{
codigo:'DR000127',
titulo:'Love in Spring',
tituloOriginal:'춘정지란',
alias:[
    'Love in Spring',
    'Spring of Crush',
    'Chun Jung Ji-ran'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000127',
temporadas:1,
temporada:1,
episodios:16,
duracion:'20 min',
estado:'Finalizado',
estreno:'2022-05-16',
finalizacion:'2022-07-06',
generos:[
    'Drama',
    'Romance',
    'Histórico'
],
tags:[
    'BL',
    'Joseon',
    'Histórico',
    'Identidad secreta',
    'Matrimonio',
    'Convivencia',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'En la era Joseon, una joven noble se ve obligada a disfrazarse de hombre para poder sobrevivir y proteger a su familia. Su vida cambia cuando se encuentra con un hombre que empieza a sospechar de su verdadera identidad. Entre secretos, obligaciones familiares y sentimientos inesperados, ambos terminan acercándose.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  LOVE CLASS — DR000128   =================== */
{
codigo:'DR000128',
titulo:'Love Class',
tituloOriginal:'수업중입니다',
alias:[
    'Love Class',
    'Sueop Jungimnida'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000128',
temporadas:3,
temporada:1,
episodios:6,
duracion:'15 min',
estado:'Finalizado',
estreno:'2022-05-13',
finalizacion:'2022-05-18',
generos:[
    'Drama',
    'Romance',
    'Juventud'
],
tags:[
    'BL',
    'Universidad',
    'Campus',
    'Compañeros de clase',
    'Proyecto grupal',
    'Amistad',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Un grupo de estudiantes universitarios debe trabajar juntos en un proyecto para una asignatura sobre las relaciones. Entre ellos, varios descubren que la amistad, los malentendidos y los sentimientos románticos pueden resultar mucho más complicados de lo que esperaban.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  ONCE AGAIN — DR000129   =================== */
{
codigo:'DR000129',
titulo:'Once Again',
tituloOriginal:'다시 나를 찾아와',
alias:[
    'Once Again',
    'Dasi Nareul Chajawa'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000129',
temporadas:1,
temporada:1,
episodios:8,
duracion:'15 min',
estado:'Finalizado',
estreno:'2022-09-15',
finalizacion:'2022-10-06',
generos:[
    'Drama',
    'Romance',
    'Fantasía'
],
tags:[
    'BL',
    'Viaje en el tiempo',
    'Vidas pasadas',
    'Reencuentro',
    'Destino',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Una misteriosa conexión con el pasado hace que dos hombres vuelvan a encontrarse después de años. Mientras intentan comprender las circunstancias que los llevaron a separarse, descubren que sus sentimientos siguen presentes y que quizá tengan una nueva oportunidad para cambiar su destino.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  ROOMMATES OF POONGDUCK 304 — DR000130   =================== */
{
codigo:'DR000130',
titulo:'Roommates of Poongduck 304',
tituloOriginal:'풍덕빌라 304호의 사정',
alias:[
    'Roommates of Poongduck 304',
    'The Circumstances of Pungdeok Villa Room 304'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000130',
temporadas:1,
temporada:1,
episodios:8,
duracion:'30 min',
estado:'Finalizado',
estreno:'2022-10-13',
finalizacion:'2022-11-03',
generos:[
    'Drama',
    'Romance',
    'Comedia'
],
tags:[
    'BL',
    'Oficina',
    'Chaebol',
    'Convivencia',
    'Compañeros de trabajo',
    'Casero e inquilino',
    'Enemigos a amantes',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Ji Ho-jun, un joven heredero de una familia chaebol, es expulsado de su casa y se ve obligado a demostrar que puede valerse por sí mismo. Termina viviendo en Poongduck Villa, donde descubre que su casero, Seo Jae-yoon, también trabaja en la misma empresa y acaba convirtiéndose en su subordinado. La convivencia y la relación laboral hacen que la hostilidad inicial entre ambos se transforme poco a poco en sentimientos románticos.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  CHOCO MILK SHAKE — DR000131   =================== */
{
codigo:'DR000131',
titulo:'Choco Milk Shake',
tituloOriginal:'사랑은 댕냥댕냥',
alias:[
    'Choco Milk Shake',
    'Love is Like a Dog and Cat',
    'Sarangeun Daengnyangdaengnyang'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000131',
temporadas:1,
temporada:1,
episodios:10,
duracion:'15 min',
estado:'Finalizado',
estreno:'2022-10-25',
finalizacion:'2022-12-20',
generos:[
    'Drama',
    'Romance',
    'Fantasía',
    'Comedia'
],
tags:[
    'BL',
    'Reencarnación',
    'Mascotas',
    'Perro',
    'Gato',
    'Convivencia',
    'Amor',
    'Sobrenatural'
],
personas:[],
ships:[],
sinopsis:'Jung Woo pierde a las personas más importantes de su vida y también a sus mascotas, Choco y Milk. Un día, ambos aparecen de nuevo ante él convertidos en jóvenes humanos. Mientras viven juntos y aprenden a adaptarse a sus nuevas vidas, los recuerdos y sentimientos que comparten comienzan a adquirir un significado diferente.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  HAPPY ENDING ROMANCE — DR000132   =================== */
{
codigo:'DR000132',
titulo:'Happy Ending Romance',
tituloOriginal:'펜스 밖은 해피엔딩',
alias:[
    'Happy Ending Romance',
    'Beyond the Fence Is Happy Ending',
    'Penseu Bak-eun Haepi Ending'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000132',
temporadas:1,
temporada:1,
episodios:8,
duracion:'30 min',
estado:'Finalizado',
estreno:'2022-11-24',
finalizacion:'2022-12-15',
generos:[
    'Drama',
    'Romance',
    'Melodrama'
],
tags:[
    'BL',
    'Escritor',
    'Literatura',
    'Editorial',
    'Triángulo amoroso',
    'Secretos',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Kim Jung-hyun es un escritor de éxito cuya carrera comienza a tambalearse después de enfrentarse a la presión de la industria editorial. Cha Jung-woo, un escritor que lo conoce bien, intenta protegerlo y ayudarlo a recuperar la confianza. Sin embargo, la aparición de Han Tae-young, un editor que también desarrolla sentimientos por Jung-hyun, complica todavía más la relación entre los tres.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  OH! MY ASSISTANT — DR000133   =================== */
{
codigo:'DR000133',
titulo:'Oh! My Assistant',
tituloOriginal:'오! 나의 어시님',
alias:[
    'Oh! My Assistant',
    'Oh! Naui Eosineum'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000133',
temporadas:1,
temporada:1,
episodios:8,
duracion:'20 min',
estado:'Finalizado',
estreno:'2022-11-10',
finalizacion:'2022-12-23',
generos:[
    'Drama',
    'Romance',
    'Comedia'
],
tags:[
    'BL',
    'Webtoon',
    'Escritor',
    'Asistente',
    'Oficina',
    'Convivencia',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Seon Ho es un autor de webtoons románticos que tiene dificultades para dibujar escenas de amor. Cuando contrata a Mu-young como su nuevo asistente, descubre que su ayudante es en realidad uno de sus mayores admiradores. La convivencia entre ambos hace que la relación profesional empiece a transformarse en algo más personal.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  THE DIRECTOR WHO BUYS ME DINNER — DR000134   =================== */
{
codigo:'DR000134',
titulo:'The Director Who Buys Me Dinner',
tituloOriginal:'밥만 잘 사주는 이상한 이사님',
alias:[
    'The Director Who Buys Me Dinner',
    'The Strange Director Who Buys Me Dinner',
    'Bapman Jal Sajuneun Isanghan Isanim'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000134',
temporadas:1,
temporada:1,
episodios:10,
duracion:'15 min',
estado:'Finalizado',
estreno:'2022-12-15',
finalizacion:'2023-01-12',
generos:[
    'Drama',
    'Romance',
    'Fantasía',
    'Comedia'
],
tags:[
    'BL',
    'Oficina',
    'Jefe y empleado',
    'Reencarnación',
    'Vidas pasadas',
    'Destino',
    'Maldición',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Min-yoo trabaja en una empresa donde su extraño director, Seol Dong-baek, parece conocerlo desde hace mucho tiempo. Dong-baek asegura que ambos están unidos por una relación que se remonta a vidas anteriores y que deben permanecer juntos para romper una antigua maldición. Mientras Min-yoo intenta comprender lo que está sucediendo, sus sentimientos hacia su jefe comienzan a cambiar.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  THE NEW EMPLOYEE — DR000135   =================== */
{
codigo:'DR000135',
titulo:'The New Employee',
tituloOriginal:'신입사원',
alias:[
    'The New Employee',
    'The New Recruit',
    'Sinipsawon'
],
tipo:'Drama',
anio:2022,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000135',
temporadas:1,
temporada:1,
episodios:7,
duracion:'30 min',
estado:'Finalizado',
estreno:'2022-12-21',
finalizacion:'2023-02-01',
generos:[
    'Drama',
    'Romance',
    'Comedia'
],
tags:[
    'BL',
    'Oficina',
    'Jefe y empleado',
    'Prácticas',
    'Trabajo',
    'Compañeros de trabajo',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Seung-hyun consigue unas prácticas en la empresa que siempre había soñado y está decidido a demostrar su capacidad. Sin embargo, termina trabajando directamente bajo las órdenes de Jong-chan, un jefe exigente y aparentemente frío. A medida que pasan más tiempo juntos, la relación profesional entre ambos comienza a transformarse en algo inesperado.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  LOVE CLASS 2 — DR000136   =================== */
{
codigo:'DR000136',
titulo:'Love Class 2',
tituloOriginal:'수업중입니다 2',
alias:[
    'Love Class 2',
    'Love Class Season 2',
    'Sueop Jungimnida 2'
],
tipo:'Drama',
anio:2023,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000128',
temporadas:3,
temporada:2,
episodios:10,
duracion:'15 min',
estado:'Finalizado',
estreno:'2023-08-11',
finalizacion:'2023-09-15',
generos:[
    'Drama',
    'Romance',
    'Juventud'
],
tags:[
    'BL',
    'Universidad',
    'Campus',
    'Compañeros de clase',
    'Amistad',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'Un nuevo grupo de estudiantes universitarios se enfrenta a las dificultades de las relaciones, la amistad y el amor mientras descubren que los sentimientos pueden surgir en los lugares más inesperados.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},

	/* ===============  LOVE CLASS 3 — DR000137   =================== */
{
codigo:'DR000137',
titulo:'Love Class 3',
tituloOriginal:'수업중입니다 3',
alias:[
    'Love Class 3',
    'Love Class Season 3',
    'Sueop Jungimnida 3'
],
tipo:'Drama',
anio:2026,
pais:'KR',
idioma:'ko',
franquicia:'',
universo:'',
serie:'SR000128',
temporadas:3,
temporada:3,
episodios:16,
duracion:'15 min',
estado:'Finalizado',
estreno:'2026-05-28',
finalizacion:'2026-07-17',
generos:[
    'Drama',
    'Romance',
    'Juventud'
],
tags:[
    'BL',
    'K-pop',
    'Ídolos',
    'Música',
    'Industria del entretenimiento',
    'Reencuentro',
    'Amor'
],
personas:[],
ships:[],
sinopsis:'En el mundo de los ídolos del K-pop, dos historias de amor se desarrollan entre jóvenes que intentan abrirse camino en una industria marcada por la fama, los rumores y la presión. Mientras algunos intentan recuperar una relación del pasado, otros descubren el amor mientras luchan por cumplir sus sueños profesionales.',
multimedia:{
    portada:[],
    trailer:[],
    teaser:[],
    pilot:[],
    ost:[],
    videos:[]
},
entidades:[],
especiales:[],
activo:true
},
];
