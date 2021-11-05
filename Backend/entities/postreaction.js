'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostReaction = sequelize.define('PostReaction', {
    postReactionID: DataTypes.UUID,
    userID: DataTypes.UUID,
    postID: DataTypes.UUID,
    reactionID: DataTypes.UUID
  }, {});
  PostReaction.associate = function(models) {
    // associations can be defined here
  };
  return PostReaction;
};