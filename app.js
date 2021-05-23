const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config({ path: './config.env' })
require('./db/connection')

app.use(express.json())
// const User = require('./model/UserSchema')
app.use(require('./router/auth.js'))

const PORT = process.env.PORT



// const middleware = (req, res, next) => {
//   console.log('you just hit me!')
//   next()
// }


app.listen(PORT, () => {
  console.log(`back-end is running on port ${PORT}`)
})
