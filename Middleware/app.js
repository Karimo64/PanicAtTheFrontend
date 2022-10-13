//BAMX API

let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

let port = 3000
let app = express()

let donors = require('./routes/donors')

app.use('/', donors)

app.listen(port, () => {
  console.log("Server started in port ${port}")
})