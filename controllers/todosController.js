const models = require('./../models');
const dataHelper = require('./../utils/dataHelper');

let todosController = {
  createTodo: (req, res, err) => {
    console.log(req.body);
    models.todosModel.createTodo(req.body)
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack(err);
    })
    .then(function(response) {
      res.json(response);
    });
  },

  getAllTodos: (req, res, err) => {
    models.todosModel.getAllTodos()
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack(err);
    })
    .then(function(response) {
      res.json(response);
    });
  },

  deleteTodo: (req, res, err) => {
    models.todosModel.deleteTodo(req.params.id)
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack(err);
    })
    .then(function(response) {
      res.json(response);
    });
  },

  updateTodo: (req, res, err) => {
    console.log(req.body);
    models.todosModel.updateTodo(req.params.id, req.body)
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack(err);
    })
    .then(function(response) {
      res.json(response);
    });
  }
}

module.exports = todosController;


