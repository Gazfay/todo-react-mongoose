// Local Connection
// var mongoose = require('mongoose');
// var connect = mongoose.connection;
// mongoose.connect('mongodb://localhost/galleryDb');
// connect.on('error', console.error.bind(console, 'error connection DB'));


// Mongolab Connection
const mongoose = require('mongoose');
const config = require('../config/mongoConfig');

mongoose.connect(config.mongoDbUri, config.mongooseOptions)
.then(() => {
  console.log('Success connection to db.');
}, (err) => {
  console.log(err);
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;