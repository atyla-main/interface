const User = require('../models').User;
const Role = require('../models').Role;
const view = require('../views').users;
const bcrypt = require('bcrypt');
const AtylaEmail = require('../services/email-management');

module.exports = {
	create(req, res) {
		const data = req.body.data;
		var rolesRelation = [];

		if (
			data.relationships &&
			data.relationships.roles &&
			data.relationships.roles.data
		) {
			data.relationships.roles.data.forEach(role => {
				rolesRelation.push(role.id);
			});
		}

		return User.create({
        email: data.attributes.email,
        firstName: data.attributes.firstName,
        lastName: data.attributes.lastName,
        password: bcrypt.hashSync(data.attributes.password, 10),
        token: data.attributes.token,
        source: data.attributes.source,
        stage: data.attributes.stage,
        gender: data.attributes.gender,
        birthDate: data.attributes.birthDate,
        birthCity: data.attributes.birthCity,
        phone: data.attributes.phone,
        citizenship: data.attributes.citizenship,
        country: data.attributes.country,
        address: data.attributes.address,
        zipCode: data.attributes.zipCode,
        city: data.attributes.city,
        state: data.attributes.state,
        optIn: data.attributes.optIn
      })
			.then(async user => {
				var roles = await Role.findAll({ where: { id: rolesRelation } });
				await user.setRoles(roles);
				res.status(200).send(await view.payload(user));
        AtylaEmail.sendConfirmationEmail(user);
			})
			.catch(error => res.status(400).send(error));
	},
	destroy(req, res) {
		return User.findById(req.params.userId)
			.then(User => {
				if (!User) {
					return res.status(400).send({
						message: 'User Not Found'
					});
				}

				return User.destroy()
					.then(() => res.status(200).send())
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},
	index(req, res) {
		return User.all()
			.then(async Users =>
				res.status(200).send(await view.index_payload(Users))
			)
			.catch(error => {
				res.status(400).send(error);
			});
	},
	show(req, res) {
		return User.findById(req.params.userId)
			.then(async User => {
				if (!User) {
					return res.status(400).send({
						message: 'User Not Found'
					});
				}
				return res.status(200).send(await view.payload(User));
			})
			.catch(error => res.status(400).send(error));
	},

	update(req, res) {
		const attributes = req.body.data.attributes;
		const data = req.body.data;
		var rolesRelation = [];

		if (
			data.relationships &&
			data.relationships.roles &&
			data.relationships.roles.data
		) {
			data.relationships.roles.data.forEach(role => {
				rolesRelation.push(role.id);
			});
		}

		return User.findById(req.params.userId)
			.then(User => {
				if (!User) {
					return res.status(400).send({
						message: 'User Not Found'
					});
				}
				return User.update(attributes, { fields: Object.keys(attributes) })
					.then(async user => {
						var roles = await Role.findAll({ where: { id: rolesRelation } });
						await user.setRoles(roles);
						res.status(200).send(await view.payload(user));
					})
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	}
};
