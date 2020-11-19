const express = require('express');
const router = require('./routers');
const port = process.env.PORT || 4321
const session = require('express-session')

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { 
       secure: false,
       sameSite: true
    }
 }));

app.use('/', router)

app.listen(port, ()=>{
    console.log(`Memes is online http://localhost:${port}`)
})