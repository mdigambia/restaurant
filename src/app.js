require('dotenv').config()
const express = require( 'express' )
const app = express()
const userRouter = require('./resources/user/user.controller')

const middleware = require('./utilities/middleware')

app.use(express.json())
app.use(middleware.requestLogger)

const URI = process.env.MONGODB_URI
const connect = () => {
	return mongoose.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoIndex: false,
	})
}

try {
	connect() // Invoking the connect function
	console.log('connected to MongoDB')
} catch (error) {
	console.log('error connection to MongoDB:', error.message)
}

app.use('/api/user/', userRouter)
app.use( middleware.unknownEndpoint )

module.exports = app