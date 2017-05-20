const controllers = require('./../controllers');
const models = require('./../models');
const express = require('express');
const router = express.Router();

router.post("/api/todos", controllers.todosController.createTodo);

module.exports = router;
