const Ico = require('../models').Ico;
const view = require('../views').icos;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
	create(req, res) {
		const data = req.body.data;

		return Ico.create({
			name: data.attributes.name,
			link: data.attributes.link,
			blockChain: data.attributes.blockChain,
			description: {
				en: data.attributes['description-en'],
				fr: data.attributes['description-fr']
			}
		})
			.then(ico => {
				res.status(200).send(view.payload(ico));
			})
			.catch(error => res.status(400).send(error));
	},
	destroy(req, res) {
		return Ico.findById(req.params.icoId)
			.then(Ico => {
				if (!Ico) {
					return res.status(400).send({
						message: 'Ico Not Found'
					});
				}

				return Ico.destroy()
					.then(() => res.status(200).send())
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},
	index(req, res) {
		let args = {};
		if (req.query.search) {
			args = {
				where: {
					name: {
						[Op.iLike]: `%${req.query.search}%`
					}
				}
			};
		}
		return Ico.findAll(args)
			.then(Icos => res.status(200).send(view.index_payload(Icos)))
			.catch(error => {
				res.status(400).send(error);
			});
	},
	show(req, res) {
		return Ico.findById(req.params.icoId)
			.then(Ico => {
				if (!Ico) {
					return res.status(400).send({
						message: 'Ico Not Found'
					});
				}
				return res.status(200).send(view.payload(Ico));
			})
			.catch(error => res.status(400).send(error));
	},

	update(req, res) {
		const attributes = req.body.data.attributes;
		const data = req.body.data;
		return Ico.findById(req.params.icoId)
			.then(Ico => {
				if (!Ico) {
					return res.status(400).send({
						message: 'Ico Not Found'
					});
				}
				return Ico.update(attributes, { fields: Object.keys(attributes) })
					.then(ico => {
						res.status(200).send(view.payload(ico));
					})
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	}
};
