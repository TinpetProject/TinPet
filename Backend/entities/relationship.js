'use strict';
module.exports = (sequelize, DataTypes) => {
  const Relationship = sequelize.define('Relationship', {
    relationshipID: DataTypes.UUID,
    userID: DataTypes.UUID,
    targetUserID: DataTypes.UUID,
    isLiked: DataTypes.BOOLEAN,
    isMatched: DataTypes.BOOLEAN,
    isFriend: DataTypes.BOOLEAN
  }, {});
  Relationship.associate = function(models) {
    // associations can be defined here
  };
  return Relationship;
};