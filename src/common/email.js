const email = require('nodemailer');

module.exports = email.createTransport({
          name: 'localhost'
 });
