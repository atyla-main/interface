const AtylaEmail = require('../../../../services/email-management');

module.exports = {
  create(user) {
    AtylaEmail.sendConfirmationEmail(user);
  }
}
