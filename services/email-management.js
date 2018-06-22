const sgMail = require('@sendgrid/mail');

module.exports = {
  sendConfirmationEmail(user) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    let url = process.env.ATYLA_PUBLIC_WEBSITE_LINK;
    sgMail.send({
      to: user.email,
      from: 'noreply@atyla.io',
      subject: 'You can now confirm your email',
      html: `<p><strong>Welcome to Atyla !</strong></p> \
        <p>Please click on the link bellow</p> \
        <p><a href="${url}sign-up/confirmation/${user.id}">Confirm your email</a></p>`,
    });
    user.update({ stage: 'confirmation_send' });
  },

  sendPasswordResetEmail(user) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    let url = process.env.ATYLA_PUBLIC_WEBSITE_LINK;
    sgMail.send({
      to: user.email,
      from: 'noreply@atyla.io',
      subject: 'You can now change your password',
      html: `<p><strong>You can now update your password</strong></p> \
        <p>Please click on the link bellow</p> \
        <p><a href="${url}reset-password/${user.id}">Change your password !</a></p>`,
    });
  },

  sendPasswordSuccessfullyResetEmail(user) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    let url = process.env.ATYLA_PUBLIC_WEBSITE_LINK;
    sgMail.send({
      to: user.email,
      from: 'noreply@atyla.io',
      subject: 'Your password has been updated',
      html: `<p><strong>Your password has been successfully updated</strong></p> \
        <p>You can now login again !</p> \
        <p><a href="${url}">Atyla is waiting for you !</a></p>`,
    });
  }
}
