//BAMX API

let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

let port = 3000
let app = express()

let donors = require('./routes/donors')
let phones = require('./routes/phones')
let mails = require('./routes/mails')
let products = require('./routes/products')
let units = require('./routes/units')
let donations = require('./routes/donations')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', donors)
app.use('/phone', phones)

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})