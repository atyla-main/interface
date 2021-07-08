'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Mandates', 'specialClause'),
      queryInterface.addColumn('Mandates', 'specialClause', {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.JSONB)
      })
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('Mandates', 'specialClause'),
      queryInterface.addColumn('Mandates', 'specialClause', {
        allowNull: true,
        type: Sequelize.STRING
      })
    ]
  }
};
