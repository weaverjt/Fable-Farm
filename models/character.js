module.exports = function (sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    // Giving the Author model a name of type STRING
    charName: DataTypes.STRING,


  });
  // association with USER
  Character.associate = function (models) {
    // We're saying that a Post should belong to an User
    // A  Character can't be created without an User due to the foreign key constraint
    Character.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Character;
};
