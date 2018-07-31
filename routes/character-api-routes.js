<<<<<<< HEAD
var db = require("../models");

module.exports = function(app)  {

    app.get("/api/characters", function(req, res) {
        db.Character.findAll({
            include: [{all: true}]
        })
    }).then(function(dbCharacter) {
        res.json(dbCharacter);
    });

    app.post("/api/characters", function(req, res) {
        db.Character.create(req.body).then(function(dbCharacter) {
            res.json(dbCharacter);
        })
    })

    app.put("/api/characters/:id", function(req, res) {
        db.Character.update(req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function(dbCharacter) {
            res.json(dbCharacter)
        })
    })

    app.get("/api/characters/:id", function(req, res) {
        db.Character.findOne({
            where: {
                id: req.body.id
            },
            include: [{
                all: true
            }]
        }).then(function(dbCharacter) {
            res.json(dbCharacter)
        })
    })

=======
var db = require("../models");

module.exports = function(app) {
  app.get("/characters", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Character.findAll({
    
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });


  app.get("/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
    
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

>>>>>>> bb5aa23a73fc5c4c6c8aa33baa5d8a894ec0320d
}