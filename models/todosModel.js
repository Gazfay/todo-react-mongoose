var mongoose = require('../utils/mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var schema = new Schema({
  updated_time: Date,
  created_time: Date,
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
}, {collection : 'todosCollection'});

schema.statics.createTodo = function(todoData) {
  var todo = new todosModel(todoData);
  return todo.save();
};

schema.statics.getAllTodos = function() {
  return todosModel
    .find()
    .exec(function(err, todos) {
      if (err) return err;
      return todos;
    });
}

schema.statics.updateTodo = function(id, todo) {
  return businessCategoriesModel
    .findOneAndUpdate({_id: id}, todo, {'new': true})
    .exec(function(err, todo) {
      if (err) return err;
      return todo;
    });
}

schema.statics.deleteTodo = function(id) {
  return businessCategoriesModel
    .findOneAndRemove({_id: id}, function(err, category) {
    if (err) {
      throw err;
    }
  });
}

schema.pre('save', function(next) {
  var currentDate = Date.now();

  if (!this.created_time){
    this.created_time = currentDate;
  } else if (this.created_time) {
    this.updated_time = currentDate;
  }

  next();
});

var todosModel = mongoose.model('todosModel', schema);
module.exports = todosModel;