var models = require('./../models');
var mkdirp = require('mkdirp');
var upload = require('./../libs/multer');
var dataHelper = require('./../libs/dataHelper');
var fs = require('fs');

function create(req, res, err) {
  mkdirp('./public/uploads', function (err) {
    if (err) console.error(err);
    upload(req, res, function (err) {
      if (err) throw err;
      models.worksStorageModel
        .create({
          title: req.body.title,
          link: req.body.link,
          description: req.body.description,
          descriptionColor: req.body.descriptionColor,
          descriptionTextColor: req.body.descriptionTextColor,
          tags: JSON.parse(req.body.tags),
          tagsColor: req.body.tagsColor,
          technologies: JSON.parse(req.body.technologies),
          platforms: JSON.parse(req.body.platforms),
          logo: req.files.logo[0],
          landscape: req.files.landscape[0],
          portrait: req.files.portrait[0],
          template: req.body.template
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
    });
  });
};

function updateWork(req, res, err) {
  upload(req, res, function (err) {
    if (err) throw err;
    models.worksStorageModel
      .updateWork(req.params.id, 
        {
          title: req.body.title,
          link: req.body.link,
          description: req.body.description,
          descriptionColor: req.body.descriptionColor,
          descriptionTextColor: req.body.descriptionTextColor,
          tags: JSON.parse(req.body.tags),
          tagsColor: req.body.tagsColor,
          platforms: JSON.parse(req.body.platforms),
          logo: setFile("logo"),
          landscape: setFile("landscape"),
          portrait: setFile("portrait"),
          template: req.body.template
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

      function setFile(file) {
        if(Object.keys(req.files).length) {
          if (req.files[file]) {
            return req.files[file][0];
          } else {
            return JSON.parse(req.body[file]);
          }
        } else {
          return JSON.parse(req.body[file]);
        }
      }
  });
};

function getAll(req, res, err) {
  models.worksStorageModel
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
};

function getOne(req, res, err) {
  models.worksStorageModel
    .getOne(req.params.id)
    .then(function(data) {
      return dataHelper.successCallBack(data);
    })
    .catch(function(err) {
      return dataHelper.failCallBack('wrong');
    })
    .then(function(response) {
      res.json(response);
    });
};

function deleteWork(req, res, err) {
  models.worksStorageModel
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
};

function getTechCategories(req, res, err) {
  models.technicalCategoriesModel
    .getAll()
      .then(function(data) {
        var technicalCategories = [];
        data.forEach(function(category){
          if (category.subcategories.length) {
            category.subcategories.forEach(function(subcategory){
              technicalCategories
                .push(
                  {
                    name: subcategory.name,
                    id: subcategory.name
                  }
              );
              if (subcategory.postSubcategories.length) {
                subcategory.postSubcategories.forEach(function(postSub){
                  technicalCategories
                    .push(
                      {
                        name: postSub.name,
                        id: postSub.name
                      }
                  );
                });
              }
            });
          }
        });

        return dataHelper.successCallBack(technicalCategories);

      })
      .catch(function(err) {
        return dataHelper.failCallBack('wrong');
      })
      .then(function(response) {
        res.json(response);
      });
};

function getbusinessCategories(req, res, err) {
  models.businessCategoriesModel
    .getAll()
      .then(function(data) {
        var businessCategories = [];
        data.forEach(function(category){
          businessCategories
            .push(
              {
                name: category.name,
                id: category.name
              }
            )
        });

        return dataHelper.successCallBack(businessCategories);

      })
      .catch(function(err) {
        return dataHelper.failCallBack('wrong');
      })
      .then(function(response) {
        res.json(response);
      });
};

module.exports = {
  create: create,
  updateWork: updateWork,
  deleteWork: deleteWork,
  getAll: getAll,
  getOne: getOne,
  getTechCategories: getTechCategories,
  getbusinessCategories: getbusinessCategories
}