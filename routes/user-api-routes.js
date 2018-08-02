var db = require("../models");

module.exports = function(app) {
    //get All User
    app.get("/api/user", function(req, res) {
        db.User.findAll({}).then(function(dbUser) {
            res.json(dbUser)
        })
    });
    //get One User
    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({
            where: {
                userId:req.params.id
            },
            include: [{all: true}]
        }).then(function(dbUser) {
            res.json(dbUser)
        })
    })
    //get One User firebase
    app.get("/api/users/:UID", function(req, res) {              //success
        db.User.findOne({
            where: {
                userfirebase:req.params.UID
            },
            // include: [{all: true}]
       
        }).then(function(dbUser) {
            res.json(dbUser)
        })
    })


    //update
    app.put("api/user/:id", function(req,res) {
        db.User.update(
            req.body,
            {
                where: {
                    userId: req.body.id
                }
            }).then(function(dbUser) {
                res.json(dbUser)
            })
        
    })
    //delete route
    app.delete("api/user/:id", function(req, res) {
        db.User.destroy({
            where: {
                userId: req.params.id
            }
        })
    })


}