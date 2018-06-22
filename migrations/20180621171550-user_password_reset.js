'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('Users', 'passwordForgotten', { type: Sequelize.BOOLEAN, defaultValue: false }),
      queryInterface.addColumn('Users', 'passwordForgottenDate', Sequelize.DATE)
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Users', 'passwordForgotten'),
      queryInterface.removeColumn('Users', 'passwordForgottenDate')
    ];
  }
};
