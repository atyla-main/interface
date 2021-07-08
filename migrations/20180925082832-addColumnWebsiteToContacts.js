'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Contacts', 'website', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Contacts', 'website');
  }
};
