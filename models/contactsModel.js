var mongoose = require('../libs/mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var schema = new Schema({
  updated_at: String,
  created_at: String,
  skype: String,
  firstPhone: String,
  secondPhone: String,
  site: String,
  adress: String
}, {collection : 'contactsCollection'});

schema.statics.create = function(data) {
  console.log('created');
  var contacts = new contactsModel(data);
  return contacts.save();
};

schema.statics.get = function() {
  return contactsModel
    .findOne(function(err, contacts){
      return contacts;
    })
    .exec();
}

schema.statics.update = function(data) {
  return contactsModel
    .findOneAndUpdate({}, data, {'new': true})
      .exec(function(err, contacts) {
        return contacts;
      });
}


schema.pre('save', function(next) {
  var currentDate = Date.now();
  this.updated_at = currentDate;
  if (!this.created_at){
    this.created_at = currentDate;
  }
  next();
});

var contactsModel = mongoose.model('contactsModel', schema);
module.exports = contactsModel;