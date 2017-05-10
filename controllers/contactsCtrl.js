var models = require('./../models');
var dataHelper = require('./../libs/dataHelper');

function create(req, res, err) {
  models.contactsModel
    .create({
      skype: req.body.skype,
      firstPhone: req.body.firstPhone,
      secondPhone: req.body.secondPhone,
      site: req.body.site,
      adress: req.body.adress
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

function get(req, res, err) {
  models.contactsModel
    .get()
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

function update(req, res, err) {
  models.contactsModel
    .update({
      skype: req.body.skype,
      firstPhone: req.body.firstPhone,
      secondPhone: req.body.secondPhone,
      site: req.body.site,
      adress: req.body.adress
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

module.exports = {
  create: create,
  get: get,
  update: update
}


