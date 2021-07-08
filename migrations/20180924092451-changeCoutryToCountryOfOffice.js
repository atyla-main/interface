'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Offices', 'coutry', 'country')
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('Offices', 'country', 'coutry')
  }
};
