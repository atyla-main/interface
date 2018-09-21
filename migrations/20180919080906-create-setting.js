'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Settings', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      logoPlace: {
        type: Sequelize.STRING,
        allowNull: true
      },
      subtitleColorBackground: {
        type: Sequelize.STRING,
        allowNull: true
      },
      subtitleColorText: {
        type: Sequelize.STRING,
        allowNull: true
      },
      textColor: {
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
      contactUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'Contacts',
          key: 'uuid'
        }
      },
      negociatorUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'Negociators',
          key: 'uuid'
        }
      },
      defaultPayType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      remunerationAmount: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      defaultPercentage: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      inChargeOfRemuneration: {
        type: Sequelize.STRING,
        allowNull: true
      },
      defaultEscrowAccount: {
        type: Sequelize.STRING,
        allowNull: true
      },
      defaultDelegation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      defaultPenaltyClauseDuration: {
        type: Sequelize.STRING,
        allowNull: true
      },
      defaultSpecialClause: {
        type: Sequelize.STRING,
        allowNull: true
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
    return queryInterface.dropTable('Settings');
  }
};
