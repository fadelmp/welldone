const express = require('express')
const controller = require('../../controller/Discount/VoucherController')

const router = express.Router()

router.get('/', controller.FindAll)
router.get('/dropdown', controller.FindDropdown)

router.post('/', controller.Create)
router.put('/:id', controller.Update)
router.delete('/:id', controller.Delete)

module.exports = router