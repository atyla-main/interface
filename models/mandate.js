'use strict';
const moment = require('moment')
const _ = require('lodash')

module.exports = (sequelize, DataTypes) => {
  var Mandate = sequelize.define('Mandate', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    wording: {
      allowNull: true,
      type: DataTypes.STRING
    },
    status: {
      allowNull: true,
      type: DataTypes.STRING
    },
    internalReference: {
      allowNull: true,
      type: DataTypes.STRING
    },
    negociatorOnContract: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mandateNumber: {
      allowNull: true,
      type: DataTypes.STRING
    },
    signatureDate: {
      type: DataTypes.DATE,
      allowNull: true,
      get() {
        if (this.getDataValue('signatureDate')) {
          return moment(this.getDataValue('signatureDate')).format('DD-MM-YYYY');
        }
      }
    },
    saleAmount: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    remunerationType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    percentage:	{
      type: DataTypes.DECIMAL(5, 4),
      allowNull: true
    },
    lumpSum: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    inChargeOfRemuneration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    escrowAccount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delegationOfPower: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    mandateAdvertising: {
      type: DataTypes.STRING,
      allowNull: true
    },
    penaltyClauseDuration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    specialClause: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true
    },
    documentsRequired: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    documentsRequiredPerson: {
      type: DataTypes.STRING,
      allowNull: true
    },
    partsFilingDeadline: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mandateReference: {
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
  }, {
    hooks: {
      beforeCreate: (mandate, options) => {
        if (!_.isEmpty(mandate.signatureDate) && moment(mandate.signatureDate,'DD-MM-YYYY', true).isValid()) {
          mandate.signatureDate = moment(mandate.signatureDate,'DD-MM-YYYY').format()
        } else {
          delete mandate['signatureDate']
        }
      },
      beforeUpdate: (mandate, options) => {
        if (!_.isEmpty(mandate.signatureDate) && moment(mandate.signatureDate,'DD-MM-YYYY', true).isValid()) {
          mandate.signatureDate = moment(mandate.signatureDate,'DD-MM-YYYY').format()
        } else {
          delete mandate['signatureDate']
        }
      }
    }
  });
  Mandate.associate = function(models) {
    Mandate.belongsTo(models.User, {
      foreignKey: 'userUuid'
    });
    Mandate.belongsTo(models.Office, {
      foreignKey: 'officeUuid'
    });
    Mandate.hasMany(models.Contact, {
      as: 'contacts',
      foreignKey: 'mandateUuid'
    });
    Mandate.belongsTo(models.Negociator, {
      foreignKey: 'negociatorUuid'
    });
    Mandate.belongsTo(models.Property, {
      foreignKey: 'propertyUuid'
    });
  };
  return Mandate;
};
