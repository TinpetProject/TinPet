'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResetToken = sequelize.define('ResetToken', {
    token: DataTypes.STRING,
    userID: DataTypes.UUID
  }, {});
  ResetToken.associate = function(models) {
    // associations can be defined here
  };
  return ResetToken;
};