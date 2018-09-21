'use strict';
module.exports = (sequelize, DataTypes) => {
  var Property = sequelize.define('Property', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    wording: {
      type: DataTypes.STRING,
      allowNull: true
    },
    propertyNature: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coOwnership: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rentalState: {
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
    coutry: {
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
  Property.associate = function(models) {
    Property.hasMany(models.Mandate, {
      as: 'mandates',
      foreignKey: 'propertyUuid'
    });
    Property.belongsTo(models.User, {
      foreignKey: 'userUuid'
    });
  };
  return Property;
};
