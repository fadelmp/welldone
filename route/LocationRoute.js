const express = require('express')
const controller = require('../controller/LocationController')

const router = express.Router()

router.get('/provinces', controller.FindProvince)
router.get('/cities/:provinceId', controller.FindCity)

module.exports = router