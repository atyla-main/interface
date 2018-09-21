'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Mandates', 'contactUuid')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Mandates', 'contactUuid', {
      type: Sequelize.UUID,
      referece: {
        model: 'Contacts',
        key: 'uuid'
      }
    })
  }
};
