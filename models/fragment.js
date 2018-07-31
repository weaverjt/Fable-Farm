module.exports = function(sequelize, DataTypes) {
    var Fragment = sequelize.define("Fragment", {
      // Giving the Author model a name of type STRING
      fragmentText : DataTypes.STRING,
      status    :DataTypes.BOOLEAN,
      previousId : DataTypes.INTEGER,
    });
  
    // // association with USER
    // Fragment.associate = function(models) {
    //     // We're saying that a Fragment should belong to an User
    //     // A Fragment can't be created without an User due to the foreign key constraint
    //     Fragment.belongsTo(models.User, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };

    // // association with STORIES
    // Fragment.associate = function(models) {
    // // We're saying that a Fragment should belong to a Story
    // // A Fragment can't be created without an Story due to the foreign key constraint
    // Fragment.belongsTo(models.Story, {
    //     foreignKey: {
    //     allowNull: false
    //     }
    //    });
    // };

      // association with USER
    Fragment.associate = function(models) {
        
        Fragment.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }          
        });

        Fragment.belongsTo(models.Story, {
                foreignKey: {
                allowNull: false
           }
        });
      };


    return Fragment;
  };
  