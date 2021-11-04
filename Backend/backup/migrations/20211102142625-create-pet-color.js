'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PetColor', {
      petColorID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      petID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      colorID: {
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
    return queryInterface.dropTable('PetColor');
  }
};