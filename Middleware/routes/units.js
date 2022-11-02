//Routes

let express = require('express')
let router = express.Router()

let unitsController = require('../controllers/unitsController')

router.get('/', unitsController.get_units)
router.post('/', unitsController.add_unit)

module.exports = router