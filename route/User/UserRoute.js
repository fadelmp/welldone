const express = require('express')
const controller = require('../../controller/User/UserController')

const router = express.Router()

router.get('/:id', controller.FindById)
router.get('/', controller.FindAll)

router.post('/', controller.Create)
router.put('/:id', controller.Update)
router.delete('/:id', controller.Delete)

router.patch('/change-password/:id', controller.ChangePassword)
router.patch('/reset-password/:id', controller.ResetPassword)
router.patch('/unblock/:id', controller.Unblock)

module.exports = router