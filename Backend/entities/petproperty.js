'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetProperty = sequelize.define('PetProperty', {
    petPropertyID: DataTypes.UUID,
    petID: DataTypes.UUID,
    propertyID: DataTypes.UUID
  }, {});
  PetProperty.associate = function(models) {
    // associations can be defined here
  };
  return PetProperty;
};