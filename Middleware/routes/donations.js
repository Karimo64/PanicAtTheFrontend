//Routes

let express = require('express')
let router = express.Router()

let phonesController = require('../controllers/donationsController')

router.get('/', donorsController.get_donors)
router.get('/donor/:id', donorsController.get_donor)
router.post('/donation', donationsController.add_donation)

module.exports = router