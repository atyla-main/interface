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
  }
}
