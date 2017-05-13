var mongoose = require('../libs/mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var schema = new Schema({
  updated_at: String,
  created_at: String,
  html: String,
}, {collection : 'htmlCollection'});


schema.statics.getHtml = function() {
  return htmlModel
    .findOne(function(err, html){
      return html;
    })
    .exec();
}

schema.statics.setHtml = function(data) {
  return htmlModel
    .findOneAndUpdate({}, data, {'new': true})
      .exec(function(err, html) {
        return html;
      });
}

schema.statics.createHtml = function(data) {
  var html = new htmlModel(data);
  return html.save(function(){
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

var htmlModel = mongoose.model('htmlModel', schema);
module.exports = htmlModel;