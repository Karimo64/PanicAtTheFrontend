//Routes

let express = require('express')
let router = express.Router()

let mailsController = require('../controllers/mailsController')

//router.get('/', mailsController.get_mails)
router.get('/donor/:id', mailsController.get_mails)
router.post('/', mailsController.add_mail)

module.exports = router