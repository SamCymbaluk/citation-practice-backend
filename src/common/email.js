const email = require('nodemailer');

module.exports = email.createTransport({
      service: 'Gmail',
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
      }
  });
