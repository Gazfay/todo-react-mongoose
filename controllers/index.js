var technicalCategoriesCtrl = require('./technicalCategoriesCtrl');
var businessCategoriesCtrl = require('./businessCategoriesCtrl');
var contactsCtrl = require('./contactsCtrl');
var worksStorageCtrl = require('./worksStorageCtrl');
var loginController = require('./loginController');
var routeController = require('./routeController');
var renderStaticLandingCtrl = require('./renderStaticLandingCtrl');

var controllers = {
  technicalCategoriesCtrl: technicalCategoriesCtrl,
  businessCategoriesCtrl: businessCategoriesCtrl,
  worksStorageCtrl: worksStorageCtrl,
  contactsCtrl: contactsCtrl,
  loginController: loginController,
  routeController: routeController,
  renderStaticLandingCtrl: renderStaticLandingCtrl
}

module.exports = controllers;