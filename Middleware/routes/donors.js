//Routes

let express = require('express')
let router = express.Router()

let donorsController = require('../controllers/donorsController')

router.get('/', donorsController.get_donors)

module.exports = router