'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetSpecies = sequelize.define('PetSpecies', {
    petSpeciesID: DataTypes.UUID,
    petID: DataTypes.UUID,
    speciesID: DataTypes.UUID
  }, {});
  PetSpecies.associate = function(models) {
    // associations can be defined here
  };
  return PetSpecies;
};