'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('Roles', 'adminUserId', 'userId');
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.renameColumn('Roles', 'userId', 'adminUserId');
  }
};
