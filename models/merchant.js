'use strict';
module.exports = (sequelize, DataTypes) => {
  var Merchant = sequelize.define('Merchant', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    legalName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    commissionRate: {
      allowNull: false,
      type: DataTypes.DECIMAL(5, 4)
    }
  });
  Merchant.associate = function(models) {
  };
  return Merchant;
};