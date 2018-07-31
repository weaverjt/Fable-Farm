USE farble_db;
INSERT INTO categories (catName) VALUES ("Fantasy");
INSERT INTO categories  (catName) VALUES ("Sci-fi");
INSERT INTO categories (catName) VALUES ("Horror");
INSERT INTO categories  (catName) VALUES ("Slice of life");
INSERT INTO categories (catName) VALUES ("Drama/Romance");
INSERT INTO categories (catName) VALUES ("Historical Fiction");
INSERT INTO categories  (catName) VALUES ("Mystery/Triller");
INSERT INTO categories (catName) VALUES ("Comedy");




select * from categories;


ALTER TABLE fragments
ADD storyId INT NOT NULL;

UPDATE `farble_db`.`fragments` SET `storyId`='1' WHERE `fragmentId`='1';
UPDATE `farble_db`.`fragments` SET `storyId`='1' WHERE `fragmentId`='2';
UPDATE `farble_db`.`fragments` SET `storyId`='1' WHERE `fragmentId`='3';
UPDATE `farble_db`.`fragments` SET `storyId`='1' WHERE `fragmentId`='4';
UPDATE `farble_db`.`fragments` SET `storyId`='1' WHERE `fragmentId`='5';

INSERT INTO `farble_db`.`characters` (`charName`, `userId`, `stories`) VALUES ('Char#1', '2', 'this is the story about Char#1');

INSERT INTO `farble_db`.`stories` (`storyText`, `userId`, `catId`) VALUES ('Story #1', '1', '2');


INSERT INTO `farble_db`.`users` (`imageURL`, `userName`) VALUES ('<none>', 'Jake');



INSERT INTO `farble_db`.`fragments` (`fragmentText`, `status`, `previousId`, `userId`) VALUES ('this is my contribution #1', 'false', 'none', '1');

INSERT INTO `farble_db`.`fragments` (`fragmentText`, `status`, `previousId`, `userId`) VALUES ('this is my contribution user#2', 'false', 'none', '2');

INSERT INTO `farble_db`.`fragments` (`fragmentText`, `status`, `previousId`, `userId`) VALUES ('this is my contribution user#3', 'false', 'none', '3');

INSERT INTO `farble_db`.`fragments` (`fragmentText`, `status`, `previousId`, `userId`) VALUES ('this is my contribution user#4', 'false', 'none', '4');


INSERT INTO `farble_db`.`fragments` (`fragmentText`, `status`, `previousId`, `userId`, `storyId`) VALUES ('2nd fragment story 1 user#1', '0', '4', '1', '1');
INSERT INTO `farble_db`.`fragments` (`fragmentText`, `status`, `previousId`, `userId`, `storyId`) VALUES ('2nd fragment story 1 user#2', '0', '4', '2', '1');
INSERT INTO `farble_db`.`fragments` (`fragmentText`, `status`, `previousId`, `userId`, `storyId`) VALUES ('2nd fragment story 1 user#3', '0', '4', '3', '1');
INSERT INTO `farble_db`.`fragments` (`fragmentText`, `status`, `previousId`, `userId`, `storyId`) VALUES ('2nd fragment story 1 user#4', '0', '4', '4', '1');
INSERT INTO `farble_db`.`fragments` (`fragmentText`, `status`, `previousId`, `userId`, `storyId`) VALUES ('contribution story #3 user #1', '0', '0', '3', '3');

INSERT INTO `farble_db`.`stories` (`storyText`, `userId`, `catId`) VALUES ('Story #2', '3', '4');
INSERT INTO `farble_db`.`stories` (`storyText`, `userId`, `catId`) VALUES ('Story #3', '4', '1');




