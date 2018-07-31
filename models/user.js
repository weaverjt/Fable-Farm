module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      userName : DataTypes.STRING,
      imageURL : DataTypes.STRING,

    });
  
    // // association one-to-many with Stories
    // User.associate = function(models) {

    //     User.hasMany(models.Story,{
    //         onDelete:"cascade"
    //     });
    // };
  
    // // association one-to-many with Fragments
    // User.associate = function(models) {

    //     User.hasMany(models.Fragment,{
    //         onDelete:"cascade"
    //     });
    // };
  
    // // association one-to-many with Characters
    // User.associate = function(models) {

    // User.hasMany(models.Character,{
    //     onDelete:"cascade"
    //     });
    // };

    User.associate = function(models) {

        User.hasMany(models.Story,{
            onDelete:"cascade"
            });

        User.hasMany(models.Fragment,{
            onDelete:"cascade"
            });

        User.hasMany(models.Character,{
            onDelete:"cascade"
            });
        };

  
    return User;
  };
  