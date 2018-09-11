const JSONRelationsExposingService = require('../../exposing-services/json/relationships');

module.exports = {
  async expose(user) {
    return await ({
      data: {
        id: user.uuid,
        type: 'users',
        attributes: {
          'first-name': user.firstName,
          'last-name': user.lastName,
          'email': user.email,
          'stage': user.stage
        },
        relationships: await JSONRelationsExposingService.relationships(user, ['orders'])
      }
    });
  }
};
