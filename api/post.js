var controllers = require('./../controllers');
var models = require('./../models');
var express = require('express');
var router = express.Router();

router.post("/api/todos", controllers.todosController.create);

module.exports = router;
