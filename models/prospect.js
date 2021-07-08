'use strict';
module.exports = (sequelize, DataTypes) => {
  var Prospect = sequelize.define('Prospect', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
    	validate: {
    		isEmail: true
    	},
    	allowNull: false
    }
  });
  return Prospect;
};
