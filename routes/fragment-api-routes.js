var db = require("../models");

module.exports = function (app) {
    var query = {};
    //get method for approved api fragments
    app.get("/api/fragments/:storyId", function (req, res) {
       
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