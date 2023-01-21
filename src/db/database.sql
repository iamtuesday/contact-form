import {createPool} from mysql2;


export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Roy@@2022',
    port: 3306,
    database: 'contactdb',
})









-- CREATE DATABSE IF NOT EXISTS contactdb;

-- USE contactdb;

-- CREATE TABLE contact user (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) DEFAULT NULL,
--     password VARCHAR(255) DEFAULT NULL,
--     PRIMARY KEY (id)    
-- )

-- DESCRIBE user;