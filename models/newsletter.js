'use strict';
module.exports = (sequelize, DataTypes) => {
	var Newsletter = sequelize.define('Newsletter', {
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: true
			},
			allowNull: false
		}
	});
	return Newsletter;
};
