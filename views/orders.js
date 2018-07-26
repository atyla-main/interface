function attributes(order) {
	return {
    status: order.status,
    statusHistory: order.statusHistory,
    amount: order.amount,
    fees: order.fees,
    source: order.source
	};
}

function relationshipUser(user) {
  if (user) {
    return {
      data: {
        id: user.uuid,
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
				id: order.uuid,
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
        id: order.uuid,
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
