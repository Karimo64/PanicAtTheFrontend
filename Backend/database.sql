-- "BAMX" database v1.0
CREATE DATABASE BAMX;
USE BAMX;

CREATE TABLE Donor(
	donor_id INT NOT NULL AUTO_INCREMENT,
	donor_name CHAR(50),
    donor_localization CHAR(50),
    donor_organization CHAR(200),
    donor_type CHAR(100),
    
    PRIMARY KEY(donor_id)
);
DROP TABLE IF EXISTS Donor;

CREATE TABLE Product(
	product_id INT NOT NULL AUTO_INCREMENT,
	product_name CHAR(25) NOT NULL,
    
    PRIMARY KEY(product_id)
);
DROP TABLE IF EXISTS Product;

CREATE TABLE DonorProduct(
	donor_id INT NOT NULL,
    product_id INT NOT NULL,
    donation_date TIMESTAMP,
    donation_observation CHAR(200),
    product_quantity FLOAT,
    product_unit CHAR(25),
    
    FOREIGN KEY(donor_id) REFERENCES Donor(donor_id),
    FOREIGN KEY(product_id) REFERENCES Product(product_id)
);
DROP TABLE IF EXISTS DonorProduct;

CREATE TABLE DonorMail(
	donor_id INT NOT NULL,
    donor_mail CHAR(100),
    
    FOREIGN KEY(donor_id) REFERENCES Donor(donor_id)
);
DROP TABLE IF EXISTS DonorMail;

CREATE TABLE DonorPhone(
	donor_id INT NOT NULL,
    donor_phone CHAR(15),
    
    FOREIGN KEY(donor_id) REFERENCES Donor(donor_id)
);
DROP TABLE IF EXISTS DonorPhone;