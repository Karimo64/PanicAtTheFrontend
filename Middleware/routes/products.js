//Routes

let express = require('express')
let router = express.Router()

let phonesController = require('../controllers/productsController')

router.get('/', donorsController.get_donors)
router.get('/donor/:id', donorsController.get_donor)
router.post('/product', productsController.add_product)

module.exports = router