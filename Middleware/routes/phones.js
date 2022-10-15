//Routes

let express = require('express')
let router = express.Router()

let phonesController = require('../controllers/phonesController')

router.get('/:id', phonesController.get_phones)
router.post('/:id', phonesController.add_phone)
router.delete('/:phone_id', phonesController.delete_phone)
router.put('/:phone_id', phonesController.update_phone)

module.exports = router