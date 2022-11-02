//Routes

let express = require('express')
let router = express.Router()

let phonesController = require('../controllers/unitsController')

router.get('/', donorsController.get_donors)
router.get('/donor/:id', donorsController.get_donor)
router.post('/unit', unitsController.add_unit)

module.exports = router