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
  versionKey: false,
  timestamps: true
});

schema.plugin(idPlugin);


schema.statics.createTodo = (todoData) => {
  let todo = new todosModel(todoData);
  return todo.save();
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

// Pre save hook
// schema.pre('save', function(next) {
//   next();
// });



const todosModel = mongoose.model('todosModel', schema);
module.exports = todosModel;