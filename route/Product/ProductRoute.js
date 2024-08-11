const express = require('express')
const controller = require('../../controller/Product/ProductController')

const router = express.Router()

router.get('/dropdown/:categoryId', controller.FindDropdown)
router.get('/:id', controller.FindById)
router.get('/', controller.FindAll)

router.post('/', controller.Create)
router.put('/:id', controller.Update)
router.delete('/:id', controller.Delete)

module.exports = router