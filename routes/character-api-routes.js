var db = require("../models");

module.exports = function (app) {

    app.get("/api/characters", function (req, res) {
        db.Character.findAll({
            include: [{ all: true }]
        }).then(function (dbCharacter) {
            res.json(dbCharacter);
        })
    });

    app.post("/api/characters", function (req, res) {
        db.Character.create({
            charName: req.body.charName,
            userId: req.body.userId
        }).then(function (dbCharacter) {
            res.json(dbCharacter);
        })
    })

    app.put("/api/characters/:id", function (req, res) {
        db.Character.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbCharacter) {
                res.json(dbCharacter)
            })
    })

    app.get("/api/characters/:id", function (req, res) {
        db.Character.findOne({
            where: {
                id: req.body.id
            },
            include: [{
                all: true
            }]
        }).then(function (dbCharacter) {
            res.json(dbCharacter)
        })
    })

}