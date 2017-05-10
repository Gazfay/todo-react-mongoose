var AdminsModel = require('./AdminsModel');
var technicalCategoriesModel = require('./technicalCategoriesModel');
var businessCategoriesModel = require('./businessCategoriesModel');
var worksStorageModel = require('./worksStorageModel');
var contactsModel = require('./contactsModel');
var htmlModel = require('./htmlModel');

var models = {
  AdminsModel: AdminsModel,
  technicalCategoriesModel: technicalCategoriesModel,
  businessCategoriesModel: businessCategoriesModel,
  contactsModel: contactsModel,
  htmlModel: htmlModel,
  worksStorageModel: worksStorageModel
}

module.exports = models;