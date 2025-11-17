require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
   "name": "mybackend",
  "version": "1.0.0",
  "description": "a basic app",
  "main": "index.js",
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) =>{
    res.send('bilal malik77')
})
app.get('/login',(req,res)=>{
    res.send('login page here')
})
app.get('/github', (req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
