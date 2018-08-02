module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // Giving the Author model a name of type STRING
        userName: DataTypes.STRING,
        userFirebase: DataTypes.STRING,
        imageURL: DataTypes.STRING,

    });

    User.associate = function (models) {

        User.hasMany(models.Story, {
            onDelete: "cascade"
        });

        User.hasMany(models.Fragment, {
            onDelete: "cascade"
        });

        User.hasMany(models.Character, {
            onDelete: "cascade"
        });
    };


    return User;
};
