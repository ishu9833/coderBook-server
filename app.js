const express = require("express");
const mongoose = require("mongoose")
const app = express()



const DB = 'mongodb://mernstack:mernstack-1234@cluster0-shard-00-00.iwo8o.mongodb.net:27017,cluster0-shard-00-01.iwo8o.mongodb.net:27017,cluster0-shard-00-02.iwo8o.mongodb.net:27017/coderDataBase?ssl=true&replicaSet=atlas-tce7jv-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(DB).then(()=> {
    console.log('connection successful')
}).catch((err) => {
    console.log(err, `connection failed`)
})


const middleware = (req, res, next) => {
    console.log('you just hit me!')
    next()
}


app.get('/', (req, res)=> {
    res.send(`hello world from back-end`)
})

app.get('/about', middleware ,(req, res)=> {
    console.log('You hit about page')
    res.send(`hey, I am about-me section from back-end`)
})

app.get('/contact', (req, res)=> {
    res.send(`hey, I am contact  section from back-end`)
})

app.get('/signin', (req, res)=> {
    res.send(`hey, I am sign-in  section from back-end`)
})

app.get('/register', (req, res)=> {
    res.send(`hey, I am register  section from back-end`)
})

app.listen(3001, ()=>{
    console.log(`back-end is running on port 3001`)
})
