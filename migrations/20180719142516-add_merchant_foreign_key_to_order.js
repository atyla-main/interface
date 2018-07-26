'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Orders', 'merchantUuid', {
      type: Sequelize.UUID,
      reference: {
        model: 'Merchants',
        key: 'uuid'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Orders', 'merchantUuid');
  }
};
