'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PaymentMethodHistories', {
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
      infos: {
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
    return queryInterface.dropTable('PaymentMethodHistories');
  }
};