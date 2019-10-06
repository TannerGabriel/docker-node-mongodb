const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const port = 3000

mongoose
	.connect(
		`mongodb://${process.env.HOST}:27017/todo-list`, {
			useNewUrlParser: true
		}
	)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err))

const server = http.createServer(app)

server.listen(port, (err) => {
	if (err) {
		console.error(err)
	}
	console.log('Server is running on port ' + port)
})