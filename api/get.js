const controllers = require('./../controllers');
const models = require('./../models');
const express = require('express');
const router = express.Router();

router.get('/api/todos', controllers.todosController.getAllTodos);

module.exports = router;
