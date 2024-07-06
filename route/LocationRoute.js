const express = require('express')
const controller = require('../controller/Store/LocationController')

const router = express.Router()

router.get('/provinces', controller.FindProvince)
router.get('/cities/:provinceId', controller.FindCity)

module.exports = router