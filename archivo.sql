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
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
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
