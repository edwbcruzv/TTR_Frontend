-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: casebuilder
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `anexos_multimedia`
--

LOCK TABLES `anexos_multimedia` WRITE;
/*!40000 ALTER TABLE `anexos_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `anexos_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `casoestudio`
--

LOCK TABLES `casoestudio` WRITE;
/*!40000 ALTER TABLE `casoestudio` DISABLE KEYS */;

/*!40000 ALTER TABLE `casoestudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `clasificacion_multimedia`
--

LOCK TABLES `clasificacion_multimedia` WRITE;
/*!40000 ALTER TABLE `clasificacion_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `clasificacion_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `equipo`
--

LOCK TABLES `equipo` WRITE;
/*!40000 ALTER TABLE `equipo` DISABLE KEYS */;
INSERT INTO `equipo` VALUES (2,1,'Equipo 1',NULL),(2,3,'3CM3',NULL);
/*!40000 ALTER TABLE `equipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `equipo_casos_estudio`
--

LOCK TABLES `equipo_casos_estudio` WRITE;
/*!40000 ALTER TABLE `equipo_casos_estudio` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipo_casos_estudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `equipo_estudiante`
--

LOCK TABLES `equipo_estudiante` WRITE;
/*!40000 ALTER TABLE `equipo_estudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipo_estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
INSERT INTO `estudiante` VALUES (5,3,'12345678'),(9,4,'2018630611'),(12,6,'11111111111'),(10,7,'20182020'),(12,8,'2018630611'),(12,9,'2018650912'),(12,10,'2018648912'),(10,11,'2018769845'),(9,12,'2020989890'),(13,13,'2018630611'),(13,14,'2018784563'),(12,15,'2015647832'),(13,16,'2018968734'),(13,17,'2018475934'),(10,18,'2019123456'),(9,19,'2020865451'),(8,20,'2020651234'),(8,21,'2020987654'),(7,22,'2021459812'),(8,23,'2020983478'),(9,24,'2020549012'),(9,26,'2020128943'),(11,27,'2019891254'),(9,28,'2019567832'),(10,29,'2019642901'),(10,30,'2020763342'),(10,31,'2020127354'),(11,32,'2017465122'),(11,33,'2017651234'),(10,34,'2020981234'),(8,35,'2021348754'),(11,36,'2018437861'),(9,37,'2020453127'),(11,38,'2020471234'),(8,39,'2021471212'),(10,40,'2020454545'),(10,41,'2021989898'),(10,42,'2020768484'),(9,43,'2021546372'),(8,44,'2021751001');
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `estudiante_equipos`
--

LOCK TABLES `estudiante_equipos` WRITE;
/*!40000 ALTER TABLE `estudiante_equipos` DISABLE KEYS */;
INSERT INTO `estudiante_equipos` VALUES (6,3),(7,3);
/*!40000 ALTER TABLE `estudiante_equipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `grupo`
--

LOCK TABLES `grupo` WRITE;
/*!40000 ALTER TABLE `grupo` DISABLE KEYS */;
INSERT INTO `grupo` VALUES (1,5,NULL,NULL,'796SG2',NULL,'sakxsa','fsjd',NULL),(2,5,NULL,NULL,'H9NURZ',NULL,'1CM1','Base de datos',NULL),(3,5,NULL,NULL,'AF0CZ4',NULL,'2CM11','Diseño de sistemas digitales',NULL),(4,2,NULL,NULL,'0YYF9K',NULL,'2CM2','Redes',NULL),(5,2,NULL,NULL,'G7VYSE',NULL,'2CM4','Desarrollo de software',NULL);
/*!40000 ALTER TABLE `grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `grupo_casoestudio`
--

LOCK TABLES `grupo_casoestudio` WRITE;
/*!40000 ALTER TABLE `grupo_casoestudio` DISABLE KEYS */;
/*!40000 ALTER TABLE `grupo_casoestudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `inscripcion`
--

LOCK TABLES `inscripcion` WRITE;
/*!40000 ALTER TABLE `inscripcion` DISABLE KEYS */;
INSERT INTO `inscripcion` VALUES (0,6,2,1),(0,7,2,2),(0,7,3,3),(0,7,1,4);
/*!40000 ALTER TABLE `inscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `lugar_multimedia`
--

LOCK TABLES `lugar_multimedia` WRITE;
/*!40000 ALTER TABLE `lugar_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `lugar_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `mensaje`
--

LOCK TABLES `mensaje` WRITE;
/*!40000 ALTER TABLE `mensaje` DISABLE KEYS */;
/*!40000 ALTER TABLE `mensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `objetivos_multimedia`
--

LOCK TABLES `objetivos_multimedia` WRITE;
/*!40000 ALTER TABLE `objetivos_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `objetivos_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `organizaciones_multimedia`
--

LOCK TABLES `organizaciones_multimedia` WRITE;
/*!40000 ALTER TABLE `organizaciones_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `organizaciones_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `preguntas_multimedia`
--

LOCK TABLES `preguntas_multimedia` WRITE;
/*!40000 ALTER TABLE `preguntas_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `preguntas_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `profesor`
--

LOCK TABLES `profesor` WRITE;
/*!40000 ALTER TABLE `profesor` DISABLE KEYS */;
INSERT INTO `profesor` VALUES (2,'464654654d654v65x4v','ESCOM-IPN'),(5,'1111','UPITA'),(45,'2012233222','ESCOM');
/*!40000 ALTER TABLE `profesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `profesor_casoestudio`
--

LOCK TABLES `profesor_casoestudio` WRITE;
/*!40000 ALTER TABLE `profesor_casoestudio` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesor_casoestudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `profesor_casos_estudio_compartidos`
--

LOCK TABLES `profesor_casos_estudio_compartidos` WRITE;
/*!40000 ALTER TABLE `profesor_casos_estudio_compartidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `profesor_casos_estudio_compartidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `protagonistas_multimedia`
--

LOCK TABLES `protagonistas_multimedia` WRITE;
/*!40000 ALTER TABLE `protagonistas_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `protagonistas_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `recursomultimedia`
--

LOCK TABLES `recursomultimedia` WRITE;
/*!40000 ALTER TABLE `recursomultimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `recursomultimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `recursomultimedia_casoestudio`
--

LOCK TABLES `recursomultimedia_casoestudio` WRITE;
/*!40000 ALTER TABLE `recursomultimedia_casoestudio` DISABLE KEYS */;
/*!40000 ALTER TABLE `recursomultimedia_casoestudio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `resultados_multimedia`
--

LOCK TABLES `resultados_multimedia` WRITE;
/*!40000 ALTER TABLE `resultados_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `resultados_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `resumen_multimedia`
--

LOCK TABLES `resumen_multimedia` WRITE;
/*!40000 ALTER TABLE `resumen_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `resumen_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `riesgos_multimedia`
--

LOCK TABLES `riesgos_multimedia` WRITE;
/*!40000 ALTER TABLE `riesgos_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `riesgos_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `temporalidades_multimedia`
--

LOCK TABLES `temporalidades_multimedia` WRITE;
/*!40000 ALTER TABLE `temporalidades_multimedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `temporalidades_multimedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (fecha_nacimiento,id,apellido_materno,apellido_paterno,email,no)VALUES ('2023-11-28',1,'Vazquez','Perez','luis@gmail.com','Luis','$2a$10$0u.ojLT5a0zyICr1gW2QNeHLwhG4cqKNSbXUiu0WGqCd8.bRjhpj2','ADMIN','luis'),('2023-11-28',2,'Vazquez','Perez','luis_teacher@gmail.com','Luis','$2a$10$PctQgdJDsxPRZ0Tefpq6ieEj/XSImMx7hQ3EWQcjyN1UjXlFmAw3a','TEACHER','luis_teacher'),('2023-11-28',3,'Vazquez','Perez','luis_student@gmail.com','Luis','$2a$10$5vewHrd1T6lnxCtbbtmzeudnWwrhq6MzjsUp8e17aB7HP.dFJ5iUC','STUDENT','luis_student'),('2023-12-04',4,'Ejemplo','De','ejemplo@email.com','Alumno','$2a$10$zFXyd0TcUbh7T0QUOLZqAe0zW/mVsej5.l3ILJB0OCluauylMJBoG','STUDENT','alumno_ejemplo'),('2024-01-12',5,'Vega','Martínez','luispruebas@gmail.com','Alberto','$2a$10$76Hd.TBXXk25m7tMakWkvOFl/n69.W2NOhzgqH6t.5kNHRUyO/rF2','TEACHER','Luis_pruebas'),('2024-01-14',6,'ejemplo','de','estudiante@ejemplo.com','Estudiante','$2a$10$unyVQqLYi51G4xfRHI9iIeagIk6HGtNiPbdKmhedSPZGQIa3iebJa','STUDENT','estudiante'),('2024-01-14',7,'Cruz','Bernardo','Edwin@ejemplo.com','Edwin','$2a$10$hpsHqOWjUXsHwGJd9kMT1uAmCzQXbu3Mccsevj3.90sa3CqqWTM6S','STUDENT','Edwin_estudiante'),('2024-01-16',8,'ejemplo','de','estudiante1@gmail.com','estudiante1','$2a$10$YjYc7w6Hp7lIQ6q6Ql/N8.27XO9RjRa48xvFOn7IsCE7LAMI1GS8a','STUDENT','Estudiante1'),('2024-01-16',9,'Ejemplo','De','estudiante2@hotmail.com','Estudiante2','$2a$10$2ACh0mbGScm8XDE13b3pCuBSvUhmsPsVAfPpUvHwDvPyarXGmHoMG','STUDENT','Estudiante2'),('2024-01-16',10,'ejemplo','De','estudiante3@yahoo.com','Estudiante3','$2a$10$n.apCR2ZcD9LZE5ev6z1FeoAUc7KzZfZYyIhziX9yMdkrC2zltDw2','STUDENT','Estudiante3'),('2024-01-16',11,'Ejemplo','De','estudiante4@gmail.com','Estudiante4','$2a$10$Wu5qPM/uLhRhZ6PDWwTh1ee30.A5CHA/2OPCyC0v3.7471B0uNrB.','STUDENT','Estudiante4'),('2024-01-16',12,'Ejemplo','De','estudiante5@yahoo.com','Estudiante5','$2a$10$Rq2o0DIJXk3U9h.zIJdIjeMfSXa5ahpl7a50VxOZv3ugiYI33Hrdm','STUDENT','Estudiante5'),('2024-01-16',13,'Martínez','Vega','luisescom@gmail.com','Luis Alberto','$2a$10$umLn/3pPsx0zzW5ql7ajMOg.rxW8N5KrhQWp.aiD.rlvKxGtdP5RW','STUDENT','LuisESCOM'),('2024-01-16',14,'Cruz','Bernardo','edwinescom@outlook.es','Edwin','$2a$10$3k.hMp4snWt0F0BdSZDfPu.Vs2KbwDIdrVee44DNSPsnf2SGEqyuC','STUDENT','EdwinESCOM'),('2024-01-16',15,'Real','Baltazar','davidescom@yahoo.com','David','$2a$10$xWlTgvzxkf2zIO5IDKnvs.IPb7BBNtI6uPwDpIoOABNd7lzWZ3Cpi','STUDENT','DavidESCOM'),('2024-01-16',16,'Macuilaco','Gonzalez','jonathanescom@gmail.com','Jonathan','$2a$10$50/JvdBWGZYzKQ4HP/hSN.8xX5FaMAzTMTJGk4mU1VDKpPnBdWVG6','STUDENT','JonathanESCOM'),('2024-01-16',17,'Hernandez','Rojas','johanescom@yahoo.com','Johan Ali','$2a$10$LH3Cg/wTGK4xiaNV7QaMcO1eC4wUtaYgmYeCdgq9kwc4XkfQ6ysgi','STUDENT','JohanESCOM'),('2024-01-16',18,'Mendez','Olvera','santiagoescom@gmail.com','Santiago','$2a$10$A7Xr.CXOjyMcB5FZLQ3mhuUqOgtkRsAaUjEyix.8lxY1YIPvRfnf.','STUDENT','SantiagoESCOM'),('2024-01-16',19,'Torres','Campos','joseESCOM@outlook.es','Jose Guadalupe','$2a$10$J98qXSd4t6BKUMk2UYXYN.4iNf3uacUjg9pY5z1SKvwVkT0bh7Aka','STUDENT','JoseESCOM'),('2024-01-16',20,'Flores','Vela','normaescom@gmail.com','Norma','$2a$10$s7Iiygst7iTZcJy6iPaDlOmLIlOZBLQ/QG9ZYxeOMDwv.pTmidCM.','STUDENT','NormaESCOM'),('2024-01-16',21,'Barajas','Garcia','karlaescom@gmail.com','Karla Alejandra','$2a$10$d.i.O2NiR6xo2wIqigEvA.j8eFEYHoUFicrwlSwFD8PsU7mKL7b2m','STUDENT','KarlaESCOM'),('2024-01-16',22,'Casillas','Corona','luceroescom@outlook.es','Lucero','$2a$10$rAdq30kq2Vwul25FPmIdE.UemlobOxSsOaLjw9iuInWfVUwBLnmp.','STUDENT','LuceroESCOM'),('2024-01-16',23,'Santiago','Islas','chrisescom@outlook.es','Christopher Natael','$2a$10$JkOvOeH0c2IDhFHHCyP9w.jtLSq/ittJK6QNi7IYYzbV0ZuBWNjgS','STUDENT','ChrisESCOM'),('2024-01-16',24,'Jimenez','Reyes','urielescom@gmail.com','Uriel','$2a$10$ecep9W3ZLGNpg/DSDYMii.St4NkhtamWI6Q3KZDrOUP8PmJwsR7dS','STUDENT','UrielESCOM'),('2024-01-16',26,'Gordilla','Mendoza','alanescom@outlook.es','Alan','$2a$10$dfpHgywir5vLnFFtYWT51O9Q3CxqDCiQ2A79B7lZHIdquFyPqc2hu','STUDENT','AlanESCOM'),('2024-01-16',27,'Noriega','Vazquez','odetteescom@gmail.com','Odette','$2a$10$Lut9V9f6rTT2nCQLBm11h.ItkwjdORunjKJs/FbhQ36nZv.zVwabS','STUDENT','OdetteESCOM'),('2024-01-16',28,'Mendez','Rodriguez','aldoescom@outlook.es','Aldo Esaú','$2a$10$50r/b/tLZXY/7qtBDIMZAutnyIA2RvJ2wwEltPxB7BSebqYF58/ou','STUDENT','AldoESCOM'),('2024-01-16',29,'Calvo','Garcia','victorescom@gmail.com','Victor Yael','$2a$10$DIl8xCwBZGRrvsRzy7mbOeu37dZpom1TB/hUtxdb./4J8hqVPFRde','STUDENT','VictorESCOM'),('2024-01-16',30,'Gutierrez','Muñoz','edithescom@outlook.es','Edith','$2a$10$FeUHQQ7KdVgF4qpb3pzzReMtp6qWoeqyQTvOlXRIZO.stl0PL/4Fy','STUDENT','EdithESCOM'),('2024-01-16',31,'Bravo','Gonzalez','jenniescom@gmail.com','Jennifer','$2a$10$SUtTPig9Ns5U0sf8h0zSjOSpX3XpLeStB3HxaCHHlZ3FI/BPRo9LO','STUDENT','JenniESCOM'),('2024-01-16',32,'Dominguez','Nora','angelescom@hotmail.com','Angelica','$2a$10$QF.hrFRIErhY1.1t7kSZYOfdwFNNVKaGnPz3/bkGS35pB9TUwDxra','STUDENT','AngelicaESCOM'),('2024-01-16',33,'Lugo','Marquez','rafaescom@hotmail.com','Rafael','$2a$10$oICgp2cZBK/4wUspOOwSUO10H1Tub9mnnElJGsTHfyddm3lCwnsEm','STUDENT','RafaESCOM'),('2024-01-16',34,'Garcia','Arcos','ferescom@outlook.es','Fernanda','$2a$10$nkABPR9rve1lCjr33qVnX.Mo8rlXEHklSt9pk3L8po5Po2YvX/RCK','STUDENT','FerESCOM'),('2024-01-16',35,'Damian','Damian','lupeescom@hotmail.com','Guadalupe','$2a$10$pCgC1HznMKzSf4BQ/yKYfOFQBi4i2p3FeZnVnvvsc2xL6ig4DNANu','STUDENT','LupeESCOM'),('2024-01-16',36,'Rojas','Zarasúa','taniaescom@gmail.com','Tania','$2a$10$jUZfAMVJ7.3yYE.a8VuLSeCrZutOZ3P44QMnlWK08Tn6ldHMrAL0u','STUDENT','TaniESCOM'),('2024-01-16',37,'Díaz','Paz','denysescom@hotmail.com','Denys','$2a$10$Slb1jyg/wgaKtA2Yd3UBuOtzECWtM3JqohdeC1rB9HLQsjak2zaae','STUDENT','denysescom'),('2024-01-16',38,'Cortés','Morales','aylinescom@outlook.es','Aylin','$2a$10$ykcCuL1qz7iC4BJ5kFrM0uIrN/YFBKE8UaMWjeSdHyw9y5zS2pmWK','STUDENT','AylinESCOM'),('2024-01-16',39,'Lopez','Nuñez','sherescom@gmail.com','Sherlyn','$2a$10$qC0ZULv5l2/O25EYDmGjaeMGK0ONiaQvDOnj7rFI7P19bFWvXO43K','STUDENT','sherESCOM'),('2024-01-16',40,'Trejo','Velazquez','anaescom@gmail.com','Ana','$2a$10$hOEvKYiTOPAZpXoq.1sgGOdC7WpeIe.nMiImxszbwVvvQAU1BGCMC','STUDENT','anaescom'),('2024-01-16',41,'Trejo','Martínez','esteescom@yahoo.com','Estela','$2a$10$J/Vgg5UO8kzfN6QVJDFlkeXaEreMg1Z7SQkpR39Uq7UBy6SFNlLTK','STUDENT','EsteESCOM'),('2024-01-16',42,'Torres','Kimi','alexaescom@gmail.com','Alexa','$2a$10$K4hOkg.9DaRU1gNhMzVXjev7TVyYAjTYc15S/vNzEp2/RoTX7OgJa','STUDENT','AlexaESCOM'),('2024-01-16',43,'Melendez','Rivera','samescom@outlook.es','Samantha','$2a$10$bCniU8lLbpgrqibl5zemFOo7B55CavvGr4rINKm8yuaoNxzKhA.3a','STUDENT','SamESCOM'),('2024-01-16',44,'Álarez','Miranda','eveescom@gmail.com','Evelin','$2a$10$jpEIHJApjb3pGw9BE4ocU.t4Ct.cpm3hduOqkjbJxfdTlDCn6faN2','STUDENT','EveESCOM'),('2024-01-16',45,'Valderrama','Peredo','rperedo@gmail.com','Rubén','$2a$10$68o0ykmMrirrGmK1DCD0te8a.8mKhBsS1Wfg548HBjxAsRjjjdpXu','TEACHER','RPeredo');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-17  0:42:56
