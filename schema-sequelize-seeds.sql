INSERT INTO `sequelize_farble`.`users` (`imageURL`, `userName`) VALUES ('<none>', 'Billy');
INSERT INTO `sequelize_farble`.`users` (`imageURL`, `userName`) VALUES ('<none>', 'Bob');
INSERT INTO `sequelize_farble`.`users` (`imageURL`, `userName`) VALUES ('<none>', 'Ryan');
INSERT INTO `sequelize_farble`.`users` (`imageURL`, `userName`) VALUES ('<none>', 'Cary');
INSERT INTO `sequelize_farble`.`users` (`imageURL`, `userName`) VALUES ('<none>', 'Joe');
INSERT INTO `sequelize_farble`.`users` (`imageURL`, `userName`) VALUES ('<none>', 'Eddie');

USE sequelize_farble;
INSERT INTO categories (catName) VALUES ("Fantasy");
INSERT INTO categories  (catName) VALUES ("Sci-fi");
INSERT INTO categories (catName) VALUES ("Horror");
INSERT INTO categories  (catName) VALUES ("Slice of life");
INSERT INTO categories (catName) VALUES ("Drama/Romance");
INSERT INTO categories (catName) VALUES ("Historical Fiction");
INSERT INTO categories  (catName) VALUES ("Mystery/Triller");
INSERT INTO categories (catName) VALUES ("Comedy");


USE sequelize_farble;

INSERT INTO characters (charName,stories,userId) VALUES ("Hulk", "this is the story about Hulk",2);
INSERT INTO characters (charName,stories,userId) VALUES ("SpongeBob", "this is the story about SpongeBob",3);
INSERT INTO characters (charName,stories,userId) VALUES ("Bart Simpson", "this is the story about Bart Simpson",2);
INSERT INTO characters (charName,stories,userId) VALUES ("Dracula", "this is the story about Dracula",4);
INSERT INTO characters (charName,stories,userId) VALUES ("Mickey Mouse", "this is the story about Mickey Mouse",5);
