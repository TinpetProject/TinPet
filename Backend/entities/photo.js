'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    photoID: DataTypes.UUID,
    albumID: DataTypes.UUID,
    postID: DataTypes.UUID,
    createdDate: DataTypes.DATE,
    link: DataTypes.STRING
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};