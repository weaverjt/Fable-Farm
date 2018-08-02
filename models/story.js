module.exports = function (sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
        // Giving the Author model a name of type STRING
        title: DataTypes.STRING,
        settings: DataTypes.STRING,
        storyText: DataTypes.STRING,
        imageURL: DataTypes.STRING,
        isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    });


    Story.associate = function (models) {

        Story.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });

        Story.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Story.hasMany(models.Fragment, {
            onDelete: "cascade"
        });
    };



    return Story;
};
