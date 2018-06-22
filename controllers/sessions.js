const User = require('../models').User;
const AtylaEmail = require('../services/email-management');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = {
  async passwordForgotten(req, res) {
    let data = req.body.data;
    var user = await User.findOne({ where: { email: data.attributes.email } });
    if (user) {
      console.log("USER EXIST");
      user.passwordForgotten = true;
      user.passwordForgottenDate = Date.now();
      await user.save({fields: ['passwordForgotten', 'passwordForgottenDate']});
      AtylaEmail.sendPasswordResetEmail(user);
      return res.status(200).send({message: 'ok'});
    }
		return res.status(400).send({
			message: 'User Not Found'
		});
  },

  async resetPassword(req, res) {
    let user = await User.findById(req.body.data.attributes.id);
    let password = req.body.data.attributes.password;

    if (user &&
        user.passwordForgotten == true &&
        moment().diff(user.passwordForgotten_date, 'days') == 0) {
      user.passwordForgotten = false;
      user.passwordForgottenDate = null;
      user.password = bcrypt.hashSync(password, 10);
      user.save({fields: ['password', 'passwordForgotten', 'passwordForgottenDate']});
      AtylaEmail.sendPasswordSuccessfullyResetEmail(user);
      return res.status(200).send({message: 'ok'});
    }
		return res.status(400).send({
			message: 'User Not Found'
		});
  }
};