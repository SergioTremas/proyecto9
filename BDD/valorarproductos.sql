-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 31-10-2019 a les 10:42:27
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
  `opinion` varchar(700) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `assesment`
--

INSERT INTO `assesment` (`idUser`, `idProduct`, `asses`, `opinion`) VALUES
(0, 4, 7, 'gfdgfd'),
(1, 1, 8, 'mal'),
(3, 1, 10, 'bien'),
(3, 4, 8, 'vhgdsgg fs'),
(15, 2, 4, 'ofejgojerogjedrtognd');

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
(0, 'Sin categoría', 1),
(1, 'Mar', 4),
(3, 'ciudad', 4),
(4, 'dragones y mazmorrras', 4);

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
(19, 'Melilla');

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
(0, 1),
(0, 4),
(0, 5),
(4, 2);

-- --------------------------------------------------------

--
-- Estructura de la taula `city`
--

CREATE TABLE `city` (
  `idCity` int(3) NOT NULL,
  `nameCity` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `city`
--

INSERT INTO `city` (`idCity`, `nameCity`) VALUES
(1, 'Sin ciudad'),
(3, 'zaragozasssss'),
(4, 'zaragozasssss'),
(5, 'zaragoza'),
(6, 'badajoz');

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
(3, 'Espanya'),
(4, 'Catalunya'),
(5, 'france'),
(6, 'France'),
(7, 'France'),
(8, 'France'),
(9, 'France'),
(10, 'France');

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
  `email` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `login`
--

INSERT INTO `login` (`idLogin`, `password`, `email`) VALUES
(0, 'fwervw5f43twgsc', '12345'),
(1, '12345', 'tremosa@gmail.com'),
(2, '54321', 'jorrillo@gmail.com'),
(3, '456789', 'lopez@gmail.com'),
(9, '12345', 'tremosaa@gmail.com'),
(10, '12345', 'tremosaak@gmail.com'),
(11, '12345', 'carolina@gmail.com'),
(13, '12345', 'carol@gmail.com'),
(14, '12345', 'tremossa@gmail.com'),
(15, '12345', 'tremosssa@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de la taula `product`
--

CREATE TABLE `product` (
  `idProduct` int(5) NOT NULL,
  `nameProduct` varchar(60) NOT NULL,
  `desciption` varchar(600) NOT NULL,
  `photo` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `product`
--

INSERT INTO `product` (`idProduct`, `nameProduct`, `desciption`, `photo`) VALUES
(1, 'Aascensión Aneto', 'subir al Aneto y después bajarlo', '/photoaneto/'),
(2, 'buceo con cocodrilos', 'bucear con cocodrilos sin que te muerdan ', 'photoCocodrilo'),
(4, 'camisa roja muy roja', 's', 'foto '),
(5, 'camisa roja muy roja', 's', 'foto ');

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
  `idCity` int(3) NOT NULL,
  `numberAsses` int(4) NOT NULL,
  `dataAdmission` datetime NOT NULL,
  `idRol` int(1) NOT NULL,
  `idLogin` int(10) NOT NULL,
  `idLevel` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcament de dades per a la taula `user`
--

INSERT INTO `user` (`idUser`, `name`, `surname`, `email`, `idCountry`, `idCity`, `numberAsses`, `dataAdmission`, `idRol`, `idLogin`, `idLevel`) VALUES
(0, 'Usuario anónimo', 'anonimo', 'anonimos00000', 1, 1, 0, '2019-10-25 00:00:00', 1, 0, 1),
(1, 'Sergio', 'TREMOSA', 'TREMOSASERGIO@GMAIL.COM', 4, 1, 1000, '2010-10-15 00:00:00', 2, 1, 3),
(3, 'Pedro', 'jorrillo', 'jorrillo@gmail.com', 3, 1, 51, '2019-10-15 00:00:00', 1, 2, 1),
(15, 'juan', 'lopez', 'lopez@gmail.com', 3, 1, 26, '2019-10-16 12:34:13', 1, 3, 1);

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `assesment`
--
ALTER TABLE `assesment`
  ADD PRIMARY KEY (`idUser`,`idProduct`),
  ADD KEY `idProduct` (`idProduct`);

--
-- Índexs per a la taula `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idCategory`),
  ADD KEY `idCategoryFhater` (`idCategoryFhater`);

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
-- Índexs per a la taula `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`idCity`);

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
  ADD KEY `idCity` (`idCity`),
  ADD KEY `idRol` (`idRol`),
  ADD KEY `idLevel` (`idLevel`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `category`
--
ALTER TABLE `category`
  MODIFY `idCategory` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la taula `categoryfather`
--
ALTER TABLE `categoryfather`
  MODIFY `idCategoryFhater` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT per la taula `city`
--
ALTER TABLE `city`
  MODIFY `idCity` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT per la taula `country`
--
ALTER TABLE `country`
  MODIFY `idCountry` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la taula `leveluser`
--
ALTER TABLE `leveluser`
  MODIFY `idLevel` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la taula `login`
--
ALTER TABLE `login`
  MODIFY `idLogin` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT per la taula `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la taula `rol`
--
ALTER TABLE `rol`
  MODIFY `idRol` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la taula `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idCountry`) REFERENCES `country` (`idCountry`),
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`idCity`) REFERENCES `city` (`idCity`),
  ADD CONSTRAINT `user_ibfk_3` FOREIGN KEY (`idRol`) REFERENCES `rol` (`idRol`),
  ADD CONSTRAINT `user_ibfk_4` FOREIGN KEY (`idLevel`) REFERENCES `leveluser` (`idLevel`),
  ADD CONSTRAINT `user_ibfk_5` FOREIGN KEY (`idLogin`) REFERENCES `login` (`idLogin`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
