const controllers = require('./../controllers');
const models = require('./../models');
const express = require('express');
const router = express.Router();

router.put("/api/todos/:id", controllers.todosController.updateTodo);


module.exports = router;