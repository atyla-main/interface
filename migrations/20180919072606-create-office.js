'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Offices', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
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
      wording: {
        type: Sequelize.STRING,
        allowNull: true
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      officeName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      logo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      postCode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      coutry: {
        type: Sequelize.STRING,
        allowNull: true
      },
      contactInformation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      legalStatus: {
        type: Sequelize.STRING,
        allowNull: true
      },
      siren: {
        type: Sequelize.STRING,
        allowNull: true
      },
      siret: {
        type: Sequelize.STRING,
        allowNull: true
      },
      rcs: {
        type: Sequelize.STRING,
        allowNull: true
      },
      rcsCity: {
        type: Sequelize.STRING,
        allowNull: true
      },
      socialCapital: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      intercommunityTva: {
        type: Sequelize.STRING,
        allowNull: true
      },
      headOffice: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      headOfficeAddress: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nafApe: {
        type: Sequelize.STRING,
        allowNull: true
      },
      professionalCard: {
        type: Sequelize.STRING,
        allowNull: true
      },
      placeOfIssue: {
        type: Sequelize.STRING,
        allowNull: true
      },
      transaction: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      gestion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      activity: {
        type: Sequelize.STRING,
        allowNull: true
      },
      perceiveFunds: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      transactionGuaranteesAmount: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      gestionGuaranteesAmount: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      guaranteeFund: {
        type: Sequelize.STRING,
        allowNull: true
      },
      headOfficeUuid: {
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
    return queryInterface.dropTable('Offices');
  }
};
