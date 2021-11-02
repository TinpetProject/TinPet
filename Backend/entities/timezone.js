'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timezone = sequelize.define('Timezone', {
    timezoneID: DataTypes.UUID,
    timezone: DataTypes.STRING
  }, {});
  Timezone.associate = function(models) {
    // associations can be defined here
  };
  return Timezone;
};