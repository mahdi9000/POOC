const express = require('express');
const router = require('./routers');
const port = process.env.PORT || 3000

const app = express()
app.set('view engine', ejs)
app.use(express.urlencoded({extended:true}))

app.use('/', router)

app.listen(port, ()=>{
    console.log(`Bookstore is online http://localhost:${port}`)
})