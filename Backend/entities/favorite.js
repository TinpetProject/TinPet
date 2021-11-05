'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    favoriteID: DataTypes.UUID,
    name: DataTypes.STRING,
  }, {freezeTableName: true});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};