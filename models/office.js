'use strict';
module.exports = (sequelize, DataTypes) => {
  var Office = sequelize.define('Office', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    wording: {
      type: DataTypes.STRING,
      allowNull: true
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    officeName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contactInformation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    legalStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siren: {
      type: DataTypes.STRING,
      allowNull: true
    },
    siret: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rcs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rcsCity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    socialCapital: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    intercommunityTva: {
      type: DataTypes.STRING,
      allowNull: true
    },
    headOffice: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    headOfficeAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    headOfficePostCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    headOfficeCity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    headOfficeCountry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nafApe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    professionalCard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    placeOfIssue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transaction: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    gestion: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    perceiveFunds: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    transactionGuaranteesAmount: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    gestionGuaranteesAmount: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    guaranteeFund: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Office.associate = function(models) {
    Office.hasMany(models.Mandate, {
      as: 'mandates',
      foreignKey: 'officeUuid'
    });
    Office.hasMany(models.Negociator, {
      as: 'negociators',
      foreignKey: 'officeUuid'
    });
    Office.belongsTo(models.User, {
      foreignKey: 'userUuid'
    });
    Office.belongsTo(models.Office, {
      foreignKey: 'headOfficeUuid'
    })
    Office.hasMany(models.Office, {
      as: 'offices',
      foreignKey: 'headOfficeUuid'
    })
  };
  return Office;
};
