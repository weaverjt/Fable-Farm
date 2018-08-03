use `iex3sl99yiw8g8qe`;
INSERT INTO Categories (catName) VALUES ("Fantasy");
INSERT INTO Categories  (catName) VALUES ("Sci-fi");
INSERT INTO Categories (catName) VALUES ("Horror");
INSERT INTO Categories  (catName) VALUES ("Slice of life");
INSERT INTO Categories (catName) VALUES ("Drama/Romance");
INSERT INTO Categories (catName) VALUES ("Historical Fiction");
INSERT INTO Categories  (catName) VALUES ("Mystery/Triller");
INSERT INTO Categories (catName) VALUES ("Comedy");

INSERT INTO Users (userName,userFirebase,imageURL) VALUES("ChrisHandsome","XPYu09HWP9RlsFFOCgLONJQIsWx1","https://tse3.mm.bing.net/th?id=OIP.hvdz5y0csSUUEDGaguPO8gHaLH&pid=15.1&P=0&w=300&h=300");
INSERT INTO Users (userName,userFirebase,imageURL) VALUES("EdisonY ","lD5O4kT3TfhLVdUAyTbyfXkDSXh2","https://tse2.mm.bing.net/th?id=OIP.J5uIbuQQqqGB6wQ6TKG-cgAAAA&pid=15.1&P=0&w=300&h=300");
INSERT INTO Users (userName,userFirebase,imageURL) VALUES("Paul234","Z8c8voCMZuP0VwoTCUO1MD6TS2W2","https://tse4.mm.bing.net/th?id=OIP.qQCffuqhUzZdX8d13WTJJQHaJn&pid=15.1&P=0&w=300&h=300");
INSERT INTO Users (userName,userFirebase,imageURL) VALUES("Danaerys","ZmW7Dh9ONhPcBgu9Cu3ab5N9Me82","https://tse2.mm.bing.net/th?id=OIP.wB9H6ARO_5MPs7ats0sD2gHaHa&pid=15.1&P=0&w=300&h=300");
INSERT INTO Users (userName,userFirebase,imageURL) VALUES("Clark865","6lO3OnVx68NrjP8FH467tXmCCrq2","https://tse1.mm.bing.net/th?id=OIP.vMUfnSRfJyOu1e62zljQVQHaIa&pid=15.1&P=0&w=300&h=300");
INSERT INTO Users (userName,userFirebase,imageURL) VALUES("Billy5453","chN6TafIpGfVOFLfg7PtgdXd54q1","https://tse2.mm.bing.net/th?id=OIP.Fwtvbv_Mn-b5fUXuincIkwHaGw&pid=15.1&P=0&w=165&h=151");
INSERT INTO Users (userName,userFirebase,imageURL) VALUES("John415","dqYf5tx97MRcHTZk9IQM9A2PLCp2","https://tse4.mm.bing.net/th?id=OIP.NhCYta1M0tL5FW4EPhjSEAHaKC&pid=15.1&P=0&w=300&h=300");

-- INSERT INTO characters (charName,stories,userId) VALUES ("Hulk", "this is the story about Hulk",2);
-- INSERT INTO characters (charName,stories,userId) VALUES ("SpongeBob", "this is the story about SpongeBob",3);
-- INSERT INTO characters (charName,stories,userId) VALUES ("Bart Simpson", "this is the story about Bart Simpson",2);
-- INSERT INTO characters (charName,stories,userId) VALUES ("Dracula", "this is the story about Dracula",4);
-- INSERT INTO characters (charName,stories,userId) VALUES ("Mickey Mouse", "this is the story about Mickey Mouse",5);
-- INSERT INTO characters (charName,stories,userId) VALUES ("Donal Trump", "this is the story about Donald Trump",1);
-- INSERT INTO characters (charName,stories,userId) VALUES ("Magic Johnson", "this is the story about Magic Johnson",2);

INSERT INTO Characters (charName,userId) VALUES ("Hulk",2);
INSERT INTO Characters (charName,userId) VALUES ("SpongeBob",3);
INSERT INTO Characters (charName,userId) VALUES ("Bart Simpson",2);
INSERT INTO Characters (charName,userId) VALUES ("Dracula",4);
INSERT INTO Characters (charName,userId) VALUES ("Mickey Mouse",5);
INSERT INTO Characters (charName,userId) VALUES ("Donal Trump",1);
INSERT INTO Characters (charName,userId) VALUES ("Magic Johnson",2);

INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("Northern Exposure Story #1","winter in northLands","While traveling in the Northwoods, Mr. Squints..","none",False,2,2);
INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("Star Striker Story #2","On Planet Xzibit-1599","In far away Galaxy...","none",False,4,1);
INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("Le Chaton Story #3","in Paris - 1948","Meow...","none",False,5,1);
INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("This is Story #4","Summer in the Dark alley","Once upon a time there was...","none",False,1,3);
INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("This is Story #5","Raining under the bridge","Once upon a time there was...","none",False,1,4);
INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("This is Story #6","Inside Peter's body","Once upon a time there was...","none",False,3,5);
INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("This is Story #7","At the End of the world","Once upon a time there was...","none",False,2,5);
INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("This is Story #8","At school during finals","Once upon a time there was...","none",False,4,2);
INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("This is Story #9","At Lambeau Field","Once upon a time there was...","none",False,4,3);
INSERT INTO Stories (title,settings,storyText,imageURL,iscompleted,categoryId,userId) VALUES ("This is Story #10","On my chair behind the castle","Once upon a time there was...","none",False,2,1);

INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #1",false,0,1,1);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #2",false,0,4,1);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #3",false,0,3,1);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #4",false,0,4,1);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #5",false,0,1,2);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #6",false,0,1,3);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #7",false,0,1,4);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #8",false,0,2,2);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #9",false,0,3,2);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #10",false,0,5,2);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #11",false,0,4,3);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #12",false,0,2,3);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #13",false,0,4,5);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #14",false,0,5,6);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #15",false,0,3,5);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #16",false,0,2,5);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #17",false,0,1,6);
INSERT INTO Fragments(fragmentText,status,previousId,userId,StoryId) VALUES ("this is my contribution #18",false,0,1,7);


select * from Fragments;
select * from Characters;
select * from Stories;
select * from Users;
select * from Categories;