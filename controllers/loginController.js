var config = require('./../config/config');
var path = require('path');

function checkAdmin (req, res, next) {
	res.sendfile(path.resolve('./frontend/admin/login/login.html'));
};

function logOut (req, res, next) {
	req.logout();
  res.redirect('/');
}

module.exports = {
	checkAdmin: checkAdmin,
	logOut: logOut 
}