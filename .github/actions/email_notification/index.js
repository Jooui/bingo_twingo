var nodemailer = require('nodemailer');
const core = require("@actions/core");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jrevertvila.testing@gmail.com',
    pass: core.getInput('TESTING_EMAIL_PASSWORD')
  }
});

var mailOptions = {
  from: 'jrevertvila.testing@gmail.com',
  to: core.getInput('MY_EMAIL'),
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    core.setFailed(error);
  } else {
    core.setOutput("response", "Mensaje enviado");
  }
});