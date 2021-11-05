'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    messageID: DataTypes.UUID,
    userID: DataTypes.UUID,
    status: DataTypes.BOOLEAN,
    createdDate: DataTypes.DATE,
    content: DataTypes.TEXT,
    reactionID: DataTypes.UUID,
    conversationID: DataTypes.UUID
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};