CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wish
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO wish (wish) VALUES ('the bat tumbler');
INSERT INTO wish (wish) VALUES ('a winning loto');
INSERT INTO wish (wish) VALUES ('not to be the black sheep');
