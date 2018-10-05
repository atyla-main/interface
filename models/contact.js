'use strict';
const moment = require('moment')
const _ = require('lodash')

module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    wording: {
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
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    civility: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    otherFirstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    conjugalStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maritalState: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    partner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weddingPacsDate: {
      allowNull: true,
      type: DataTypes.DATE,
      get() {
        if (this.getDataValue('weddingPacsDate')) {
          return moment(this.getDataValue('weddingPacsDate')).format('DD-MM-YYYY');
        }
      }
    },
    weddingPacsPlace: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthDate: {
      allowNull: true,
      type: DataTypes.DATE,
      get() {
        if (this.getDataValue('birthDate')) {
          return moment(this.getDataValue('birthDate')).format('DD-MM-YYYY');
        }
      }
    },
    birthPlace: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
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
    legalStatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    otherStatus: {
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
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    rcsCity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codeNafApe: {
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
      beforeCreate: (contact, options) => {
        if (!_.isEmpty(contact.weddingPacsDate) && moment(contact.weddingPacsDate,'DD-MM-YYYY', true).isValid()) {
          contact.weddingPacsDate = moment(contact.weddingPacsDate,'DD-MM-YYYY').format()
        } else {
          delete contact['weddingPacsDate']
        }

        if (!_.isEmpty(contact.birthDate) && moment(contact.birthDate,'DD-MM-YYYY', true).isValid()) {
          contact.birthDate = moment(contact.birthDate,'DD-MM-YYYY').format()
        } else {
          delete contact['birthDate']
        }
      },
      beforeUpdate: (contact, options) => {
        if (!_.isEmpty(contact.weddingPacsDate) && moment(contact.weddingPacsDate,'DD-MM-YYYY', true).isValid()) {
          contact.weddingPacsDate = moment(contact.weddingPacsDate,'DD-MM-YYYY').format()
        } else {
          delete contact['weddingPacsDate']
        }

        if (!_.isEmpty(contact.birthDate) && moment(contact.birthDate,'DD-MM-YYYY', true).isValid()) {
          contact.birthDate = moment(contact.birthDate,'DD-MM-YYYY').format()
        } else {
          delete contact['birthDate']
        }
      }
    }
  });
  Contact.associate = function(models) {
    Contact.belongsTo(models.User, {
      foreignKey: 'userUuid'
    });
    Contact.belongsTo(models.Mandate, {
      foreignKey: 'mandateUuid'
    });
  };
  return Contact;
};
