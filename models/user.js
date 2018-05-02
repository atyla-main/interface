'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define(
		'User',
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			token: {
				type: DataTypes.STRING,
				allowNull: true
			}
		},
		{}
	);
	User.associate = models => {
		User.belongsToMany(models.Role, {
			through: 'UserRoles'
		});
	};
	return User;
};
