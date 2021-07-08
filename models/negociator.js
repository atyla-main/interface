'use strict';
module.exports = (sequelize, DataTypes) => {
  var Negociator = sequelize.define('Negociator', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wording: {
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
    commercialAgent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    rsac: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rsacPlace: {
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
  Negociator.associate = function(models) {
    Negociator.hasMany(models.Mandate, {
      as: 'mandates',
      foreignKey: 'negociatorUuid'
    });
    Negociator.belongsTo(models.User, {
      foreignKey: 'userUuid'
    });
    Negociator.belongsTo(models.Office, {
      foreignKey: 'officeUuid'
    });
  };
  return Negociator;
};
