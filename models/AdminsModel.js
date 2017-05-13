var mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  username: String,
  password: String
}, {collection : 'Admins'});


// schema.pre('save', function(next) {
//   var currentDate = Date.now();
//   this.updated_at = currentDate;
//   if (!this.created_at){
//     this.created_at = currentDate;
//   }
//   next();
// });

var AdminsModel = mongoose.model('Admins', schema);
module.exports = AdminsModel;