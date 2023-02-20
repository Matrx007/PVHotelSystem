-- MariaDB dump 10.19  Distrib 10.8.6-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: hotel
-- ------------------------------------------------------
-- Server version	10.8.6-MariaDB-1:10.8.6+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appointments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room` int(11) DEFAULT NULL,
  `user` int(11) NOT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room` (`room`),
  KEY `user` (`user`),
  CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`room`) REFERENCES `rooms` (`id`),
  CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES
(18,1,1,'2023-02-16','2023-02-23'),
(19,1,1,'2023-01-31','2023-02-03'),
(20,1,1,'2023-02-07','2023-02-10');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(63) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `price` smallint(6) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `pictures` longtext DEFAULT NULL CHECK (json_valid(`pictures`)),
  `count` int(2) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES
(1,'Ühekohaline',40,'Väike hubane ruum ühele.','[\"https://images.trvl-media.com/lodging/75000000/74250000/74242600/74242531/9b2b2d66.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\", \"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/5a476c74.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\"]',4),
(2,'Kahekohaline',75,'Kahene tube paarile.','[\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/1436d39c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\",\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/bf3c0cbc.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\",\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/79035584.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\"]',4),
(3,'Kahe voodiga',80,'Kahene tube kahele.','[\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/83c80c39.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\",\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/917201ab.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\",\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/c43c9335.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\"]',2),
(4,'Kolmekohaline',100,'Ühe kahekohalise ja ühe ühekohalise voodiga.','[\"https://images.trvl-media.com/lodging/75000000/74250000/74242600/74242531/1331f409.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\",\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/42361b97.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\",\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/11995beb.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\"]',5),
(5,'Sviit',150,'Mitme toaga, kahekohalise voodiga.','[\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/9f0abbf8.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\",\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/bcb18a26.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\",\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/5dfe5424.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\",\"https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/f5bad581.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium\"]',1);
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session_tokens`
--

DROP TABLE IF EXISTS `session_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session_tokens` (
  `user` int(11) DEFAULT NULL,
  `token` varchar(40) NOT NULL,
  KEY `user` (`user`),
  CONSTRAINT `session_tokens_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session_tokens`
--

LOCK TABLES `session_tokens` WRITE;
/*!40000 ALTER TABLE `session_tokens` DISABLE KEYS */;
INSERT INTO `session_tokens` VALUES
(1,'d705dce43b9b31e364bc020fcb42d69f63f3d442'),
(2,'2bda4110335756d357f7898e7ee1fb2d63f3d45c');
/*!40000 ALTER TABLE `session_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(63) NOT NULL,
  `password` blob DEFAULT NULL,
  `firstname` varchar(63) NOT NULL,
  `lastname` varchar(63) NOT NULL,
  `type` enum('customer','admin') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usrname_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'client',0xA116FC579B4BAFEC8E140A802DE41B0C,'John','Doe','customer'),
(2,'admin',0xF9BFECAE58D5C72E95224E9CC2B44146,'Kuri','Admin','admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-20 22:51:27
