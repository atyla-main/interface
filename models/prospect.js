'use strict';
module.exports = (sequelize, DataTypes) => {
  var Prospect = sequelize.define('Prospect', {
    email: {
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      type: DataTypes.STRING,
    	validate: {
    		isEmail: true
    	},
    	allowNull: false
    }
  });
  return Prospect;
};