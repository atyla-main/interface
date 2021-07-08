const JSONRelationsExposingService = require('../../exposing-services/json/relationships');

module.exports = {
  async expose(prospect) {
    return await ({
      data: {
        id: prospect.uuid,
        type: 'prospects',
        attributes: {
          'email': prospect.email
        },
        relationships: {}
      }
    });
  }
};
