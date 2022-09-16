require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()
const port = process.env.PORT

const middleware = require('./utilities/middleware')


app.use(express.json())
app.use(middleware.requestLogger)



const URI = process.env.MONGODB_URI
const connect = () => {
  return mongoose.connect(
    URI,
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      autoIndex: false
    }
  )
}

try {
  connect() // Invoking the connect function
  console.log('connected to MongoDB');
} catch (error) {
  console.log('error connection to MongoDB:', error.message)
}







// TODO: once we get the database working we need to remove this
const me = {
  name: 'Lamin Mannheh',
  email: 'la@gmail.com',
  phone: '233333423',
  living: true,
  dob: '25/11/2001',
  status: 'Online'
}

let users = [
  {
    id: 1,
    username: 'camariana',
    phone: '0001111',
    password: 'secrete'
  },
  {
    id: 2,
    username: 'jankeh',
    phone: '1112222',
    password: 'secrete'
  }

]



const potions = [
  {
    potion_id: 1,
    name: "love",
    price: 12,
    vendor_id: 1
  },
  {
    potion_id: 2,
    name: "love",
    price: 12,
    vendor_id: 1
  },
  {
    potion_id: 3,
    name: "love",
    price: 12,
    vendor_id: 1,
    profile_image: '/assets/images/profile.jpg'
  }
]


app.get('/api/users/:id', (req, res) => {
  const id = req.params.id 
  const user = users.find((u) => u.id === Number(id))
  res.json(user)
})

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id
  users = users.filter((u) => u.id !== Number(id))

  res.status(204).end()
})

app.post('/api/users', (req, res) => {

  const content = req.body
  
  // here we save the content to the database
  res.json(content)
})


app.put('/api/users/:id', (req, res) => {
  const id = req.params.id

  res.id
})


app.use(middleware.unknownEndpoint)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
