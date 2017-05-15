const mongoose = require('mongoose');
const colors = require('colors');

const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/data-mining';
mongoose.connect(DB_URL);

mongoose.connection.on('connected', () => {
  console.info(colors.green('Connected to DB'));  
});

mongoose.connection.on('error', err => {
  console.error(colors.red('Mongoose connection err ${err}'));
});

mongoose.connection.on('disconnected', () => {
  console.info(colors.green('Disconnected from DB'));
});