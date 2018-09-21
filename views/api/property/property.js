const JSONRelationsExposingService = require('../../exposing-services/json/relationships');

module.exports = {
  async expose(property) {
    return await ({
      data: {
        id: property.uuid,
        type: 'properties',
        attributes: {
          'wording': property.wording,
          'property-nature': property.propertyNature,
          'co-ownership': property.coOwnership,
          'description': property.description,
          'rental-state': property.rentalState,
          'address': property.address,
          'post-code': property.postCode,
          'city': property.city,
          'coutry': property.coutry,
          'created-at': property.createdAt,
          'updated-at': property.updatedAt
        },
        relationships: await JSONRelationsExposingService.relationships(property, ['user', 'mandates'])
      }
    });
  }
};
