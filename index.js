//console.log("Hello");
require('dotenv').config()
const express = require('express')  //added express for DB (storing express framework in express keyword)
const app = express() //storing express in app keyword (its like math function so that we can access multiple methods from math)
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send('Sanika here')
})

app.get('/twitter',(req,res) => {
    res.send('<h1>Please verify your identity</h1>')
})

app.listen(process.env.PORT, () => {             //process.env is for dotenv 
  console.log(`Example app listening on port ${port}`)
})