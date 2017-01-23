const email = require('emailjs');

module.exports = email.server.connect({
     user:    process.env.EMAIL_USER,
     password: process.env.EMAIL_PASSWORD,
     host:    "localhost",
     ssl:     false
 });
