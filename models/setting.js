'use strict';
module.exports = (sequelize, DataTypes) => {
  var Setting = sequelize.define('Setting', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    logoPlace: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subtitleColorBackground: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subtitleColorText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    textColor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    defaultPayType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    remunerationAmount: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    defaultPercentage: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    inChargeOfRemuneration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    defaultEscrowAccount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    defaultDelegation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    defaultPenaltyClauseDuration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    defaultSpecialClause: {
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
  Setting.associate = function(models) {
    Setting.belongsTo(models.User, {
      foreignKey: 'userUuid'
    });
    Setting.belongsTo(models.Office, {
      foreignKey: 'officeUuid'
    });
    Setting.belongsTo(models.Contact, {
      foreignKey: 'contactUuid'
    });
    Setting.belongsTo(models.Negociator, {
      foreignKey: 'negociatorUuid'
    });
  };
  return Setting;
};
