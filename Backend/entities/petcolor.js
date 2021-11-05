'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetColor = sequelize.define('PetColor', {
    petColorID: DataTypes.UUID,
    petID: DataTypes.UUID,
    colorID: DataTypes.UUID
  }, {});
  PetColor.associate = function(models) {
    // associations can be defined here
  };
  return PetColor;
};