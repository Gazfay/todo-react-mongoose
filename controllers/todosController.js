 var models = require('./../models');
const dataHelper = require('./../utils/dataHelper');

var todosController = {
  createTodo: function(req, res, err) {

    models.todosModel.createTodo({
      text: req.body.text,
      completed: req.body.completed
    })
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack(err);
    })
    .then(function(response) {
      res.json(response);
    });

    // models.todosModel
    //   .create({
    //     name: req.body.name
    //   })
    //   .then(function(data) {
    //     return dataHelper.successCallBack(data);
    //   })
    //   .catch(function(err) {
    //     return dataHelper.failCallBack('wrong');
    //   })
    //   .then(function(response) {
    //     res.json(response);
    //   });

  },

  getAllTodos: function(req, res, err) {

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

  deleteTodo: function(req, res, err) {
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
  }
}


// function getAll(req, res, err) {
//   models.businessCategoriesModel
//     .getAll()
//       .then(function(data) {
//         return dataHelper.successCallBack(data);
//       })
//       .catch(function(err) {
//         return dataHelper.failCallBack('wrong');
//       })
//       .then(function(response) {
//         res.json(response);
//       });
// }

// function updateCategory(req, res, err) {
//   models.businessCategoriesModel
//     .updateCategory(req.params.id, {
//       name: req.body.name,
//       subcategories: req.body.subcategories
//     })
//       .then(function(data) {
//         return dataHelper.successCallBack(data);
//       })
//       .catch(function(err) {
//         return dataHelper.failCallBack('wrong');
//       })
//       .then(function(response) {
//         res.json(response)
//       });
// }

// function deleteCategory(req, res, err) {
//   models.businessCategoriesModel
//     .delete(req.params.id)
//       .then(function(data) {
//         return dataHelper.successCallBack(data);
//       })
//       .catch(function(err) {
//         return dataHelper.failCallBack('wrong');
//       })
//       .then(function(response) {
//         res.json(response)
//       });
// }

module.exports = todosController;


