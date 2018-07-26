'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Icos', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      merchantUuid: {
        type: Sequelize.UUID,
        reference: {
          model: 'Merchants',
          key: 'uuid'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
      coin: {
				allowNull: false,
				type: Sequelize.STRING
      },
			icoWebsiteUrl: {
				allowNull: false,
				type: Sequelize.STRING
			},
			blockChain: {
				allowNull: false,
				type: Sequelize.STRING
			},
			description: {
				allowNull: false,
				type: Sequelize.JSONB
			},
      minInvest: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      maxInvest: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.JSONB)
      },
      referalreward: {
        allowNull: true,
        type: Sequelize.STRING
      },
      category: {
        allowNull: true,
        type: Sequelize.STRING
      },
      whitepapper: {
        allowNull: true,
        type: Sequelize.STRING
      },
      softCap: {
        allowNull: true,
        type: Sequelize.JSONB
      },
      hardCap: {
        allowNull: true,
        type: Sequelize.JSONB
      },
      linkedinCofounders: {
        allowNull: true,
        type: Sequelize.JSONB
      },
      moneyRaised: {
        allowNull: true,
        type: Sequelize.JSONB
      },
      teamSize: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      ranking: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      lastUpdate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      logo: {
        allowNull: true,
        type: Sequelize.STRING
      },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Icos');
	}
};
