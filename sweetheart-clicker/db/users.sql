DROP DATABASE IF EXISTS newgame; 
CREATE DATABASE newgame;

\c newgame;

CREATE TABLE  users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR,
    score VARCHAR,
    iscall BOOLEAN,
    ismiss BOOLEAN,
    iskiss BOOLEAN,
    isletsgetbusy BOOLEAN,
    isbemine BOOLEAN
);
