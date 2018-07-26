'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Orders', 'icoUuid', {
      type: Sequelize.UUID,
      reference: {
        model: 'Icos',
        key: 'uuid'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Orders', 'icoUuid');
  }
};
