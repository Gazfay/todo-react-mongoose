var controllers = require('./../controllers');
var models = require('./../models');
var express = require('express');
var router = express.Router();

router.get('/api/technicalCategories.getAll', controllers.technicalCategoriesCtrl.getAll);
router.get('/api/businessCategories.getAll', controllers.businessCategoriesCtrl.getAll);
router.get('/api/worksStorage.getAll', controllers.worksStorageCtrl.getAll);
router.get('/api/worksStorage.getOne/:id', controllers.worksStorageCtrl.getOne);
router.get('/api/worksStorage.getTechCategories', controllers.worksStorageCtrl.getTechCategories);
router.get('/api/worksStorage.getbusinessCategories', controllers.worksStorageCtrl.getbusinessCategories);
router.get('/api/contacts.get', controllers.contactsCtrl.get);
router.get('/filter?*', controllers.routeController.filterRoute);
router.get('/*', controllers.routeController.mainRoute);

module.exports = router;
