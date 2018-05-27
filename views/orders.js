function attributes(order) {
	return {
    orderMean: order.orderMean,
    currentStage: order.currentStage,
    motif: order.motif,
	};
}

function relationshipUser(user) {
  if (user) {
    return {
      data: {
        id: user.id,
        type: 'users'
      }
    };
  };
  return {};
}

function relationshipIco(ico) {
  if (ico) {
    return {
      data: {
        id: ico.id,
        type: 'icos'
      }
    };
  };
  return {};
}

function relationships(ico, user) {
  return {
    ico: relationshipIco(ico),
    user: relationshipUser(user)
  };
}

module.exports = {
	async payload(order) {
		return {
			data: {
				id: order.id,
				type: 'orders',
				attributes: attributes(order),
        relationships: await relationships(await order.getIco(), await order.getUser())
			}
		};
	},

	async index_payload(orders) {
    let data = [];
    for (let order of orders) {
      let ico = await order.getIco();
      let user = await order.getUser();

      data.push({
        id: order.id,
        type: 'orders',
        attributes: attributes(order),
        relationships: relationships(ico, user)
      });
    }

		return {
			data: data
		};
	}
};
