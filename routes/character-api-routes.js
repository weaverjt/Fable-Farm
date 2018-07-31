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

}