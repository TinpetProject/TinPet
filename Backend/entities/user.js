'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userID: DataTypes.UUID,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    avatar: DataTypes.STRING,
    nickname: DataTypes.STRING,
    backgroundImage: DataTypes.STRING
  }, {freezeTableName: true});
  User.associate = function(models) {
    // associations can be defined here
    //User.hasMany(models["Album"],{foreignKey: 'id'});
  };
  return User;
};