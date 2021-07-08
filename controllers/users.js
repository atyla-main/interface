const User = require('../models').User;

module.exports = {
  emailConfirmation(req, res) {
  	return User.findById(req.params.userId)
  		.then(async User => {
  			if (!User || User.stage != 'confirmation_send') {
  				return res.status(400).send({
  					message: 'User Not Found'
  				});
  			}
        User.update({ stage: 'confirmed' });
  			return res.status(200).send({
          data: {
            id: User.uuid,
            type: 'users'
          }
        });
  		})
  	  .catch(error => res.status(400).send(error));
  }
};
