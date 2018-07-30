// var db = require("../models");

module.exports = function (app) {

    //get method for approved api fragments
    app.get("/api/fragments/:storyId", function (req, res) {
        var query = {};
        console.log(req.params.storyId);
            // query.UserId = req.query.userId;
            query.StoryId = req.params.storyId;
            query.Status = "true";
        })

        // db.Post.findAll({
        //     where: query,
        //     include: [db.User, db.Story]
        // }).then(function (dbPost) {
        //     res.json(dbPost);
        // })
    // });


}