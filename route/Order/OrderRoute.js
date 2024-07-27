const express = require('express')
const controller = require('../../controller/Order/OrderController')

const router = express.Router()

router.post('/', controller.Create)

module.exports = router