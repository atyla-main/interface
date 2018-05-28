'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Users', 'source', Sequelize.STRING),
      queryInterface.addColumn('Users', 'stage', Sequelize.STRING),
      queryInterface.addColumn('Users', 'gender', Sequelize.STRING),
      queryInterface.addColumn('Users', 'birthDate', Sequelize.DATE),
      queryInterface.addColumn('Users', 'birthCity', Sequelize.STRING),
      queryInterface.addColumn('Users', 'phone', Sequelize.STRING),
      queryInterface.addColumn('Users', 'citizenship', Sequelize.STRING),
      queryInterface.addColumn('Users', 'country', Sequelize.STRING),
      queryInterface.addColumn('Users', 'address', Sequelize.STRING),
      queryInterface.addColumn('Users', 'zipCode', Sequelize.STRING),
      queryInterface.addColumn('Users', 'city', Sequelize.STRING),
      queryInterface.addColumn('Users', 'state', Sequelize.STRING),
      queryInterface.addColumn('Users', 'optIn', { type: Sequelize.BOOLEAN, defaultValue: false })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Users', 'source'),
      queryInterface.removeColumn('Users', 'stage'),
      queryInterface.removeColumn('Users', 'gender'),
      queryInterface.removeColumn('Users', 'birthDate'),
      queryInterface.removeColumn('Users', 'birthCity'),
      queryInterface.removeColumn('Users', 'phone'),
      queryInterface.removeColumn('Users', 'citizenship'),
      queryInterface.removeColumn('Users', 'country'),
      queryInterface.removeColumn('Users', 'address'),
      queryInterface.removeColumn('Users', 'zipCode'),
      queryInterface.removeColumn('Users', 'city'),
      queryInterface.removeColumn('Users', 'state'),
      queryInterface.removeColumn('Users', 'optIn')
    ];
  }
};
