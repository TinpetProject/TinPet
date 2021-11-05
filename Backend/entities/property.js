'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    propertyID: DataTypes.UUID,
    name: DataTypes.STRING
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;
};