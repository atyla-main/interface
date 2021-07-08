'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Properties', 'coutry', 'country')
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn('Properties', 'country', 'coutry')
  }
};
