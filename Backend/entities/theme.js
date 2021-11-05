'use strict';
module.exports = (sequelize, DataTypes) => {
  const Theme = sequelize.define('Theme', {
    themeID: DataTypes.UUID,
    name: DataTypes.STRING
  }, {});
  Theme.associate = function(models) {
    // associations can be defined here
  };
  return Theme;
};