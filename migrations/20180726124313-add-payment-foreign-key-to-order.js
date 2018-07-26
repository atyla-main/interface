'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Orders', 'paymentUuid', {
      type: Sequelize.UUID,
      reference: {
        model: 'Payments',
        key: 'uuid'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Orders', 'paymentUuid');
  }
};
