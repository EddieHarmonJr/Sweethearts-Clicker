DROP DATABASE IF EXISTS newgame; 
CREATE DATABASE newgame;

\c newgame;

CREATE TABLE  users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR,
    score VARCHAR,
    passworddigest VARCHAR,
    iscall BOOLEAN,
    ismiss BOOLEAN,
    iskiss BOOLEAN,
    isletsgetbusy BOOLEAN,
    isbemine BOOLEAN
    -- powerups VARCHAR ARRAY
);

INSERT INTO users (username, score, passworddigest)
VALUES ('test-user', '0', 'strongPassword')