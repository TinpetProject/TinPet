'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PetProperty', {
      petPropertyID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      petID: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      propertyID: {
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
    return queryInterface.dropTable('PetProperty');
  }
};