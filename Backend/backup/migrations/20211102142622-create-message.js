'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Message', {
      messageID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userID: {
        type: Sequelize.UUID,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        default: true
      },
      content: {
        type: Sequelize.TEXT
      },
      reactionID: {
        type: Sequelize.UUID,
        allowNull: false
      },
      conversationID: {
        type: Sequelize.UUID,
        allowNull: false
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
    return queryInterface.dropTable('Message');
  }
};