-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_food
CREATE DATABASE IF NOT EXISTS `db_food` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_food`;

-- Dumping structure for table db_food.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `user_id` int NOT NULL,
  `fetched_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_food.categories: ~0 rows (approximately)
DELETE FROM `categories`;
INSERT INTO `categories` (`id`, `name`, `user_id`, `fetched_at`, `created_at`, `updated_at`) VALUES
	(21, 'Makanan', 18, '2024-07-20 09:51:18', '2024-07-20 09:51:18', '2024-07-20 09:51:18'),
	(22, 'Snack', 18, '2024-07-20 09:51:18', '2024-07-20 09:51:18', '2024-07-20 09:51:18');

-- Dumping structure for table db_food.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `lang` varchar(10) NOT NULL,
  `auth_id` int NOT NULL,
  `status` int NOT NULL,
  `type` int NOT NULL,
  `count` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `category_id` int DEFAULT NULL,
  `term_id` int DEFAULT NULL,
  `price` int NOT NULL,
  `preview` text,
  `stock` int NOT NULL,
  `fetched_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_food.products: ~0 rows (approximately)
DELETE FROM `products`;
INSERT INTO `products` (`id`, `title`, `slug`, `lang`, `auth_id`, `status`, `type`, `count`, `created_at`, `updated_at`, `category_id`, `term_id`, `price`, `preview`, `stock`, `fetched_at`) VALUES
	(29, 'Nasi Goreng Pedas Sekali', 'nasi-goreng', 'en', 18, 1, 6, 0, '2024-07-20 11:39:57', '2024-07-20 11:39:57', 21, 29, 15000, '//portal.panelo.co/paneloresto/uploads/20/10/21102016032509585f8fab0e771b0.jpg', 1, '2024-07-20 11:39:57'),
	(30, 'Beng Beng', 'beng-beng', 'en', 18, 1, 6, 0, '2024-07-20 09:51:18', '2024-07-20 09:51:18', 22, 30, 2000, '//portal.panelo.co/paneloresto/uploads/20/12/07122016073215155fcdc7ab18dd9.jpg', 10, '2024-07-20 09:51:18'),
	(31, 'Tahu2sw', 'tahu', 'en', 18, 1, 6, 0, '2024-07-20 09:51:18', '2024-07-20 11:49:39', 22, 31, 2000, '//portal.panelo.co/paneloresto/uploads/20/12/07122016073247255fcdd4354c14a.jpg', 20, '2024-07-20 09:51:18'),
	(33, 'Pop Mie kuah', 'pop-mie', 'en', 18, 1, 6, 0, '2024-07-20 09:51:18', '2024-07-20 09:51:18', 21, 33, 6000, '//portal.panelo.co/paneloresto/uploads/20/12/07122016073250025fcdd54a7e85b.jpg', 1, '2024-07-20 09:51:18'),
	(34, 'nasi goreng', 'nasi-goreng', 'en', 18, 1, 6, 0, '2024-07-20 09:51:18', '2024-07-20 09:51:18', 21, 34, 12000, '//portal.panelo.co/paneloresto/uploads/20/10/21102016032509585f8fab0e771b0.jpg', 10, '2024-07-20 09:51:18'),
	(41, 'Mi goyeng', 'jasd', 'en', 18, 1, 6, 0, '2024-07-20 12:21:28', '2024-07-20 12:21:28', 22, NULL, 10010, 'tes', 10, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
