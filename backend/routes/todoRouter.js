const express = require('express')
const todoCtrl = require('../controllers/todoCtrl')
const router = express.Router()

router.get('/', todoCtrl.getAllTodos)
router.get('/:id', todoCtrl.getOneTodo)
router.post('/', todoCtrl.createTodo)
router.delete('/:id', todoCtrl.deleteTodo)

module.exports = router