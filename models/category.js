module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        // Giving the Author model a name of type STRING
        catName: DataTypes.STRING,
    });

    Category.associate = function (models) {

        Category.hasMany(models.Story, {
            onDelete: "cascade"
        });
    };
    return Category;
};
