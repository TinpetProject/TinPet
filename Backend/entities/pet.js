'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    petID: DataTypes.UUID,
    userID: DataTypes.UUID,
    name: DataTypes.STRING,
    genderID: DataTypes.UUID,
    petTypeID: DataTypes.UUID,
    description: DataTypes.STRING,
    dob: DataTypes.DATEONLY
  }, {});
  Pet.associate = function(models) {
    // associations can be defined here
  };
  return Pet;
};