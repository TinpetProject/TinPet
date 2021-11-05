'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetType = sequelize.define('PetType', {
    petTypeID: DataTypes.UUID,
    name: DataTypes.STRING
  }, {});
  PetType.associate = function(models) {
    // associations can be defined here
  };
  return PetType;
};