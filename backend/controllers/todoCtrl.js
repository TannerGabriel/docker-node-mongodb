const Todo = require('../models/todo')

exports.getAllTodos = (req, res) => {
	Todo.find().then((items) => {
		res.status(200).json(items)
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}

exports.getOneTodo = (req, res) => {
	Todo.findOne({ _id: req.params.id }).then((item) => {
		res.status(200).json(item)
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}

exports.createTodo = (req, res) => {
	const todo = new Todo({
		title: req.body.title,
	})
	todo.save().then(() => {
		res.status(201).json({
			message: 'Successfully created Todo',
		})
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}

exports.deleteTodo = (req, res) => {
	Todo.deleteOne({ _id: req.params.id }).then(() => {
		res.status(200).json({
			message: 'Successfully deleted todo item',
		})
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}