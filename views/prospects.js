function attributes(prospect) {
	return {
		email: prospect.email
	};
}

module.exports = {
	payload(prospect) {
		return {
			data: {
				id: prospect.id,
				type: 'prospects',
				attributes: attributes(prospect)
			}
		};
	},

	index_payload(prospects) {
		var data = [];

		for (var prospect of prospects) {
			data.push({
				id: prospect.id,
				type: 'prospects',
				attributes: attributes(prospect)
			});
		}
		return {
			data: data
		};
	}
};
