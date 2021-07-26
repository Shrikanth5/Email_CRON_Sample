const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cron = require('node-cron');
const port = process.env.PORT;
const sendMail = require('./mail.js');

cron.schedule('*/15 * * * *', () => {
  console.log("Task is running every 15 minute");
  sendMail("harikanth94@gmail.com");
});

app.listen(port, () => {
  console.log('Server is running on ' + port);
});