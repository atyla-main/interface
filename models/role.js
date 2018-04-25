'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    identifier: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    Role.belongsTo(models.AdminUser, {
      foreignKey: 'adminUserId',
      onDelete: 'CASCADE',
    });
  };
  return Role;
};