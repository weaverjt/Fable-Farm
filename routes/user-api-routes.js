var db = require("../models");

module.exports = function(app) {

    // Post
    app.post("/api/user", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {  //success
            res.json(dbUser);
        })
    })

    //get All User
    app.get("/api/user", function(req, res) {
        db.User.findAll({}).then(function(dbUser) {             //success
            res.json(dbUser)
        })
    });

    //success;

    //get One User
    app.get("/api/users/:id", function(req, res) {              //success
        db.User.findOne({
            where: {
                Id:req.params.id
            },
            // include: [{all: true}]
            include : [db.Story,db.Character,db.Fragment]
        }).then(function(dbUser) {
            res.json(dbUser)
        })
    })
    //update
    app.put("/api/user/:id", function(req, res) {          //success
        db.User.update(req.body,{
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        })
    })   


    //delete route
app.delete("/api/user/:id", function(req, res){    //success  cannot delete if has foreign key attached to it
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbUser) {
        res.json(dbUser);
    })
})

}