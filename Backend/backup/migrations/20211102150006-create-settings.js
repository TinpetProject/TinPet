'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Setting', {
      userID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      languageID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      timezoneID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      themeID: {
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
    return queryInterface.dropTable('Setting');
  }
};