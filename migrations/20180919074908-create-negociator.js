'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Negociators', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      wording: {
        type: Sequelize.STRING,
        allowNull: true
      },
      civility: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      commercialAgent: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      rsac: {
        type: Sequelize.STRING,
        allowNull: true
      },
      rsacPlace: {
        type: Sequelize.STRING,
        allowNull: true
      },
      userUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'Users',
          key: 'uuid'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      officeUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'Offices',
          key: 'uuid'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Negociators');
  }
};
