const Prospect = require('../models').Prospect;
const view = require('../views').prospects;

module.exports = {
	create(req, res) {
		const data = req.body.data;

		return Prospect.create({
			email: data.attributes.email
		})
			.then(prospect => {
				res.status(200).send(view.payload(prospect));
			})
			.catch(error => res.status(400).send(error));
	},
	index(req, res) {
		return Prospect.all()
			.then(prospects =>
				res.status(200).send(view.index_payload(prospects))
			)
			.catch(error => {
				res.status(400).send(error);
			});
	},
	show(req, res) {
		return Prospect.findById(req.params.prospectId)
			.then(prospect => {
				if (!prospect) {
					return res.status(400).send({
						message: 'Prospect Not Found'
					});
				}
				return res.status(200).send(view.payload(prospect));
			})
			.catch(error => res.status(400).send(error));
	}
};
