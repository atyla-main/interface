const JSONRelationsExposingService = require('../../exposing-services/json/relationships');

module.exports = {
  async expose(negociator) {
    return await ({
      data: {
        id: negociator.uuid,
        type: 'negociators',
        attributes: {
          'email': negociator.email,
          'wording': negociator.wording,
          'civility': negociator.civility,
          'last-name': negociator.lastName,
          'first-name': negociator.firstName,
          'commercial-agent': negociator.commercialAgent,
          'rsac': negociator.rsac,
          'rsac-place': negociator.rsacPlace,
          'created-at': negociator.createdAt,
          'updated-at': negociator.updatedAt
        },
        relationships: await JSONRelationsExposingService.relationships(negociator, ['user', 'office', 'mandates'])
      }
    });
  }
};
