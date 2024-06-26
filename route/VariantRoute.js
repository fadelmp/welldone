const express = require('express')
const controller = require('../controller/VariantController')

const router = express.Router()

router.get('/', controller.FindAll)
router.get('/dropdown/:productId', controller.FindDropdown)

router.post('/', controller.Create)
router.put('/:id', controller.Update)
router.delete('/:id', controller.Delete)

module.exports = router