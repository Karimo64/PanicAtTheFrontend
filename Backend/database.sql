-- "BAMX" database v2.0.0
CREATE DATABASE BAMX;
USE BAMX;

DROP TABLE IF EXISTS Donor;
CREATE TABLE Donor(
	donor_id INT NOT NULL AUTO_INCREMENT,
	donor_name CHAR(50),
    donor_localization CHAR(50),
    donor_organization CHAR(200),
    donor_type CHAR(100),
    
    PRIMARY KEY(donor_id)
);

DROP TABLE IF EXISTS Product;
CREATE TABLE Product(
	product_id INT NOT NULL AUTO_INCREMENT,
	product_name CHAR(25) NOT NULL,
    
    PRIMARY KEY(product_id)
);

DROP TABLE IF EXISTS DonorProduct;
CREATE TABLE DonorProduct(
	donor_id INT NOT NULL,
    product_id INT NOT NULL,
    donation_date TIMESTAMP,
    donation_observation CHAR(200),
    product_quantity FLOAT,
    product_unit CHAR(25),
    
    PRIMARY KEY(donor_id),
    FOREIGN KEY(donor_id) REFERENCES Donor(donor_id),
    FOREIGN KEY(product_id) REFERENCES Product(product_id)
);

DROP TABLE IF EXISTS DonorMail;
CREATE TABLE DonorMail(
	donor_id INT NOT NULL,
    donor_mail CHAR(100),
    
    PRIMARY KEY(donor_id),
    FOREIGN KEY(donor_id) REFERENCES Donor(donor_id)
);

DROP TABLE IF EXISTS DonorPhone;
CREATE TABLE DonorPhone(
	donor_id INT NOT NULL,
    donor_phone CHAR(15),
    
    PRIMARY KEY(donor_id),
    FOREIGN KEY(donor_id) REFERENCES Donor(donor_id)
);

DROP TABLE IF EXISTS Unit;
CREATE TABLE Unit(
	unit_name CHAR(25) NOT NULL,
    
    PRIMARY KEY(unit_name)
);
-- CRUD Procedures

-- Create a donor
DROP PROCEDURE CreateDonor
DELIMITER //
CREATE PROCEDURE CreateDonor (
	donor_name CHAR(50),
    donor_localization CHAR(50),
    donor_organization CHAR(200),
    donor_type CHAR(100)
)
BEGIN
	INSERT INTO Donor VALUES(null, donor_name, donor_localization, donor_organization, donor_type);
END //
DELIMITER ;

-- Add data contact to a donor
DROP PROCEDURE AddPhoneToDonor
DELIMITER //
CREATE PROCEDURE AddPhoneToDonor(
	donor_id INT,
	donor_phone CHAR(15)
)
BEGIN
	INSERT INTO DonorPhone VALUES(donor_id, donor_phone);
END //
DELIMITER ;

DROP PROCEDURE AddMailToDonor
DELIMITER //
CREATE PROCEDURE AddMailToDonor(
	donor_id INT,
    donor_mail CHAR(100)
)
BEGIN
	INSERT INTO DonorMail VALUES(donor_id, donor_mail);
END //
DELIMITER ;

-- Add products for donators
DROP PROCEDURE AddProductForDonation
DELIMITER //
CREATE PROCEDURE AddProductForDonation(
	new_product_name CHAR(25)
)
BEGIN
	
	IF NOT EXISTS (SELECT product_name FROM Product WHERE product_name = new_product_name) THEN
		INSERT INTO Product VALUES (null, LOWER(new_product_name));
	END IF;
END //
DELIMITER ;

-- Add a new unit
DROP PROCEDURE AddDonationUnit
DELIMITER //
CREATE PROCEDURE AddDonationUnit(
	unit_name CHAR(25)
)
BEGIN
	IF NOT EXISTS (SELECT Unit.unit_name FROM Unit WHERE Unit.unit_name = unit_name) THEN
		INSERT INTO Unit VALUES (LOWER(unit_name));
	END IF;
END //
DELIMITER ;

-- Add donation/products for a donor
DROP PROCEDURE AddDonationToDonor
DELIMITER //
CREATE PROCEDURE AddDonationToDonor(
	donor_id INT,
    product_name CHAR(25),
    donation_date TIMESTAMP,
    donation_observation CHAR(200),
    product_quantity FLOAT,
    product_unit CHAR(25)
)
BEGIN
	INSERT INTO DonorProduct VALUES(donor_id, product_name, donation_date, donation_observation, product_quantity, product_unit);
END //
DELIMITER ;