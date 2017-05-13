var jade = require('jade');
var models = require('./../models');
var fs = require('fs');
var AdmZip = require('adm-zip');
var zipFolder = require('zip-folder');

function renderStatic (req, res, next) {

	var data = {};

	var businessPromise = models.businessCategoriesModel
		.find({}, {"_id": 0, 
							 "name": 1
							}
		)
		.exec(function(err, categories) {
		return data.businessExpertise = categories;
	});

	var technicPromise = models.technicalCategoriesModel
		.find({},{"_id": 0, 
							 "name": 1,
							 "subcategories": 1
						 }
		)
		.exec(function(err, categories) {
			data.technicalExpertise = categories;
	});

	var worksPromise = models.worksStorageModel
		.find({}, {"_id": 0, 
							 "description": 1, 
							 "descriptionColor": 1,
							 "descriptionTextColor": 1, 
							 "landscape": 1, "link": 1, 
							 "logo": 1, "platforms": 1, 
							 "portrait": 1, "tags": 1, 
							 "template": 1, 
							 "title": 1
							}
		)
		.exec(function(err, works) {
			return data.works = works;
	});

	var contactsPromice = models.contactsModel
		.findOne({}, {"_id": 0, 
									"adress": 1, 
									"firstPhone": 1, 
									"secondPhone": 1, 
									"site": 1, 
									"skype": 1
								}
		)
		.exec(function(err, contacts) {
			data.contacts = contacts;
	});

	Promise.all([businessPromise, technicPromise, worksPromise, contactsPromice])
		.then(function(values) {
			var fn = jade.compileFile('./views/index.jade');
			var html = fn({data: data});

			fs.writeFile('./public/index.html', html, function (err) {
				if (err) return res.send(err);

				var zip = new AdmZip();
				zip.writeZip("./landing.zip");

				zipFolder('./public', './frontend/admin/landing.zip', function(err) {
					if(err) {
							res.send(err);
					} else {
							res.send(200);
					}
				});
			});

	 });

};

function updateStaticInfo(req, res, next) {
	var data = {};

	var businessPromise = models.businessCategoriesModel
		.find({}, {"_id": 0, 
							 "name": 1
							}
		)
		.exec(function(err, categories) {
		return data.businessExpertise = categories;
	});

	var technicPromise = models.technicalCategoriesModel
		.find({},{"_id": 0, 
							 "name": 1,
							 "subcategories": 1
						 }
		)
		.exec(function(err, categories) {
			data.technicalExpertise = categories;
	});

	var worksPromise = models.worksStorageModel
		.find({}, {"_id": 0, 
							 "description": 1, 
							 "descriptionColor": 1, 
							 "descriptionTextColor": 1,
							 "landscape": 1, "link": 1, 
							 "logo": 1, "platforms": 1, 
							 "portrait": 1, "tags": 1,
							 "tagsColor": 1, 
							 "template": 1, 
							 "title": 1
							}
		)
		.exec(function(err, works) {
			return data.works = works;
	});

	var contactsPromice = models.contactsModel
		.findOne({}, {"_id": 0, 
									"adress": 1, 
									"firstPhone": 1, 
									"secondPhone": 1, 
									"site": 1, 
									"skype": 1
								}
		)
		.exec(function(err, contacts) {
			data.contacts = contacts;
	});

	Promise.all([businessPromise, technicPromise, worksPromise, contactsPromice])
		.then(function(values) {
			var fn = jade.compileFile('./views/index.jade');
			var html = fn({data: data});

			fs.writeFile('./public/index.html', html, function (err) {
				if (err) return res.send(err);
				res.send(200);
			});

	 });
}

function updateServerStorage(req, res, next) {
	var data = {};

	var businessPromise = models.businessCategoriesModel
		.find({}, {"_id": 0, 
							 "name": 1
							}
		)
		.exec(function(err, categories) {
		return data.businessExpertise = categories;
	});

	var technicPromise = models.technicalCategoriesModel
		.find({},{"_id": 0, 
							 "name": 1,
							 "subcategories": 1
						 }
		)
		.exec(function(err, categories) {
			data.technicalExpertise = categories;
	});

	var worksPromise = models.worksStorageModel
		.find({}, {"_id": 0, 
							 "description": 1, 
							 "descriptionColor": 1, 
							 "descriptionTextColor": 1,
							 "landscape": 1, "link": 1, 
							 "logo": 1, "platforms": 1, 
							 "portrait": 1, "tags": 1,
							 "tagsColor": 1, 
							 "template": 1, 
							 "title": 1
							}
		)
		.exec(function(err, works) {
			return data.works = works;
	});

	var contactsPromice = models.contactsModel
		.findOne({}, {"_id": 0, 
									"adress": 1, 
									"firstPhone": 1, 
									"secondPhone": 1, 
									"site": 1, 
									"skype": 1
								}
		)
		.exec(function(err, contacts) {
			data.contacts = contacts;
	});

	Promise.all([businessPromise, technicPromise, worksPromise, contactsPromice])
		.then(function(values) {
			var fn = jade.compileFile('./views/index.jade');
			var html = fn({data: data});


			models.htmlModel.setHtml({
				html: html
			}).then(function(){
				fs.writeFile('./public/index.html', html, function (err) {
					if (err) return res.send(err);
					res.send(200);
				});
			});

	 });
}

module.exports = {
	renderStatic: renderStatic,
	updateStaticInfo: updateStaticInfo,
	updateServerStorage: updateServerStorage
}


