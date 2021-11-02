'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentReaction = sequelize.define('CommentReaction', {
    commentReactionID: DataTypes.UUID,
    userID: DataTypes.UUID,
    commentID: DataTypes.UUID,
    reactionID: DataTypes.UUID
  }, {});
  CommentReaction.associate = function(models) {
    // associations can be defined here
  };
  return CommentReaction;
};