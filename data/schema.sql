-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS sequelize_fable;
-- Creates the "todolist" database --
CREATE DATABASE sequelize_fable;

USE sequelize_fable;

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
        IsEnd BOOLEAN default 0,
        PRIMARY KEY (storyId)
);

CREATE TABLE fragments (
		fragmentId INT AUTO_INCREMENT NOT NULL,
        fragmentText VARCHAR(255) NOT NULL,
        status	BOOLEAN default 0,
        previousId INT NOT NULL,
        userId  INT NOT NULL,
		createAt TIMESTAMP,
        
        PRIMARY KEY (fragmentId)
);

CREATE TABLE characters (
		characterId INT AUTO_INCREMENT NOT NULL,
        charName VARCHAR(255) NOT NULL,
        userId	INT NOT NULL,
		createAt TIMESTAMP,
        PRIMARY KEY (characterId)
);


CREATE TABLE categories (
		catId INT AUTO_INCREMENT NOT NULL,
        catName VARCHAR(255) NOT NULL,     
        PRIMARY KEY (catId)
);



