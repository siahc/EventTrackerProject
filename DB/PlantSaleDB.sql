-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema plantsaledb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `plantsaledb` ;

-- -----------------------------------------------------
-- Schema plantsaledb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `plantsaledb` DEFAULT CHARACTER SET utf8 ;
USE `plantsaledb` ;

-- -----------------------------------------------------
-- Table `plant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `plant` ;

CREATE TABLE IF NOT EXISTS `plant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `description` TEXT NULL,
  `variegation` TINYINT NULL,
  `price` DOUBLE NULL,
  `rare` TINYINT NULL,
  `image` VARCHAR(5000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS plantsale@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'plantsale'@'localhost' IDENTIFIED BY 'wombat1';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'plantsale'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `plant`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantsaledb`;
INSERT INTO `plant` (`id`, `name`, `description`, `variegation`, `price`, `rare`, `image`) VALUES (1, 'Monstera', 'Large, fenestrated leaves', 1, 450, 1, NULL);
INSERT INTO `plant` (`id`, `name`, `description`, `variegation`, `price`, `rare`, `image`) VALUES (2, 'P. White Wizard', 'White and green leaves', 1, 250, 1, NULL);
INSERT INTO `plant` (`id`, `name`, `description`, `variegation`, `price`, `rare`, `image`) VALUES (3, 'P. Pink Princess', 'Pink and black leaves', 1, 280, 1, NULL);
INSERT INTO `plant` (`id`, `name`, `description`, `variegation`, `price`, `rare`, `image`) VALUES (4, 'P. Splendid', 'red-backed leaves', 0, 150, 1, NULL);
INSERT INTO `plant` (`id`, `name`, `description`, `variegation`, `price`, `rare`, `image`) VALUES (5, 'ZZ Raven', 'Black, palm-like leaves', 0, 35, 0, NULL);

COMMIT;

