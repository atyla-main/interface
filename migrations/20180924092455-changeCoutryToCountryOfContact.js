'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Contacts', 'coutry', 'country')
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('Contacts', 'country', 'coutry')
  }
};
