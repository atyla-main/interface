'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      paymentUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'Payments',
          key: 'uuid'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      amount: {
        allowNull: false,
        type: Sequelize.JSONB
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Transactions');
  }
};