const express = require('express')
const controller = require('../../controller/Auth/AuthController')

const router = express.Router()

router.post('/login', controller.Login)

module.exports = router