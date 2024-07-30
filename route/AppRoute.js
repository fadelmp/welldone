// approute.js

const express = require('express')
const router = express.Router()

const CheckAuth = require('../middleware/CheckAuth')
const CheckRole = require('../middleware/CheckRole')

const category = require('./Product/CategoryRoute')
const product = require('./Product/ProductRoute')
const variant = require('./Product/VariantRoute')

const auth = require('./Auth/AuthRoute')
const user = require('./User/UserRoute')

const location = require('./Store/LocationRoute')
const store = require('./Store/StoreRoute')

const voucher = require('./Discount/VoucherRoute')
const discount = require('./Discount/DiscountRoute')

const inventory = require('./Inventory/InventoryRoute')
const purchase = require('./Inventory/PurchaseRoute')
const adjustment = require('./Inventory/AdjustmentRoute')
const mutation = require('./Inventory/MutationRoute')

const order = require('./Order/OrderRoute')

// Authentication
router.use('/auth', auth)

// Store Management
router.use('/store-management/stores', store)
router.use('/store-management/locations', location)

// User Management
router.use('/user-management/users', user)

// Product Management
router.use('/product-management/categories', category)
router.use('/product-management/products', product)
router.use('/product-management/variants', variant)

// Discount Management
router.use('/discount-management/vouchers', voucher)
router.use('/discount-management/discounts', discount)

// Inventory Management
router.use('/inventory-management/inventories', inventory)
router.use('/inventory-management/purchases', purchase)
router.use('/inventory-management/adjustments', adjustment)
router.use('/inventory-management/mutations', mutation)

// Order Management

// Cashier
router.use('/cashier/orders', order)

// Report


module.exports = router
