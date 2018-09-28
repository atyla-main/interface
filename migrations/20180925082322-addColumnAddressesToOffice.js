'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Offices', 'headOfficePostCode', Sequelize.STRING),
      queryInterface.addColumn('Offices', 'headOfficeCity', Sequelize.STRING),
      queryInterface.addColumn('Offices', 'headOfficeCountry', Sequelize.STRING)
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Offices', 'headOfficePostCode', Sequelize.STRING),
      queryInterface.removeColumn('Offices', 'headOfficeCity', Sequelize.STRING),
      queryInterface.removeColumn('Offices', 'headOfficeCountry', Sequelize.STRING)
    ];
  }
};
