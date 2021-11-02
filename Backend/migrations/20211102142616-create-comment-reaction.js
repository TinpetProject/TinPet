'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CommentReaction', {
      commentReactionID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      commentID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      reactionID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CommentReaction');
  }
};