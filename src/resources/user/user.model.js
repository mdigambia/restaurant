const mongoose = require( 'mongoose' )

const userSchema = mongoose.Schema({
	firstName: {
		type: String,
    maxLength: 25,    
	},
	middleName: {
		type: String,
		maxLength: 25,
	},
	lastName: {
		type: String,
		maxLength: 25,
  },
  phone: {
    type: String
  }
} )

const User = mongoose.model( 'User', userSchema )

module.exports = User