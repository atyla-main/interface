'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      orderUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'Orders',
          key: 'uuid'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      amount: {
        allowNull: false,
        type: Sequelize.JSONB
      },
      reference: {
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      statusHistory: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      paymentMethod: {
        allowNull: false,
        type: Sequelize.STRING
      },
      paymentData: {
        allowNull: false,
        type: Sequelize.JSONB
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
    return queryInterface.dropTable('Payments');
  }
};