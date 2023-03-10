/* To Run script
 * psql -U postgres -a -f ".\scripts\setup.sql"
 */

/* Drop Tables if Exist*/
DROP DATABASE IF EXISTS ugmqualitydb WITH (force);

/*  Create Database */
CREATE DATABASE ugmqualitydb WITH OWNER ugm;

/* switch to databse */
\c ugmqualitydb

/* Create Tables */
CREATE TABLE quality_record_categories (
	id serial PRIMARY KEY,
	category VARCHAR ( 255 ) NOT NULL
);

CREATE TABLE quality_record_classifications (
	id serial PRIMARY KEY,
	classification VARCHAR ( 255 ) NOT NULL
);

CREATE TABLE customer_type (
	id serial PRIMARY KEY,
	type VARCHAR ( 255 ) NOT NULL
);

CREATE TABLE customers (
	id serial PRIMARY KEY,
	type int references customer_type(id) NOT NULL,
	contractor_builder_name VARCHAR( 255 ),
	first_name VARCHAR( 255 ),
	last_name VARCHAR( 255 )
);

CREATE TABLE quality_records (
	id serial PRIMARY KEY,
    date DATE NOT NULL,
	customer int references customers(id) NOT NULL,
    issue VARCHAR( 255 ) NOT NULL,
    cost int NOT NULL,
	category int references quality_record_categories(id) NOT NULL,
	classification int references quality_record_classifications(id) NOT NULL,
    visit int not null
);


/* Insert Default Data For Classification */
INSERT INTO quality_record_classifications (classification) VALUES ('major');
INSERT INTO quality_record_classifications (classification) VALUES ('minor'); 

/* Insert Default Data for Customer Type*/
INSERT INTO customer_type (type) VALUES ('contractor_builder');
INSERT INTO customer_type (type) VALUES ('retail');

/* Insert Default Data For Category */
INSERT INTO quality_record_categories (category) VALUES ('chip not filled in');
INSERT INTO quality_record_categories (category) VALUES ('left parts at Shop');
INSERT INTO quality_record_categories (category) VALUES ('left tool at shop');
INSERT INTO quality_record_categories (category) VALUES ('left tool at job site');
INSERT INTO quality_record_categories (category) VALUES ('silicone on counter surface');
INSERT INTO quality_record_categories (category) VALUES ('silicone other');
INSERT INTO quality_record_categories (category) VALUES ('silicone around sink lip');
INSERT INTO quality_record_categories (category) VALUES ('not sufficient silicone');
INSERT INTO quality_record_categories (category) VALUES ('sink not even');
INSERT INTO quality_record_categories (category) VALUES ('faucet hole not even');
INSERT INTO quality_record_categories (category) VALUES ('Missing Faucet hole');
INSERT INTO quality_record_categories (category) VALUES ('seam uneven');
INSERT INTO quality_record_categories (category) VALUES ('B/S polished wrong');
INSERT INTO quality_record_categories (category) VALUES ('Countertop polished wrong');
INSERT INTO quality_record_categories (category) VALUES ('Countertop does not fit correctly');
INSERT INTO quality_record_categories (category) VALUES ('Part Broken');
INSERT INTO quality_record_categories (category) VALUES ('Part was not cut to Customer Layout');
INSERT INTO quality_record_categories (category) VALUES ('Not measured correctly');
INSERT INTO quality_record_categories (category) VALUES ('Damage to customer property');