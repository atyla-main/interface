'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment = sequelize.define('Payment', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    amount: {
      allowNull: false,
      type: DataTypes.JSONB
    },
    reference: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [[
          'waiting',
          'received',
          'processed',
          'denied',
          'cancelled',
          'expired',
          'refunded']]
      }
    },
    statusHistory: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.JSONB)
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [[
          'crypto_wire',
          'bank_wire',
          'direct_debit',
          'credit_card']]
      }
    },
    paymentData: {
      allowNull: false,
      type: DataTypes.JSONB
    }
  });
  Payment.associate = function(models) {
    Payment.belongsTo(models.Order, {
      foreignKey: 'orderUuid'
    });
  };
  return Payment;
};