//Routes

let express = require('express')
let router = express.Router()

let donationsController = require('../controllers/donationsController')

router.get('/', donationsController.get_donation)
//router.get('/donor/:id', donationsController.ge)
router.post('/', donationsController.add_donation)

module.exports = router