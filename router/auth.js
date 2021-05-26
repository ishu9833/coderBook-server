const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

// require('./db/connection')
const User = require('../model/UserSchema')

router.get('/', (req, res) => {
  res.send(`hello world from back-end`)
})

//registration route
router.post('/register', async (req, res) => {
  //read data from register form
  const { name, email, phone, work, password, cpassword } = req.body

  //check is all data exist or not
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: 'please confirm the all filed' })
  }

  //now here two case 1. if user email will be new or
  //2. user email will already exist on the database
  //so write tryCatch block

  try {
    //fined to database
    const userExist = await User.findOne({ email: email })
    //try--- userEmailExist? if it's true return some error message
    if (userExist) {
      return res.status(422).json({ error: 'This email already in use!' })
    }

    //if it's false --- make new user
    const user = new User({ name, email, phone, work, password, cpassword })

    //then new user should be registered and save the data to database
    await user.save()

    //now there are two part 1. registration will done or
    //2. registration failed

    res.status(201).json({ message: 'user registered successfully' })
  } catch (err) {
    console.log(err)
  }
})


//login route
router.post('/signin', async (req, res) => {
  try{
    const { email, password } = req.body
    if(!email || !password) {
      return res.status(400).json({message: "please, fill the all field."})
    }
    const userLogin = await User.findOne({email:email})

    if(userLogin) {
      const isMatched = await bcrypt.compare(password, userLogin.password)

      if(!isMatched) {
        res.status(400).json({error: "invalid credentials !"})
      }else{
        res.status(200).json({message: "user logged in successfully"})
      }
    } else{
      res.status(400).json({error: "invalid credentials !"})
    }
    
    
  }catch(err) {
    console.log(err)
  }
})

router.get('/about', (req, res) => {
  console.log('You hit about page')
  res.send(`hey, I am about-me section from back-end`)
})

router.get('/contact', (req, res) => {
  res.send(`hey, I am contact  section from back-end`)
})



module.exports = router
