'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetFavorite = sequelize.define('PetFavorite', {
    petFavoriteID: DataTypes.UUID,
    favoriteID: DataTypes.UUID,
    petID: DataTypes.UUID,
  }, {freezeTableName: true});
  PetFavorite.associate = function(models) {
    // associations can be defined here
    //this.belongsToMany(models["User"],{foreignKey: 'id'});
  };
  return PetFavorite;
};