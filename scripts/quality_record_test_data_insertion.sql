/* To Run script
 * psql -U postgres -a -f ".\scripts\quality_record_test_data_insertion.sql"
 */

/* switch to databse */
\c ugmqualitydb

/* Insert Data into customers*/

/* Contractors/Builders */
insert into customers(type, contractor_builder_name) values (1, 'geber');
insert into customers(type, contractor_builder_name) values (1, 'marrano');
insert into customers(type, contractor_builder_name) values (1, 'tra-mac');
insert into customers(type, contractor_builder_name) values (1, 'pinnacle');
insert into customers(type, contractor_builder_name) values (1, 'cornerstone');

/* Retail */
insert into customers(type, first_name, last_name) values (2, 'Joe', 'McCrank');
insert into customers(type, first_name, last_name) values (2, 'Bill', 'Roberts');
insert into customers(type, first_name, last_name) values (2, 'Cathy', 'Walters');

/* Insert Data into quality_records for testing */
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/18/2022', 6, 'Silicone all over', 275, 5, 1, 1);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/18/2022', 6, 'Need a soap dispenser', 150, 11, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/18/2022', 6, 'Stove piece is not even', 550, 18, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/19/2022', 7, 'Broken Piece', 3800, 16, 1, 1);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/19/2022', 7, 'Damaged Car', 5500, 19, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/20/2022', 8, 'Reworked B/S', 50, 13, 2, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/18/2022', 6, 'Silicone all over', 275, 5, 1, 1);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/18/2022', 6, 'Need a soap dispenser', 150, 11, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/18/2022', 6, 'Stove piece is not even', 550, 18, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/19/2022', 7, 'Broken Piece', 250, 12, 1, 1);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/20/2022', 8, 'Reworked B/S', 50, 13, 2, 0);