/* Drop Tables if Exist*/
DROP DATABASE IF EXISTS ugmqualitydb;

/*  Create Database */
CREATE DATABASE ugmqualitydb WITH OWNER ugm;

/* switch to databse */
\c ugmqualitydb

/* Create Tables */
CREATE TABLE quality_record_category (
	id serial PRIMARY KEY,
	category VARCHAR ( 255 ) NOT NULL
);

CREATE TABLE quality_record_classification (
	id serial PRIMARY KEY,
	classification VARCHAR (255 ) NOT NULL
);

CREATE TABLE quality_record (
	id serial PRIMARY KEY,
    date TIMESTAMP NOT NULL,
    issue VARCHAR( 255 ) NOT NULL,
    cost int NOT NULL,
	category int references quality_record_category(id) NOT NULL,
	classification int references quality_record_classification(id) NOT NULL,
    visit int not null
);

/* Insert Default Data For Classification */
INSERT INTO quality_record_classification (classification) VALUES ('major');
INSERT INTO quality_record_classification (classification) VALUES ('minor'); 

/* Insert Default Data For Category */
INSERT INTO quality_record_category (category) VALUES ('chip not filled in');
INSERT INTO quality_record_category (category) VALUES ('left parts at Shop');
INSERT INTO quality_record_category (category) VALUES ('left tool at shop');
INSERT INTO quality_record_category (category) VALUES ('left tool at job site');
INSERT INTO quality_record_category (category) VALUES ('silicone on counter surface');
INSERT INTO quality_record_category (category) VALUES ('silicone other');
INSERT INTO quality_record_category (category) VALUES ('silicone around sink lip');
INSERT INTO quality_record_category (category) VALUES ('not sufficient silicone');
INSERT INTO quality_record_category (category) VALUES ('sink not even');
INSERT INTO quality_record_category (category) VALUES ('faucet hole not even');
INSERT INTO quality_record_category (category) VALUES ('Missing Faucet hole');
INSERT INTO quality_record_category (category) VALUES ('seam uneven');
INSERT INTO quality_record_category (category) VALUES ('B/S polished wrong');
INSERT INTO quality_record_category (category) VALUES ('Countertop polished wrong');
INSERT INTO quality_record_category (category) VALUES ('Countertop does not fit correctly');
INSERT INTO quality_record_category (category) VALUES ('Part Broken');
INSERT INTO quality_record_category (category) VALUES ('Part was not cut to Customer Layout');
INSERT INTO quality_record_category (category) VALUES ('Not measured correctly');
INSERT INTO quality_record_category (category) VALUES ('Damage to customer property');