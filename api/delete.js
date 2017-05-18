var controllers = require('./../controllers');
var models = require('./../models');
var express = require('express');
var router = express.Router();

// router.delete('/api/technicalCategories.delete/:id', controllers.technicalCategoriesCtrl.deleteCategory);
// router.delete('/api/businessCategories.delete/:id', controllers.businessCategoriesCtrl.deleteCategory);
// router.delete('/api/worksStorage.delete/:id', controllers.worksStorageCtrl.deleteWork);

router.delete('/api/todos/:id', controllers.todosController.deleteTodo);

module.exports = router;