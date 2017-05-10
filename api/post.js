var controllers = require('./../controllers');
var models = require('./../models');
var express = require('express');
var passport = require('passport');
var router = express.Router();


router.post("/api/technicalCategories.create", controllers.technicalCategoriesCtrl.create);
router.post("/api/businessCategories.create", controllers.businessCategoriesCtrl.create);
router.post("/api/worksStorage.create", controllers.worksStorageCtrl.create);
router.post("/api/contacts.create", controllers.contactsCtrl.create);
router.post("/api/renderStaticPage", controllers.renderStaticLandingCtrl.renderStatic);
// router.post("/api/updateStaticInfo", controllers.renderStaticLandingCtrl.updateStaticInfo);
router.post("/api/updateStaticInfo", controllers.renderStaticLandingCtrl.updateServerStorage);

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureFlash: true
  }), function() {
  	res.redirect('/');
});

module.exports = router;
