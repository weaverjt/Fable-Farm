// // select all the stories
// select * from stories;

// // select all the stories by categories


// //select count categories by stories
// select count(*) from stories group by CategoryId

// //select stories by user id or userName
// select storyText from stories where userId=1;
// select users.userName, storytext from stories join users on users.Id=userId  where Users.UserName="bob";

// // select fragments where storyId= 1
// select fragments.fragmentText, fragments.StoryId from fragments where StoryId="1";

var db = require("../models");

module.exports = function (app) {

    app.get("/api/category", function (req, res) {      //success
        db.Category.findAll({
            
        }).then(function (dbCharacter) {
            res.json(dbCharacter);
        })
    });

    //success

    app.get("/api/category/:catId", function (req, res) {  //success
        db.Category.findOne({
            where: {
                id: req.params.catId
            },
            include:[{all:true}]               
            
        }).then(function (data) {
            res.json(data)
        })
           //success
    })

}