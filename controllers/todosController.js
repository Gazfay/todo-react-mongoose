var models = require('./../models');
const dataHelper = require('./../utils/dataHelper');

var todosController = {
  create: function(req, res, err) {

    console.log(req.body);
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
  getAll: function(req, res, err) {
   
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


