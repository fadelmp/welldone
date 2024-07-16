const express = require('express')
const controller = require('../../controller/Inventory/MutationController')

const router = express.Router()

router.get('/', controller.FindAll)
router.get('/variants', controller.FindAllVariant)
router.get('/shipments/:storeId', controller.FindShipment)
router.get('/approvals/:storeId', controller.FindApproval)

router.post('/', controller.Create)
router.patch('/approve/:id', controller.Approve)

module.exports = router