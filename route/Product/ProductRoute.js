const express = require('express')
const controller = require('../../controller/Product/ProductController')

const router = express.Router()

router.get('/', controller.FindAll)
router.get('/dropdown/:categoryId', controller.FindDropdown)

router.post('/', controller.Create)
router.put('/:id', controller.Update)
router.delete('/:id', controller.Delete)

module.exports = router