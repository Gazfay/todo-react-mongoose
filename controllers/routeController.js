var path = require('path');
var jade = require('jade');
var models = require('./../models');
var fs = require('fs');


function adminRoute (req, res, next) {
	res.sendfile(path.resolve('./frontend/admin/index.html'));
};


function mainRoute (req, res, next) {
	models.htmlModel.getHtml().then(function(html){
		res.send(html.html);
	});
};

function filterRoute (req, res, next) {
	res.send('./public/filter.html');
};

function loginRoute (req, res, next) {
	res.sendfile(path.resolve('./frontend/admin/login/login.html'));
}

module.exports = {
	adminRoute: adminRoute,
	mainRoute: mainRoute,
	filterRoute: filterRoute,
	loginRoute: loginRoute 
}


