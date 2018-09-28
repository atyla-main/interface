'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Contacts', 'weddingPacsSate', 'weddingPacsDate');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Contacts', 'weddingPacsDate', 'weddingPacsSate');
  }
};
