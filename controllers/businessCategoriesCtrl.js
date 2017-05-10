var models = require('./../models');
var dataHelper = require('./../libs/dataHelper');

function create(req, res, err) {
  models.businessCategoriesModel
    .create({
      name: req.body.name
    })
      .then(function(data) {
        return dataHelper.successCallBack(data);
      })
      .catch(function(err) {
        return dataHelper.failCallBack('wrong');
      })
      .then(function(response) {
        res.json(response);
      });
  }

function getAll(req, res, err) {
  models.businessCategoriesModel
    .getAll()
      .then(function(data) {
        return dataHelper.successCallBack(data);
      })
      .catch(function(err) {
        return dataHelper.failCallBack('wrong');
      })
      .then(function(response) {
        res.json(response);
      });
}

function updateCategory(req, res, err) {
  models.businessCategoriesModel
    .updateCategory(req.params.id, {
      name: req.body.name,
      subcategories: req.body.subcategories
    })
      .then(function(data) {
        return dataHelper.successCallBack(data);
      })
      .catch(function(err) {
        return dataHelper.failCallBack('wrong');
      })
      .then(function(response) {
        res.json(response)
      });
}

function deleteCategory(req, res, err) {
  models.businessCategoriesModel
    .delete(req.params.id)
      .then(function(data) {
        return dataHelper.successCallBack(data);
      })
      .catch(function(err) {
        return dataHelper.failCallBack('wrong');
      })
      .then(function(response) {
        res.json(response)
      });
}

module.exports = {
  create: create,
  getAll: getAll,
  updateCategory: updateCategory,
  deleteCategory: deleteCategory
}


