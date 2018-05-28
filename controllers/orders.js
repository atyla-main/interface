const Order = require('../models').Order;
const User = require('../models').User;
const Ico = require('../models').Ico;
const view = require('../views').orders;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
	create(req, res) {
		const data = req.body.data;
    let userId = null;
    let icoId = null;

		if (data.relationships &&
			data.relationships.user &&
			data.relationships.user.data) {
        userId = data.relationships.user.data.id;
		}

		if (data.relationships &&
			data.relationships.ico &&
			data.relationships.ico.data) {
        icoId = data.relationships.ico.data.id;
		}

		return Order.create({
		  orderMean: data.attributes.orderMean,
		  currentStage: data.attributes.currentStage,
		  motif: data.attributes.motif
		})
		.then(async order => {
      let user = await User.findById(userId);

      if (user) {
        order.setUser(user);
      } else {
        return res.status(404).send("User not found");
      }

      let ico = await Ico.findById(icoId);

      if (ico) {
        order.setIco(ico);
      } else {
        return res.status(404).send("Ico not found");
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
