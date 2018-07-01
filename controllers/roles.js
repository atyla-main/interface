const Role = require('../models').Role;
const User = require('../models').User;
const view = require('../views').roles;

module.exports = {
	create(req, res) {
		const data = req.body.data;
		var usersRelation = [];

		if (
			data.relationships &&
			data.relationships.users &&
			data.relationships.users.data
		) {
			data.relationships.users.data.forEach(user => {
				usersRelation.push(user.id);
			});
		}

		return Role.create({
			identifier: data.attributes.identifier
		})
			.then(async role => {
				var users = await User.findAll({ where: { uuid: usersRelation } });
				await role.setUsers(users);
				res.status(200).send(await view.payload(role));
			})
			.catch(error => res.status(400).send(error));
	},
	index(req, res) {
		return Role.all()
			.then(async Roles =>
				res.status(200).send(await view.index_payload(Roles))
			)
			.catch(error => {
				res.status(400).send(error);
			});
	},
	update(req, res) {
		const attributes = req.body.data.attributes;
		const data = req.body.data;
		var usersRelation = [];

		if (
			data.relationships &&
			data.relationships.users &&
			data.relationships.users.data
		) {
			data.relationships.users.data.forEach(user => {
				usersRelation.push(user.id);
			});
		}

		return Role.findById(req.params.roleId)
			.then(Role => {
				if (!Role) {
					return res.status(400).send({
						message: 'Role Not Found'
					});
				}
				return Role.update(attributes, { fields: Object.keys(attributes) })
					.then(async role => {
						var users = await User.findAll({ where: { uuid: usersRelation } });
						await role.setUsers(users);
						res.status(200).send(await view.payload(role));
					})
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	}
};
