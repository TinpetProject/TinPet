'use strict';
module.exports = (sequelize, DataTypes) => {
  const Settings = sequelize.define('Settings', {
    userID: DataTypes.UUID,
    languageID: DataTypes.UUID,
    timezoneID: DataTypes.UUID,
    themeID: DataTypes.UUID
  }, {});
  Settings.associate = function(models) {
    // associations can be defined here
  };
  return Settings;
};