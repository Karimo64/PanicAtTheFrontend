//BAMX API

let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

let port = 3000
let app = express()

let donors = require('./routes/donors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/donation', donations)
app.use('/', donors)
<<<<<<< Updated upstream
=======
app.use('/mail', mails)
app.use('/phone', phones)
app.use('/product', products)
app.use('/unit', units)
>>>>>>> Stashed changes

app.listen(port, () => {
  console.log("Server started in port ${port}")
})