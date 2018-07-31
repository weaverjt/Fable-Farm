var db = require("../models");

module.exports = function (app) {

    app.get("/api/characters", function (req, res) {
        db.Character.findAll({
            include: [{ all: true }]
        }).then(function (dbCharacter) {
            res.json(dbCharacter);
        })
    });
//success
    app.post("/api/characters", function (req, res) {
        console.log(req.body);
        db.Character.create({
            charName: req.body.charName,
            UserId: req.body.UserId
        }).then(function (dbCharacter) {
            res.json(dbCharacter);
        })
    })
    //Success

    app.put("/api/characters/:id", function (req, res) {
        db.Character.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(function (dbCharacter) {
                res.json(dbCharacter)
            })
    })
    //success

    app.get("/api/characters/:id", function (req, res) {
        db.Character.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                all: true
            }]
        }).then(function (dbCharacter) {
            res.json(dbCharacter)
        })
           //success
    })

}