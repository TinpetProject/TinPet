'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpeciesTable = sequelize.define('SpeciesTable', {
    speciesID: DataTypes.UUID,
    name: DataTypes.STRING
  }, {});
  SpeciesTable.associate = function(models) {
    // associations can be defined here
  };
  return SpeciesTable;
};