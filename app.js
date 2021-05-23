const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config({ path: './config.env' })
require('./db/connection')
const User = require('./model/UserSchema')

const PORT = process.env.PORT

const middleware = (req, res, next) => {
  console.log('you just hit me!')
  next()
}

app.get('/', (req, res) => {
  res.send(`hello world from back-end`)
})

app.get('/about', middleware, (req, res) => {
  console.log('You hit about page')
  res.send(`hey, I am about-me section from back-end`)
})

app.get('/contact', (req, res) => {
  res.send(`hey, I am contact  section from back-end`)
})

app.get('/signin', (req, res) => {
  res.send(`hey, I am sign-in  section from back-end`)
})

app.get('/register', (req, res) => {
  res.send(`hey, I am register  section from back-end`)
})

app.listen(PORT, () => {
  console.log(`back-end is running on port ${PORT}`)
})
