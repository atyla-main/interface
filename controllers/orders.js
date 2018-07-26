const Order = require('../models').Order;
const User = require('../models').User;
const Ico = require('../models').Ico;
const view = require('../views').orders;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const uuidv4 = require('uuid/v4');

module.exports = {
	create(req, res) {
		const data = req.body.data;
    let userId = null;

		if (data.relationships &&
			data.relationships.user &&
			data.relationships.user.data) {
        userId = data.relationships.user.data.id;
		}

		return Order.create({
      uuid: uuidv4(),
      status: data.attributes.status,
      statusHistory: data.attributes.statusHistory,
      amount: data.attributes.amount,
      fees: data.attributes.fees,
      source: data.attributes.source
		})
		.then(async order => {
      let user = await User.findById(userId);

      if (user) {
        order.setUser(user);
      } else {
        return res.status(404).send("User not found");
      }

			res.status(200).send(await view.payload(order));
		})
		.catch(error => res.status(400).send(error));
	},
	index(req, res) {
		return Order.findAll()
    .then(async Orders => {
      res.status(200).send(await view.index_payload(Orders))
    })
			.catch(error => {
				res.status(400).send(error);
			});
	}
};
