DROP DATABASE IF EXISTS store; 
CREATE DATABASE store;

\c store;

CREATE TABLE  store (
    ID SERIAL PRIMARY KEY,
    candy VARCHAR,
    price VARCHAR
);

INSERT INTO store (candy, price)
VALUES ('call me', 15 ),('miss you',150)('kiss me',1500)('lets get busy',15000)('be mine',150000)
;