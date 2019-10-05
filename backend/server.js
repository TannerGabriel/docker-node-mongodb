const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')

const port = 3000
const host = 'localhost'

mongoose
	.connect(
		'mongodb://localhost:27017/todo-list',
		{ useNewUrlParser: true }
	)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err))

const server = http.createServer(app)

server.listen(port, host, (err) => {
	if(err) {
		console.error(err)
	}
	console.log('Server is running on port ' + port)
})