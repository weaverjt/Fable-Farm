var db = require("../models");

module.exports = function(app) {
    app.post("/api/story", function(req, res) {
        db.Story.create(req.body).then(function(dbStory) {  //success
            res.json(dbStory);
        })
    })

    app.delete("/api/story/:id", function(req, res){    //success
        db.Story.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbStory) {
            res.json(dbStory);
        })
    })

    app.put("/api/story/:id", function(req, res) {          //success
        db.Story.update(req.body,{
            where: {
                id: req.params.id
            }
        }).then(function(dbStory) {
            res.json(dbStory);
        })
    })   


    app.get("/api/story/:id", function(req, res) {      //success
        db.Story.findOne({
            where: {
                Id:req.params.id
            },
            include: [{all: true}]
           //include : [db.Fragment,db.User]
        }).then(function(dbStory) {
            res.json(dbStory)
        })
    })

    app.get("/api/stories", function(req, res) {      //success
        db.Story.findAll({include: [db.Category]
        }).then(function(dbStory) {
            res.json(dbStory)
        })
    })

    app.get("/myStories", function(req, res) {          //fail
        db.Story.findAll({
            where: {
                userId: req.params.userId
            },
            include: [{all:true}]
        }).then(function(dbStory) {
            res.json(dbStory)
        })
    })

}