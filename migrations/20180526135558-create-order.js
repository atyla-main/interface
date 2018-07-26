'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'Users',
          key: 'uuid'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      statusHistory: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      amount: {
        allowNull: false,
        type: Sequelize.JSONB
      },
      fees: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 4)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      source: {
        allowNull: false,
        type: Sequelize.STRING
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};