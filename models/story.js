module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      // Giving the Author model a name of type STRING
      storyText : DataTypes.STRING,
      imageURL : DataTypes.STRING,
      isCompleted : DataTypes.BOOLEAN,

    });

    // // association with USER
    // Story.associate = function(models) {
    // // We're saying that a Fragment should belong to a user
    // // A story can't be created without an user due to the foreign key constraint
    // Story.belongsTo(models.User, {
    //     foreignKey: {
    //     allowNull: false
    //     }
    //     });
    // };

    //     // association with STORIES
    // Story.associate = function(models) {
    // // We're saying that a Fragment should belong to a category
    // // A story can't be created without an category due to the foreign key constraint
    // Story.belongsTo(models.Category, {
    //     foreignKey: {
    //     allowNull: false
    //     }
    //     });
    // };


    Story.associate = function(models) {
        
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
        };



    return Story;
  };
  