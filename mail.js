'use strict'
const mailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const mailConstant = require('./constant.js')
/**
 * send email to specific email address passes in 
 * @param String emailId
*/
function sendmail(emailId) {
  // email configuration logic
  const mailOptions = {
    from: process.env.EMAIL,
    to: emailId,
    subject: mailConstant.SUBJECT,
    text: mailConstant.TEXT
  }
  // email transport logic
  const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })
  //send mail logic
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log('email send :' + info.response)
    }
  })
}
module.exports = sendmail