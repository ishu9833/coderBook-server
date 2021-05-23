const express = require('express')
const router = express.Router()

// require('./db/connection')
const User = require('../model/UserSchema')

router.get('/', (req, res) => {
  res.send(`hello world from back-end`)
})

router.post('/register', (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'please confirm the all filed' })
  }

  User.findOne({ email: email }).then(userExist => {
    if (userExist) {
      return res.status(422).json({ error: 'This email already in use!' })
    }
    const user = new User({ name, email, phone, work, password, cpassword })

    user
      .save()
      .then(() => {
        res.
          status(201)
            .json({ message: 'user registered successfully' })
            .catch(err => {
              res.status(500).json({ error: 'failed to registered' })
            })
      })
      .catch(err => {
        console.log(err)
      })
  })
})

router.get('/about', (req, res) => {
  console.log('You hit about page')
  res.send(`hey, I am about-me section from back-end`)
})

router.get('/contact', (req, res) => {
  res.send(`hey, I am contact  section from back-end`)
})

router.get('/signin', (req, res) => {
  res.send(`hey, I am sign-in  section from back-end`)
})

module.exports = router
