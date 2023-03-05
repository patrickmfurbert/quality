/* switch to databse */
\c ugmqualitydb

/* Insert Data into quality_records for testing */
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/18/2022', 'Joe', 'Silicone all over', 275, 5, 1, 1);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/18/2022', 'Joe', 'Need a soap dispenser', 150, 11, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/18/2022', 'Joe', 'Stove piece is not even', 550, 18, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/19/2022', 'Bill', 'Broken Piece', 3800, 16, 1, 1);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/19/2022', 'Bill', 'Damaged Car', 5500, 19, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('8/20/2022', 'Cathy', 'Reworked B/S', 50, 13, 2, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/18/2022', 'Joe', 'Silicone all over', 275, 5, 1, 1);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/18/2022', 'Joe', 'Need a soap dispenser', 150, 11, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/18/2022', 'Joe', 'Stove piece is not even', 550, 18, 1, 0);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/19/2022', 'Bill', 'Broken Piece', 250, 12, 1, 1);
insert into quality_records (date, customer, issue, cost, category, classification, visit) values ('9/20/2022', 'Cathy', 'Reworked B/S', 50, 13, 2, 0);