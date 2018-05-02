function attributes(newsletter) {
	return {
		email: newsletter.email
	};
}

module.exports = {
	payload(newsletter) {
		return {
			data: {
				id: newsletter.id,
				type: 'newsletters',
				attributes: attributes(newsletter)
			}
		};
	},

	index_payload(newsletters) {
		var data = [];

		for (var newsletter of newsletters) {
			data.push({
				id: newsletter.id,
				type: 'newsletters',
				attributes: attributes(newsletter)
			});
		}
		return {
			data: data
		};
	}
};
