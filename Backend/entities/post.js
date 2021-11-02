'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    postID: DataTypes.UUID,
    userID: DataTypes.UUID,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    createdDate: DataTypes.DATE
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};