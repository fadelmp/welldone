const express = require('express')
const controller = require('../../controller/Inventory/PurchaseController')

const router = express.Router()

router.get('/', controller.FindAll)
router.get('/variants', controller.FindByVariant)

router.post('/', controller.Create)

module.exports = router