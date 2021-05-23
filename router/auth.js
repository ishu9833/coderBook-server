const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`hello world from back-end`)
})


router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({message: req.body})
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




module.exports = router;
