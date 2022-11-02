//Routes

let express = require('express')
let router = express.Router()

let phonesController = require('../controllers/mailsController')

router.get('/', donorsController.get_donors)
router.get('/donor/:id', donorsController.get_donor)
router.post('/mail', mailsController.add_mail)

module.exports = router