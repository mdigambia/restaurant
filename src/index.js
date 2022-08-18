const express = require('express')
const app = express()
const port = 3000

const me = {
  name: 'Lamin Mannheh',
  email: 'la@gmail.com',
  phone: '233333423',
  living: true,
  dob: '25/11/2001',
  status: 'Online'
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/me', (req, res) => {
  res.json(me)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
