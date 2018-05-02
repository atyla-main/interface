const Newsletter = require('../models').Newsletter;
const view = require('../views').newsletters;

module.exports = {
	create(req, res) {
		const data = req.body.data;

		return Newsletter.create({
			email: data.attributes.email
		})
			.then(newsletter => {
				res.status(200).send(view.payload(newsletter));
			})
			.catch(error => res.status(400).send(error));
	},
	index(req, res) {
		return Newsletter.all()
			.then(newsletters =>
				res.status(200).send(view.index_payload(newsletters))
			)
			.catch(error => {
				res.status(400).send(error);
			});
	},
	show(req, res) {
		return Newsletter.findById(req.params.newsletterId)
			.then(newsletter => {
				if (!newsletter) {
					return res.status(400).send({
						message: 'Newsletter Not Found'
					});
				}
				return res.status(200).send(view.payload(newsletter));
			})
			.catch(error => res.status(400).send(error));
	}
};
