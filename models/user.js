'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define(
		'User',
		{
      uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
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
				allowNull: false,
        validate: {
          isEmail: true,
          isUnique(value, next) {
            User.find({
              where: { email: value },
              attributes: ['uuid']
            }).done((user) => {
              if (user) {
                return next('email must be unique');
              }
              next();
            });
          }
        },
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			token: {
				type: DataTypes.STRING,
				allowNull: true
			},
      source: {
				type: DataTypes.STRING,
				allowNull: true
      },
      stage: {
				type: DataTypes.STRING,
				allowNull: true,
        validate: {
          isIn: [['inscription', 'confirmation_send', 'confirmed', 'kyc_send', 'validated', 'denied', 'unsubscribed']]
        }
      },
      gender: {
				type: DataTypes.STRING,
				allowNull: true,
        validate: {
          isIn: [['mr', 'mrs']]
        }
      },
      birthDate: {
				type: DataTypes.DATE,
				allowNull: true,
        validate: {
          isDate: true
        }
      },
      birthCity: {
				type: DataTypes.STRING,
				allowNull: true
      },
      phone: {
				type: DataTypes.STRING,
				allowNull: true
      },
      citizenship: {
				type: DataTypes.STRING,
				allowNull: true
      },
      country: {
				type: DataTypes.STRING,
				allowNull: true
      },
      address: {
				type: DataTypes.STRING,
				allowNull: true
      },
      zipCode: {
				type: DataTypes.STRING,
				allowNull: true
      },
      city: {
				type: DataTypes.STRING,
				allowNull: true
      },
      state: {
				type: DataTypes.STRING,
				allowNull: true
      },
      optIn: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
      },
      passwordForgotten: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
      },
      passwordForgottenDate: {
				type: DataTypes.DATE,
				allowNull: true,
        validate: {
          isDate: true
        }
      },
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
