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
  subject: 'Resultado del workflow ejecutado',
  text: `Se ha realizado un push en la rama githubActions_improvement que ha provocado la ejecución del workflow Bingo_Workflow con los siguientes resultados:\n\n- syntax_check_job: ${core.getInput('JOB1')}\n\n- test_execution_job: ${core.getInput('JOB2')}\n\n - build_statics_job: ${core.getInput('JOB3')}\n\n - deploy_job: ${core.getInput('JOB4')}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    core.setFailed(error);
  } else {
    core.setOutput("response", "Mensaje enviado");
  }
});
