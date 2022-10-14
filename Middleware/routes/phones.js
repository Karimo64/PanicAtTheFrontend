//Routes

let express = require('express')
let router = express.Router()

let phonesController = require('../controllers/phonesController')

router.get('/:id', phonesController.get_phones)

module.exports = router