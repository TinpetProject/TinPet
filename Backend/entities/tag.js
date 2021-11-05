'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tagID: DataTypes.UUID,
    userID: DataTypes.UUID,
    postID: DataTypes.UUID
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};