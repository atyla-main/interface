'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Contacts', 'mandateUuid', {
      type: Sequelize.UUID,
      referece: {
        model: 'Mandates',
        key: 'uuid'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Contacts', 'mandateUuid')
  }
};
