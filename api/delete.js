const controllers = require('./../controllers');
const models = require('./../models');
const express = require('express');
const router = express.Router();

router.delete('/api/todos/:id', controllers.todosController.deleteTodo);

module.exports = router;