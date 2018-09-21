'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contacts', {
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
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fax: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
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
      otherFirstName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      conjugalStatus: {
        type: Sequelize.STRING,
        allowNull: true
      },
      maritalState: {
        type: Sequelize.STRING,
        allowNull: true
      },
      birthName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      partner: {
        type: Sequelize.STRING,
        allowNull: true
      },
      weddingPacsSate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      weddingPacsPlace: {
        type: Sequelize.STRING,
        allowNull: true
      },
      birthDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      birthPlace: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: true
      },
      job: {
        type: Sequelize.STRING,
        allowNull: true
      },
      notes: {
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
      legalStatus: {
        type: Sequelize.STRING,
        allowNull: true
      },
      otherStatus: {
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
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      rcsCity: {
        type: Sequelize.STRING,
        allowNull: true
      },
      rm: {
        type: Sequelize.STRING,
        allowNull: true
      },
      codeNafApe: {
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
    return queryInterface.dropTable('Contacts');
  }
};
