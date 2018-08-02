module.exports = function (sequelize, DataTypes) {
  var Fragment = sequelize.define("Fragment", {
    // Giving the Author model a name of type STRING
    fragmentText: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    previousId: DataTypes.INTEGER,
  });


  // association with USER
  Fragment.associate = function (models) {

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
