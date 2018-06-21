'use strict';
module.exports = (sequelize, DataTypes) => {
  var Prospect = sequelize.define('Prospect', {
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