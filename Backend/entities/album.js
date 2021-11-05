'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    albumID: DataTypes.UUID,
    userID: DataTypes.UUID,
    name: DataTypes.STRING,
  }, {freezeTableName: true});
  Album.associate = function(models) {
    // associations can be defined here
    //this.belongsToMany(models["User"],{foreignKey: 'id'});
  };
  return Album;
};