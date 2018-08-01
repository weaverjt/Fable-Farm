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

    app.get("/api/fragments", function(req, res) {
        var query = {};
        if (req.query.story_id) {
          query.StoryId = req.query.story_id;
          console.log(query.StoryId);
        }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Fragment.findAll({
          where: query,
          include: [db.Story]
        }).then(function(dbPost) {
          res.json(dbPost);
        });
      });


    app.post("/api/fragment", function(req, res) {  //success
        db.Fragment.create(req.body).then(function(dbFragment) {
            res.json(dbFragment)
        })
    })

    app.delete("/api/fragment/:id", function(req, res) {   //success
        db.Fragment.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbFragment) {
            res.json(dbFragment)
        })
    })

    app.put("/api/fragment/:id", function (req, res) {  //success
        db.Fragment.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(function (dbFragment) {
                res.json(dbFragment)
            })

            console.log(req.body);
    })
  
    


};