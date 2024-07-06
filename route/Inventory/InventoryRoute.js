const express = require('express')
const controller = require('../../controller/Inventory/InventoryController')

const router = express.Router()

router.get('/', controller.FindAll)

module.exports = router