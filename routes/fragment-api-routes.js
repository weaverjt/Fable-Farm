var db = require("../models");

module.exports = function (app) {

    //get method for approved api fragments
    app.get("/api/fragments/:storyId", function (req, res) {
        var query = {};
        console.log(req.params.storyId);
        // query.UserId = req.query.userId;
        query.StoryId = req.params.storyId;
        query.Status = "true";
    })
    db.Fragment.findAll({
        where: query,
        include: [db.User, db.Story]
    }).then(function (dbFragment) {
        res.json(dbFragment);
    })

    app.post("/api/fragment", function(req, res) {
        db.Fragment.create(req.body).then(function(dbFragment) {
            res.json(dbFragment)
        })
    })

    app.delete("/api/fragment/:id", function(req, res) {
        db.Fragment.destroy({
            where: {
                fragmentId: req.params.id
            }
        }).then(function(dbFragment) {
            res.json(dbFragment)
        })
    })

    


};