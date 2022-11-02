//Routes

let express = require('express')
let router = express.Router()

let productsController = require('../controllers/productsController')

router.get('/', productsController.get_products)
router.post('/', productsController.add_product)

module.exports = router