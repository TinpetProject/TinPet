'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('Conversation', {
    conversationID: DataTypes.UUID,
    userOneID: DataTypes.UUID,
    userTwoID: DataTypes.UUID,
    status: DataTypes.BOOLEAN
  }, {});
  Conversation.associate = function(models) {
    // associations can be defined here
  };
  return Conversation;
};