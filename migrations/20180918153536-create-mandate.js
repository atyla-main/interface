'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mandates', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      wording: {
        allowNull: true,
        type: Sequelize.STRING
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
      propertyUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'properties',
          key: 'uuid'
        }
      },
      negociatorOnContract: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      mandateNumber: {
        allowNull: true,
        type: Sequelize.STRING
      },
      signatureDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      saleAmount: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      remunerationType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      percentage:	{
        type: Sequelize.DECIMAL(5, 4),
        allowNull: true
      },
      lumpSum: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      inChargeOfRemuneration: {
        type: Sequelize.STRING,
        allowNull: true
      },
      escrowAccount: {
        type: Sequelize.STRING,
        allowNull: true
      },
      delegationOfPower: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      mandateAdvertising: {
        type: Sequelize.STRING,
        allowNull: true
      },
      penaltyClauseDuration: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      specialClause: {
        type: Sequelize.STRING,
        allowNull: true
      },
      documentsRequired: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      documentsRequiredPerson: {
        type: Sequelize.STRING,
        allowNull: true
      },
      partsFilingDeadline: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      mandateReference: {
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
    return queryInterface.dropTable('Mandates');
  }
};
