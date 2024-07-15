const express = require('express')
const controller = require('../../controller/Inventory/MutationController')

const router = express.Router()

router.get('/', controller.FindAll)
router.get('/', controller.FindAllVariant)
router.get('/shipments', controller.FindAllShipment)
router.get('/approvals', controller.FindAllApproval)

router.post('/', controller.Create)
router.patch('/', controller.Approve)

module.exports = router