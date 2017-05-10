var controllers = require('./../controllers');
var models = require('./../models');
var express = require('express');
var router = express.Router();


router.put("/api/technicalCategories.updateCategory/:id", controllers.technicalCategoriesCtrl.updateCategory);
router.put("/api/businessCategories.updateCategory/:id", controllers.businessCategoriesCtrl.updateCategory);
router.put("/api/worksStorage.updateWork/:id", controllers.worksStorageCtrl.updateWork);
router.put("/api/contacts.update/", controllers.contactsCtrl.update);

module.exports = router;