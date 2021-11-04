'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Photo', {
      photoID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      albumID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      postID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Photo');
  }
};