const express = require('express')
const controller = require('../controller/InventoryController')

const router = express.Router()

router.get('/', controller.FindAll)

module.exports = router