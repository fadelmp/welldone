const express = require('express')
const controller = require('../../controller/Inventory/AdjustmentController')

const router = express.Router()

router.get('/', controller.FindAll)
router.get('/variants', controller.FindAllVariant)

router.post('/', controller.Create)

module.exports = router