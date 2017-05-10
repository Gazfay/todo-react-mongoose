var mongoose = require('../libs/mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var schema = new Schema({
  updated_at: String,
  created_at: String,
  name: String
}, {collection : 'businessCategoriesCollection'});

schema.statics.create = function(categoryData) {
  var category = new businessCategoriesModel(categoryData);
  return category.save();
};

schema.statics.getAll = function() {
  return businessCategoriesModel
    .find(function(err, categories){
      return categories;
    })
    .exec();
}

schema.statics.updateCategory = function(id, category) {
  return businessCategoriesModel
    .findOneAndUpdate({_id: id}, category, {'new': true})
      .exec(function(err, category) {
        return category;
      });
}

schema.statics.delete = function(id) {
  return businessCategoriesModel.findOneAndRemove({_id: id}, function(err, category) {
    if (err) {
      throw err;
    }
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

var businessCategoriesModel = mongoose.model('businessCategoriesModel', schema);
module.exports = businessCategoriesModel;