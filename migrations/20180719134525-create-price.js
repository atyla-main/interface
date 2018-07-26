'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Prices', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      icoUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'Icos',
          key: 'uuid'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      amount: {
        allowNull: false,
        type: Sequelize.JSONB
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endAmountRaised: {
        type: Sequelize.INTEGER
      },
      startAmountRaised: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Prices');
  }
};