var controllers = require('./../controllers');
var models = require('./../models');
var express = require('express');
var router = express.Router();

router.get('/api/todos', controllers.todosController.getAll);

module.exports = router;
