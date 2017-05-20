const mongoose = require('../utils/mongoose');
const idPlugin = require('mongoose-id');
mongoose.Promise = require('bluebird');
let Schema = mongoose.Schema;

let schema = new Schema({
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
}, {
  collection : 'todosCollection',
  versionKey: false
});

schema.plugin(idPlugin);


schema.statics.createTodo = (todoData) => {
  let todo = new todosModel(todoData);
  return todo.save(function(err) {
    if (err) return err;
  });
};

schema.statics.getAllTodos = () => {
  return todosModel
    .find()
    .exec(function(err, todos) {
      if (err) return err;
      return todos;
    });
}

schema.statics.updateTodo = (id, todo) => {
  return todosModel
    .findOneAndUpdate({_id: id}, todo, {'new': true})
    .exec(function(err, todo) {
      if (err) return err;
      return todo;
    });
}

schema.statics.deleteTodo = (id) => {
  return todosModel
    .findOneAndRemove({_id: id}, function(err, todo) {
      if (err) return err;
  });
}

schema.pre('save', (next) => {
  let currentDate = Date.now();

  if (!this.created_time){
    this.created_time = currentDate;
  } else if (this.created_time) {
    this.updated_time = currentDate;
  }

  next();
});



const todosModel = mongoose.model('todosModel', schema);
module.exports = todosModel;