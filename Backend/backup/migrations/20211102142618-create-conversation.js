'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Conversation', {
      conversationID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userOneID: {
        type: Sequelize.UUID,
        allowNull: false
      },
      userTwoID: {
        type: Sequelize.UUID,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        default: true
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
    return queryInterface.dropTable('Conversation');
  }
};