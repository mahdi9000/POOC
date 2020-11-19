const express = require('express');
const router = require('./routers/index.js');
const app = express()
const port = 4000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))

app.use('/', router)

app.listen(port, ()=>{
    console.log(`Memepage online at`, port)
})