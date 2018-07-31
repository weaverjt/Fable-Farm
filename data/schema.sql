-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS fable_db;
-- Creates the "todolist" database --
CREATE DATABASE fable_db;

USE fable_db;

CREATE TABLE users (
		userId INT AUTO_INCREMENT NOT NULL,
        imageURL VARCHAR(255),
        userName VARCHAR(255) NOT NULL,  
             
        PRIMARY KEY (userId)
);

CREATE TABLE stories (
		storyId INT AUTO_INCREMENT NOT NULL,
        storyText VARCHAR(255) NOT NULL,
        userId   INT NOT NULL,
        catId	INT NOT NULL,
        createAt TIMESTAMP,
        IsEnd BOOLEAN NOT NULL,
        PRIMARY KEY (storyId)
);

CREATE TABLE fragments (
		fragmentId INT AUTO_INCREMENT NOT NULL,
        fragmentText VARCHAR(255) NOT NULL,
        status	BOOLEAN NOT NULL,
        previousId INT NOT NULL,
        userId  INT NOT NULL,
        storyId INT NOT NULL,
		createAt TIMESTAMP,
        
        PRIMARY KEY (fragmentId)
);

CREATE TABLE characters (
		characterId INT AUTO_INCREMENT NOT NULL,
        charName VARCHAR(255) NOT NULL,
        userId	INT NOT NULL,
        stories INT NOT NULL,
		createAt TIMESTAMP,
        PRIMARY KEY (characterId)
);


CREATE TABLE categories (
		catId INT AUTO_INCREMENT NOT NULL,
        catName VARCHAR(255) NOT NULL,     
        PRIMARY KEY (catId)
);



