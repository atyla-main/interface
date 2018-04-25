'use strict';
module.exports = (sequelize, DataTypes) => {
  var AdminUser = sequelize.define('AdminUser', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  AdminUser.associate = (models) => {
    AdminUser.hasMany(models.Role, {
      foreignKey: 'adminUserId',
      as: 'roles',
    });
  };

  return AdminUser;
};