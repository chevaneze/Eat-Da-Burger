-- Production Database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT (10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);
INSERT INTO burgers (
burger_name,
devoured
) VALUES
(
"Jalapeno Burger",
0
),
(
"Turkey Burger",
0
),
(
"Veggie Burger",
0
);
