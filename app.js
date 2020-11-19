const express = require('express');
const router = require('./routers');
const port = process.env.PORT || 4321

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use('/', router)

app.listen(port, ()=>{
    console.log(`Memes is online http://localhost:${port}`)
})