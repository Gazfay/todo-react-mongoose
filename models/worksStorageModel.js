var mongoose = require('../utils/mongoose');
var fs = require('fs');

var Schema = mongoose.Schema;

var schema = new Schema({
  updated_at: String,
  created_at: String,
  title: String,
  link: String,
  description: String,
  descriptionColor: String,
  descriptionTextColor: String,
  tags: Schema.Types.Mixed,
  tagsColor: Number,
  technologies: Schema.Types.Mixed,
  platforms: Schema.Types.Mixed,
  logo: Schema.Types.Mixed,
  landscape: Schema.Types.Mixed,
  portrait: Schema.Types.Mixed,
  template: Number
}, {collection : 'worksStorageCollection'});


schema.statics.create = function (objectData) {
  var work = new worksStorageModel(objectData);
  return work.save();
};

schema.statics.updateWork = function (id, objectData) {
  return worksStorageModel
    .findOne({_id: id}, function(err, work) {
      if (objectData.logo.filename !== work.logo.filename) {
        fs.unlink('./public/uploads/' + work.logo.filename, function (err) {
          if (err) {
            console.log(err);
          } 
        });
      }
      if (objectData.landscape.filename !== work.landscape.filename) {
        fs.unlink('./public/uploads/' + work.landscape.filename, function (err) {
          if (err) {
            console.log(err);
          } 
        });
      }
      if (objectData.portrait.filename !== work.portrait.filename) {
        fs.unlink('./public/uploads/' + work.portrait.filename, function (err) {
          if (err) {
            console.log(err);
          } 
        });
      }

      for(var key in objectData) {
        work[key] = objectData[key];
      }

      work.save();
    })
    .exec();
};

schema.statics.getAll = function() {
  return worksStorageModel
    .find(function(err, works){
      return works;
    })
    .exec();
}

schema.statics.getOne = function (id) {
  return worksStorageModel
    .findOne({_id: id}, function(err, work) {
      return work;
    })
    .exec();
}

schema.statics.delete = function(id) {
  return worksStorageModel
    .findOne({_id: id}, function(err, work) {
      if (err) {
        throw err;
      }
      fs.unlink('./public/uploads/' + work.logo.filename, function (err) {
        if (err) {
          console.log(err);
        } 
      });
      fs.unlink('./public/uploads/' + work.landscape.filename, function (err) {
        if (err) {
          console.log(err);
        } 
      });
      fs.unlink('./public/uploads/' + work.portrait.filename, function (err) {
        if (err) {
          console.log(err);
        } 
      });
      work.remove();
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

var worksStorageModel = mongoose.model('worksSorageModel', schema);
module.exports = worksStorageModel;