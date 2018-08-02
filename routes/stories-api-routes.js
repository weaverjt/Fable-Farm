var db = require("../models");

module.exports = function(app) {
    app.post("/api/story", function(req, res) {
        db.Story.create(req.body).then(function(dbStory) {
            res.json(dbStory);
        })
    })

    app.delete("/api/story", function(req, res){
        db.Story.destroy({
            where: {
                storyId: req.params.id
            }
        }).then(function(dbStory) {
            res.json(dbStory);
        })
    })

    app.put("/api/story/:id", function(req, res) {
        db.Story.update({
            where: {
                storyId: req.params.id
            }
        }).then(function(dbStory) {
            res.json(dbStory);
        })
    })

    app.get("/api/story/:id", function(req, res) {
        db.Story.findOne({
            where: {
                storyId: req.params.id
            },
            // include: [{all: true}]
            include : [db.Fragment]
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

    app.get("/myStories", function(req, res) {
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