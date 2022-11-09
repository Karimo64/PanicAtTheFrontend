//BAMX API

let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let cors = require('cors')

let port = 3000
let app = express()

let donors = require('./routes/donors')
let donations = require('./routes/donations')
let mails = require('./routes/mails')
let products = require('./routes/products')
let units = require('./routes/units')
let phones = require('./routes/phones')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.use('/donation', donations)
app.use('/', donors)
app.use('/mail', mails)
app.use('/product', products)
app.use('/unit', units)
app.use('/phone', phones)

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})