const express = require('express')
const controller = require('../controller/UserController')

const router = express.Router()

router.get('/', controller.FindAll)
router.post('/', controller.Create)
router.put('/:id', controller.Update)
router.delete('/:id', controller.Delete)

module.exports = router