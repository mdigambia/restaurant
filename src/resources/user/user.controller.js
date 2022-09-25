const useRouter = require('express').Router();
const Users = require( './user.model' )
  
useRouter.get( '/api/users/:id', ( request, response ) => {
	const id = request.params.id
  const user = Users.findById( id )
  
  if ( !user ) {
    response.status( 404 ).json( {
      error: 'user not found!'
    })
  }

	response.json(user)
})


useRouter.delete('/api/users/:id', (req, res) => {
	const id = req.params.id
	Users = Users.filter((u) => u.id !== Number(id))

	res.status(204).end()
})

useRouter.post('/api/users', (req, res) => {
	const content = req.body

	// here we save the content to the database
	res.json(content)
})

useRouter.put('/api/users/:id', (req, res) => {
	const id = req.params.id

	res.id
})


module.exports = useRouter