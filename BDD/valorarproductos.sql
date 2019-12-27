-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 27-12-2019 a les 23:28:16
-- Versió del servidor: 10.1.36-MariaDB
-- Versió de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `valorarproductos`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `assesment`
--

CREATE TABLE `assesment` (
  `idUser` int(10) NOT NULL,
  `idProduct` int(5) NOT NULL,
  `asses` double NOT NULL,
  `opinion` varchar(700) NOT NULL,
  `assesfirst` int(2) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `assesment`
--

INSERT INTO `assesment` (`idUser`, `idProduct`, `asses`, `opinion`, `assesfirst`, `date`) VALUES
(0, 2, 3, '\'\'', 3, '2019-12-01'),
(0, 4, 7, 'Excursiones de esta empresa bien organizadas, pero la jeep safari que incluye comida, aunque bien organizada la comida fue un \"timo\"', 3, '2019-12-10'),
(0, 6, 3, '\'\'', 3, '2019-12-02'),
(0, 8, 3, '\'\'', 3, '2019-12-10'),
(0, 9, 3, '\'\'', 3, '2019-12-17'),
(0, 10, 3, '\'\'', 3, '2019-12-01'),
(0, 11, 3, '\'\'', 3, '2019-12-02'),
(0, 12, 3, '\'\'', 3, '2019-12-01'),
(0, 13, 3, '\'\'', 3, '2019-12-04'),
(0, 14, 3, '\'\'', 3, '2019-12-10'),
(0, 15, 3, '', 3, '2019-12-10'),
(1, 8, 15, 'Duele, pero cuando llegan al nervio se pasa ', 5, '2019-12-27'),
(3, 4, 2, 'Ha sido un día inolvidable, paseamos por unos caminos rurales admirando el paisaje alrededor, fuimos a una playa paradisíaca y comimos en un lugar salvaje y mágico.Todo eso fue posible gracias a Paolo, nuestra guía, un encanto de persona: alegre, super buena onda y muy cuidadoso con el grupo.Gracias!', 3, '2019-12-26'),
(15, 2, 4, 'ofejgojerogjedrtognd', 2, '2019-12-20'),
(15, 5, 3, 'bien', 2, '2019-12-04'),
(18, 4, 4, 'Interesante excursión para conocer Ciudadela y la zona centro-norte de la isla de Menorca. Gracias a Giuseppe (el guía) que la hizo ágil y divertida, espectacular toda la información que facilita, se le nota q le gusta su trabajo, respondiendo preguntas con saber y simpatía.\r\nDecidimos hacer este tipo de excursiones, en vez de alquilar un coche, por la comodidad q supone que te recojan en tu hotel,buenos guías q te explican la historia y curiosidades de los sitios q visitas, un ratito a pie y otro en bus, y a la hora puntual te dejan nuevamente en el hotel. Para nosotros recomendable 100%.', 4, '2019-12-18'),
(18, 10, 5, 'Fuimos a cenar, elegimos el menú que era un poco más largo pero no resultó pesado. Muy original el estilo del menú, fue una grata sorpresa y los sabores de los platos nos parecieron muy acertados. A destacar el huevo, el plato de las carnes y el de las gambas, entre otros. El trato del personal de sala genial, amables y muy atentos.\nLo negativo, dos puntos que creemos pueden mejorar, las sillas no son del todo cómodas y al ser un menú largo, acaba siendo incómodo, y segundo, que tras mucho disfrutar de la cena, y a sabiendas que estas en un restaurante de 2 estrellas michelin (que las merece) , la mala sensación que queda por tener que pagar 8 euros por un café, o 16 euros\npor copa de vino, ', 5, '2019-12-20'),
(24, 4, 5, 'Respecto al hecho de celebrar la primera gala de presentación de la guía en tierras portuguesas, Gwendal Poullennec, el Director Internacional de las guías MICHELIN, ha declarado: «Portugal se ha convertido en un destino turístico de referencia y buena parte de ese éxito radica en el auge de su gastronomía. Es cierto que la cocina tradicional lusa siempre ha contado con el beneplácito del público foráneo. Sin embargo, hoy confirmamos un vigoroso impulso en la alta gastronomía de este país, habitualmente a cargo de una generación de jóvenes chefs».', 5, '2019-12-20');

-- --------------------------------------------------------

--
-- Estructura de la taula `category`
--

CREATE TABLE `category` (
  `idCategory` int(2) NOT NULL,
  `nameCategory` varchar(50) NOT NULL,
  `idCategoryFhater` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `category`
--

INSERT INTO `category` (`idCategory`, `nameCategory`, `idCategoryFhater`) VALUES
(0, 'Sin categoría', 0),
(1, 'Mar', 4),
(3, 'Ciudad', 11),
(4, 'Montaña', 4),
(9, 'Alta montaña', 19),
(11, 'Gastronómicas', 5),
(12, 'Artísticas', 9),
(13, 'Saludables', 1),
(14, 'Medioambientales ', 16),
(15, 'Culturales', 13),
(16, 'Esteticas', 16),
(17, 'Cocina', 1),
(29, 'Suicidas', 18),
(31, 'Audiovisual', 0);

-- --------------------------------------------------------

--
-- Estructura de la taula `categoryfather`
--

CREATE TABLE `categoryfather` (
  `idCategoryFhater` int(2) NOT NULL,
  `nameCCAA` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `categoryfather`
--

INSERT INTO `categoryfather` (`idCategoryFhater`, `nameCCAA`) VALUES
(1, 'Andalucía'),
(2, 'Aragón'),
(3, 'Asturias, Principado de'),
(4, 'Balears, Illes'),
(5, 'Canarias'),
(6, 'Cantabria'),
(7, 'Castilla y León'),
(8, 'Castilla - La Mancha'),
(9, 'Catalunya'),
(10, 'Comunitat Valenciana'),
(11, 'Extremadura'),
(12, 'Galicia'),
(13, 'Madrid, Comunidad de'),
(14, 'Murcia, Región de'),
(15, 'Navarra, Comunidad Foral de'),
(16, 'País Vasco'),
(17, 'Rioja, La'),
(18, 'Ceuta'),
(19, 'Melilla'),
(20, 'sin CCAA');

-- --------------------------------------------------------

--
-- Estructura de la taula `categoryproduct`
--

CREATE TABLE `categoryproduct` (
  `idCategory` int(2) NOT NULL,
  `idProduct` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `categoryproduct`
--

INSERT INTO `categoryproduct` (`idCategory`, `idProduct`) VALUES
(0, 6),
(0, 8),
(3, 4),
(3, 30),
(9, 5),
(11, 9),
(11, 10),
(11, 11),
(13, 15),
(13, 16),
(15, 14);

-- --------------------------------------------------------

--
-- Estructura de la taula `country`
--

CREATE TABLE `country` (
  `idCountry` int(3) NOT NULL,
  `countryName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `country`
--

INSERT INTO `country` (`idCountry`, `countryName`) VALUES
(1, 'Sin país'),
(2, 'Islas Gland'),
(3, 'Albania'),
(4, 'Alemania'),
(5, 'Andorra'),
(6, 'Angola'),
(7, 'Anguilla'),
(8, 'Antártida'),
(9, 'Antigua y Barbuda'),
(10, 'Antillas Holandesas'),
(11, 'Arabia Saudí'),
(12, 'Argelia'),
(13, 'Argentina'),
(14, 'Armenia'),
(15, 'Aruba'),
(16, 'Australia'),
(17, 'Austria'),
(18, 'Azerbaiyán'),
(19, 'Bahamas'),
(20, 'Bahréin'),
(21, 'Bangladesh'),
(22, 'Barbados'),
(23, 'Bielorrusia'),
(24, 'Bélgica'),
(25, 'Belice'),
(26, 'Benin'),
(27, 'Bermudas'),
(28, 'Bhután'),
(29, 'Bolivia'),
(30, 'Bosnia y Herzegovina'),
(31, 'Botsuana'),
(32, 'Isla Bouvet'),
(33, 'Brasil'),
(34, 'Brunéi'),
(35, 'Bulgaria'),
(36, 'Burkina Faso'),
(37, 'Burundi'),
(38, 'Cabo Verde'),
(39, 'Islas Caimán'),
(40, 'Camboya'),
(41, 'Camerún'),
(42, 'Canadá'),
(43, 'República Centroafricana'),
(44, 'Chad'),
(45, 'República Checa'),
(46, 'Chile'),
(47, 'China'),
(48, 'Chipre'),
(49, 'Isla de Navidad'),
(50, 'Ciudad del Vaticano'),
(51, 'Islas Cocos'),
(52, 'Colombia'),
(53, 'Comoras'),
(54, 'República Democrática del Congo'),
(55, 'Congo'),
(56, 'Islas Cook'),
(57, 'Corea del Norte'),
(58, 'Corea del Sur'),
(59, 'Costa de Marfil'),
(60, 'Costa Rica'),
(61, 'Croacia'),
(62, 'Cuba'),
(63, 'Dinamarca'),
(64, 'Dominica'),
(65, 'República Dominicana'),
(66, 'Ecuador'),
(67, 'Egipto'),
(68, 'El Salvador'),
(69, 'Emiratos Árabes Unidos'),
(70, 'Eritrea'),
(71, 'Eslovaquia'),
(72, 'Eslovenia'),
(73, 'España'),
(74, 'Islas ultramarinas de Estados Unidos'),
(75, 'Estados Unidos'),
(76, 'Estonia'),
(77, 'Etiopía'),
(78, 'Islas Feroe'),
(79, 'Filipinas'),
(80, 'Finlandia'),
(81, 'Fiyi'),
(82, 'Francia'),
(83, 'Gabón'),
(84, 'Gambia'),
(85, 'Georgia'),
(86, 'Islas Georgias del Sur y Sandwich del Sur'),
(87, 'Ghana'),
(88, 'Gibraltar'),
(89, 'Granada'),
(90, 'Grecia'),
(91, 'Groenlandia'),
(92, 'Guadalupe'),
(93, 'Guam'),
(94, 'Guatemala'),
(95, 'Guayana Francesa'),
(96, 'Guinea'),
(97, 'Guinea Ecuatorial'),
(98, 'Guinea-Bissau'),
(99, 'Guyana'),
(100, 'Haití'),
(101, 'Islas Heard y McDonald'),
(102, 'Honduras'),
(103, 'Hong Kong'),
(104, 'Hungría'),
(105, 'India'),
(106, 'Indonesia'),
(107, 'Irán'),
(108, 'Iraq'),
(109, 'Irlanda'),
(110, 'Islandia'),
(111, 'Israel'),
(112, 'Italia'),
(113, 'Jamaica'),
(114, 'Japón'),
(115, 'Jordania'),
(116, 'Kazajstán'),
(117, 'Kenia'),
(118, 'Kirguistán'),
(119, 'Kiribati'),
(120, 'Kuwait'),
(121, 'Laos'),
(122, 'Lesotho'),
(123, 'Letonia'),
(124, 'Líbano'),
(125, 'Liberia'),
(126, 'Libia'),
(127, 'Liechtenstein'),
(128, 'Lituania'),
(129, 'Luxemburgo'),
(130, 'Macao'),
(131, 'ARY Macedonia'),
(132, 'Madagascar'),
(133, 'Malasia'),
(134, 'Malawi'),
(135, 'Maldivas'),
(136, 'Malí'),
(137, 'Malta'),
(138, 'Islas Malvinas'),
(139, 'Islas Marianas del Norte'),
(140, 'Marruecos'),
(141, 'Islas Marshall'),
(142, 'Martinica'),
(143, 'Mauricio'),
(144, 'Mauritania'),
(145, 'Mayotte'),
(146, 'México'),
(147, 'Micronesia'),
(148, 'Moldavia'),
(149, 'Monaco'),
(150, 'Mongolia'),
(151, 'Montserrat'),
(152, 'Mozambique'),
(153, 'Myanmar'),
(154, 'Namibia'),
(155, 'Nauru'),
(156, 'Nepal'),
(157, 'Nicaragua'),
(158, 'Níger'),
(159, 'Nigeria'),
(160, 'Niue'),
(161, 'Isla Norfolk'),
(162, 'Noruega'),
(163, 'Nueva Caledonia'),
(164, 'Nueva Zelanda'),
(165, 'Omán'),
(166, 'Países Bajos'),
(167, 'Pakistán'),
(168, 'Palau'),
(169, 'Palestina'),
(170, 'Panamá'),
(171, 'Papúa Nueva Guinea'),
(172, 'Paraguay'),
(173, 'Perú'),
(174, 'Islas Pitcairn'),
(175, 'Polinesia Francesa'),
(176, 'Polonia'),
(177, 'Portugal'),
(178, 'Puerto Rico'),
(179, 'Qatar'),
(180, 'Reino Unido'),
(181, 'Reunión'),
(182, 'Ruanda'),
(183, 'Rumania'),
(184, 'Rusia'),
(185, 'Sahara Occidental'),
(186, 'Islas Salomón'),
(187, 'Samoa'),
(188, 'Samoa Americana'),
(189, 'San Cristóbal y Nevis'),
(190, 'San Marino'),
(191, 'San Pedro y Miquelón'),
(192, 'San Vicente y las Granadinas'),
(193, 'Santa Helena'),
(194, 'Santa Lucía'),
(195, 'Santo Tomé y Príncipe'),
(196, 'Senegal'),
(197, 'Serbia y Montenegro'),
(198, 'Seychelles'),
(199, 'Sierra Leona'),
(200, 'Singapur'),
(201, 'Siria'),
(202, 'Somalia'),
(203, 'Sri Lanka'),
(204, 'Suazilandia'),
(205, 'Sudáfrica'),
(206, 'Sudán'),
(207, 'Suecia'),
(208, 'Suiza'),
(209, 'Surinam'),
(210, 'Svalbard y Jan Mayen'),
(211, 'Tailandia'),
(212, 'Taiwán'),
(213, 'Tanzania'),
(214, 'Tayikistán'),
(215, 'Territorio Británico del Océano Índico'),
(216, 'Territorios Australes Franceses'),
(217, 'Timor Oriental'),
(218, 'Togo'),
(219, 'Tokelau'),
(220, 'Tonga'),
(221, 'Trinidad y Tobago'),
(222, 'Túnez'),
(223, 'Islas Turcas y Caicos'),
(224, 'Turkmenistán'),
(225, 'Turquía'),
(226, 'Tuvalu'),
(227, 'Ucrania'),
(228, 'Uganda'),
(229, 'Uruguay'),
(230, 'Uzbekistán'),
(231, 'Vanuatu'),
(232, 'Venezuela'),
(233, 'Vietnam'),
(234, 'Islas Vírgenes Británicas'),
(235, 'Islas Vírgenes de los Estados Unidos'),
(236, 'Wallis y Futuna'),
(237, 'Yemen'),
(238, 'Yibuti'),
(239, 'Zambia'),
(240, 'Zimbabue'),
(241, ''),
(242, '');

-- --------------------------------------------------------

--
-- Estructura de la taula `leveluser`
--

CREATE TABLE `leveluser` (
  `idLevel` int(2) NOT NULL,
  `nameLevel` varchar(25) NOT NULL,
  `ValueAsses` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `leveluser`
--

INSERT INTO `leveluser` (`idLevel`, `nameLevel`, `ValueAsses`) VALUES
(1, 'Inicial', 1),
(2, 'Intermedio', 2),
(3, 'Experto', 3),
(4, 'Profesionalll', 4);

-- --------------------------------------------------------

--
-- Estructura de la taula `login`
--

CREATE TABLE `login` (
  `idLogin` int(10) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(70) NOT NULL,
  `token` varchar(130) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `login`
--

INSERT INTO `login` (`idLogin`, `password`, `email`, `token`) VALUES
(0, '', '12345', ''),
(1, '12345', 'tremosa@gmail.com', 'f151f97a293b43d94e63e85590c8bbaa9318c61c4801efa389d1718fee9b707ee9caf79fbac7978bd8f3d6cbc251d9f3d3f8d42647ab9c557981cb23a6e2108e'),
(2, '12345', 'jorrillo@gmail.com', ''),
(3, '12345', 'lopez@gmail.com', ''),
(9, '12345', 'carolina@gmail.com', ''),
(10, '12345', 'carol@gmail.com', ''),
(36, '12345', 'carlos@gmail.com', ''),
(37, '1234', 'tremosasergio@gmail.com', ''),
(38, '1234', 'paco@gmail.com', '');

-- --------------------------------------------------------

--
-- Estructura de la taula `product`
--

CREATE TABLE `product` (
  `idProduct` int(5) NOT NULL,
  `nameProduct` varchar(60) NOT NULL,
  `desciption` varchar(1200) NOT NULL,
  `photo` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `product`
--

INSERT INTO `product` (`idProduct`, `nameProduct`, `desciption`, `photo`) VALUES
(2, 'Buceo con cocodrilos', 'bucear con cocodrilos sin que te muerdan ', 'cocodrilo.jpg'),
(4, 'Excursion en el bosque', 'Ruta circular en la que atravesaremos el Bosque de Betato, uno de los hayedos más interesantes del Valle de Tena para posteriormente dirigirnos hacia la pista de La Partacua, desde donde podremos contemplar la explosión de colores otoñales de los bosques mixtos que se extienden a las faldas de la Sierra de La Partacua.  La ruta la completaremos visitando las localidades de Piedrafita de Jaca y Tramacastilla de Tena, así como la ermita de Santa Cruz de Piedrafita y la cascada del barranco Gorgol.  También podemos visitar el parque faunistico de Lacuniacha junto al que pasaremos o incluso alargar la excursión en torno a 1 hora más para visitar el ibon de Piedrafita', 'bosque.jpg'),
(5, 'Paseo por la ciudad', 'En una primera ruta recomendamos callejear por el barrio de Carretas, asentamiento primero de la comunidad musulmana que dio su arábigo nombre \"Al-Basit\" (la llanura) a la originaria villa medieval; podemos iniciar el recorrido desde la réplica de la Cruz del término; descender por la siempre animada y comercial calle Mayor para después atravesar el Pasaje Lodares hasta la Posada del Rosario, a la que sirve de acceso la puerta restaurada de la Casa de los Picos; subir hasta la espléndida Plaza de Villacerrada, y descender hasta la Plaza Mayor.', 'ciudad.jpg'),
(6, 'Viajar a la luna sin oxigeno', 'viajar a la luna sin oxigeno e intentar buscar la bandera de EEUU', 'luna.jpg'),
(8, 'Pedicura con pirañas', 'Hacerte los pies y librarte de las pieles muertas', 'pirañas.jpg'),
(9, 'Can Jubany', 'Abierta a la llanura de Vic, testigo del mar de niebla en invierno y de los campos de cultivo dorados en verano, hay una masía que conserva toda la calidez, el aroma y el pulso de las antiguas casas de payés, pero que esconde un gran secreto en su interior: una explosión de sentidos, un viaje por los sabores de la tierra, un nuevo concepto gustativo.\r\n\r\nSe trata de Can Jubany, muy cerca de Calldetenes, el restaurante que Nandu Jubany y Anna Orte regentan desde 1995. La apariencia tradicional de este establecimiento de visita obligada encaja a la perfección con las líneas contemporáneas y el mobiliario moderno del interior. Es la traducción arquitectónica de lo que se cuece en los fogones del chef: una cocina que recopila la experiencia de los platos tradicionales para reinventarlos; productos que pasan del bosque y el huerto al plato; recetas innovadoras que conservan la esencia de toda la vida.', 'jubany.jpg'),
(10, 'Moments mandarín oriental', 'Con sus dos estrellas Michelin, el restaurante Moments continúa ganando premios y devotos gracias a su cocina creativa, fresca y saludable inspirada en la cultura culinaria catalana. Dirigido por la chef Carme Ruscalleda y su hijo Raül Balam, Moments ofrece una de las mejores experiencias gastronómicas de Barcelona. Ruscalleda se ha convertido en una de las chefs más famosas del país, y las siete estrellas Michelin de sus restaurantes en España y Tokio la avalan.\r\n\r\nLos tonos ámbar y dorados del comedor de Moments, decorado con los exclusivos diseños de Patricia Urquiola, crean una atmósfera relajante y mágica para el deleite de la experiencia gastronómica que ofrecen el menú a la carta y el menú de degustación. Además, una ventana en la cocina ofrece a los comensales una atractiva vista del personal mientras trabaja', 'moments.jpg'),
(11, 'Tickets', 'Tickets presenta una forma diferente e informal de vivir una experiencia de alta gastronomía a través de sus tapas. Un espacio lúdico y de diversión donde la sala y la comida conforman «La vida tapa». \r\n\r\nTickets está dirigido por Fran Agudo en cocina y por Joan Romans en la sala.\r\nTickets explora el lenguaje universal de la tapa y la gastronomía mundial.\r\nUn lugar donde se revisa  la experiencia del comensal y la manera de comer.\r\nEs un concepto explosivo que hace que la oferta sea diferente y esté en constante evolución, dependiendo de la temporalidad de los productos de los que disponemos.\r\nNo disponemos de menú degustación pero le prepararemos uno a medida, dependiendo de sus gustos personales.', 'tickets.jpg'),
(12, 'Taller de fotografia', 'Preu: 26,60 € (16 hores). Taller per a joves de 12 a 15 anys\r\n\r\nDescobreix, experimenta i investiga elllenguatge fotogrà c d’una manera entretin-guda! Al nal del taller, farem una exposició a la Casa Orlandai i un concurs fotogràfic! És necessari portar càmera amb mode manual\r\n\r\nAmb Kati Riquelme, fotògrafa professional', 'tallerFoto.jpg'),
(13, 'Observación aves', 'La observación de aves o avistamiento de aves, es una actividad centrada en la contemplación y el estudio de las aves silvestres.\r\n\r\n\r\nLa actividad de avistamiento de aves y el número de observadores se ha incrementado notable en Colombia, país con el mayor número de especies registradas en el mundo.1?2?3? Observadores de aves en Neiva Colombia.\r\nEsta afición es más bien desarrollada como ocio, y se basa en el arte de reconocer las distintas especies de aves por su taxonomía, teniendo en cuenta el plumaje o canto entre otros factores. Muchos se limitan a crear listas que muestran la cantidad de aves que concurren a un área particular; otros mantienen la lista de todas las especies que vieron en su vida. Cada uno puede adentrarse y adaptar esta afición a su manera. Unos se contentan simplemente con disfrutar y enriquecer más los paseos en un entorno natural, mientras que otros se fascinan en la parte científica que conlleva el estudio de las aves, la ornitología.', 'aves.jpg'),
(14, 'Noche de los museos', 'La Noche de los Museos es una iniciativa del Consejo de Europa que este año llega a su treceava edición. Más de cuatro mil museos de cuarenta países abrirán las puertas a los ciudadanos la noche del 18 al 19 de mayo. En Barcelona, l’Hospitalet, Badalona, Cornellà, Esplugues, Santa Coloma de Gramenet, Sant Adrià y Sant Joan Despí más de 80 centros abrirán hasta la madrugada gratuitamente.\r\n\r\nExposiciones, conciertos, danza, poesía, performances, visitas guiadas y dramatizadas, talleres y actividades para toda la familia.', 'museos.jpg'),
(15, 'Yoga en la naturaleza', 'A través del yoga, se aumenta tanto el equilibrio como la coordinación. Estos aspectos son necesarios para la práctica de actividad física, puesto que controlaremos mejor nuestro movimiento. ... El yoga es una actividad que trabaja el cuerpo en su totalidad, hecho que resulta especialmente útil en estos casos.', 'yoga.jpg'),
(16, 'Mindfulness', 'El mindfulness, también llamado atención plena o conciencia plena, consiste en estar atento de manera intencional a lo que hacemos, sin juzgar, apegarse, o rechazar en alguna forma la experiencia.1?\r\n\r\nEs una práctica basada en la meditación vipassana. Consiste en prestar atención desapasionada a los pensamientos, las emociones, las sensaciones corporales y al ambiente circundante, sin juzgar si son adecuados. La atención se enfoca en lo que se percibe, sin preocuparse por los problemas, por sus causas y consecuencias, ni buscar soluciones.1?\r\n\r\nJon Kabat-Zinn diseñó un programa llamado Mindfulness-Based Stress Reduction - MBSR, —reducción del estrés basada en la atención plena— a partir del cual se difundió fuera de su contexto religioso original.', 'mindfullness.jpg'),
(26, '', '', ''),
(30, 'Jazz ', 'Al margen de los festivales, el día a día del jazz en la ciudad lo cubren programaciones como la de Robadors 23. Hay otros, ¿pero son más o menos que en marzo del 2016, cuando entró en vigor la circular del Ayuntamiento de Barcelona que quiere regular de una vez por todas la música en vivo en la ciudad? “Yo no he notado mucho cambio porque siempre nos hemos movido en garitos que imagino que nunca han tenido licencia”, dice el contrabajista Juan Pablo Balcázar. El mapa exacto está por dibujar, pero se conocerá algo mejor cuando el 20 de junio el programa Cultura Viva del Ayuntamiento de Barcelona presente un informe sobre música en directo en la ciudad.', 'null');

-- --------------------------------------------------------

--
-- Estructura de la taula `rol`
--

CREATE TABLE `rol` (
  `idRol` int(1) NOT NULL,
  `nameRol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `rol`
--

INSERT INTO `rol` (`idRol`, `nameRol`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Estructura de la taula `user`
--

CREATE TABLE `user` (
  `idUser` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `idCountry` int(3) NOT NULL,
  `city` varchar(30) DEFAULT NULL,
  `numberAsses` int(4) NOT NULL,
  `dataAdmission` datetime NOT NULL,
  `idRol` int(1) NOT NULL,
  `idLogin` int(10) NOT NULL,
  `idLevel` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `user`
--

INSERT INTO `user` (`idUser`, `name`, `surname`, `email`, `idCountry`, `city`, `numberAsses`, `dataAdmission`, `idRol`, `idLogin`, `idLevel`) VALUES
(0, 'Usuario anónimo', 'anonimo', 'anonimos00000', 1, '', 0, '2019-10-25 00:00:00', 1, 0, 1),
(1, 'Sergio', 'TREMOSA', 'TREMOSA@GMAIL.COM', 5, 'sin ciudad', 1000, '2010-10-15 00:00:00', 2, 1, 3),
(3, 'Pedro', 'jorrillo', 'jorrillo@gmail.com', 1, '', 51, '2019-10-15 00:00:00', 1, 2, 1),
(15, 'juan', 'lopez', 'lopez@gmail.com', 1, '', 26, '2019-10-16 12:34:13', 1, 3, 1),
(16, 'alfredo', 'dcdc', 'dcdsfvfsd', 1, '', 0, '2019-12-01 00:00:00', 1, 9, 1),
(18, 'Carolina', 'fdsfdsf', 'fdsfsdf', 1, '', 0, '2019-12-10 00:00:00', 1, 10, 1),
(24, 'Carlos', 'Perez', 'carlos@gmail.com', 1, '', 0, '2019-12-18 00:00:00', 1, 36, 1),
(26, 'Paco', 'alvarez', 'paco@gmail.com', 241, '', 0, '2019-12-19 00:00:00', 1, 38, 1);

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `assesment`
--
ALTER TABLE `assesment`
  ADD PRIMARY KEY (`idUser`,`idProduct`);

--
-- Índexs per a la taula `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idCategory`);

--
-- Índexs per a la taula `categoryfather`
--
ALTER TABLE `categoryfather`
  ADD PRIMARY KEY (`idCategoryFhater`);

--
-- Índexs per a la taula `categoryproduct`
--
ALTER TABLE `categoryproduct`
  ADD PRIMARY KEY (`idCategory`,`idProduct`),
  ADD KEY `idProduct` (`idProduct`);

--
-- Índexs per a la taula `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`idCountry`);

--
-- Índexs per a la taula `leveluser`
--
ALTER TABLE `leveluser`
  ADD PRIMARY KEY (`idLevel`);

--
-- Índexs per a la taula `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`idLogin`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índexs per a la taula `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduct`);

--
-- Índexs per a la taula `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idRol`);

--
-- Índexs per a la taula `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `idLogin` (`idLogin`),
  ADD KEY `idCountry` (`idCountry`),
  ADD KEY `idRol` (`idRol`),
  ADD KEY `idLevel` (`idLevel`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `category`
--
ALTER TABLE `category`
  MODIFY `idCategory` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT per la taula `categoryfather`
--
ALTER TABLE `categoryfather`
  MODIFY `idCategoryFhater` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT per la taula `country`
--
ALTER TABLE `country`
  MODIFY `idCountry` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=243;

--
-- AUTO_INCREMENT per la taula `leveluser`
--
ALTER TABLE `leveluser`
  MODIFY `idLevel` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la taula `login`
--
ALTER TABLE `login`
  MODIFY `idLogin` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT per la taula `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT per la taula `rol`
--
ALTER TABLE `rol`
  MODIFY `idRol` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la taula `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restriccions per a les taules bolcades
--

--
-- Restriccions per a la taula `assesment`
--
ALTER TABLE `assesment`
  ADD CONSTRAINT `assesment_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`),
  ADD CONSTRAINT `assesment_ibfk_2` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`);

--
-- Restriccions per a la taula `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`idCategoryFhater`) REFERENCES `categoryfather` (`idCategoryFhater`);

--
-- Restriccions per a la taula `categoryproduct`
--
ALTER TABLE `categoryproduct`
  ADD CONSTRAINT `categoryproduct_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`idCategory`),
  ADD CONSTRAINT `categoryproduct_ibfk_2` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`);

--
-- Restriccions per a la taula `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idCountry`) REFERENCES `country` (`idCountry`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
