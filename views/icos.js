function attributes(ico) {
	return {
		name: ico.name,
		link: ico.link,
		blcokChain: ico.blcokChain,
		descriptionEn: ico.description.en,
		descriptionFr: ico.description.fr
	};
}

module.exports = {
	payload(ico) {
		return {
			data: {
				id: ico.id,
				type: 'icos',
				attributes: attributes(ico)
			}
		};
	},

	index_payload(icos) {
		var data = [];

		for (var ico of icos) {
			data.push({
				id: ico.id,
				type: 'icos',
				attributes: attributes(ico)
			});
		}

		return {
			data: data
		};
	}
};
