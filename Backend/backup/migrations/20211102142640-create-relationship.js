'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Relationship', {
      relationshipID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      targetUserID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      isLiked: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      isMatched: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      isFriend: {
        type: Sequelize.BOOLEAN,
        default: false
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
    return queryInterface.dropTable('Relationship');
  }
};