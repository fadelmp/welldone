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
router.use('/store-management/stores', CheckAuth, CheckRole, store)
router.use('/store-management/locations', CheckAuth, CheckRole, location)

// User Management
router.use('/user-management/users', CheckAuth, CheckRole, user)

// Product Management
router.use('/product-management/categories', CheckAuth, CheckRole, category)
router.use('/product-management/products', CheckAuth, CheckRole, product)
router.use('/product-management/variants', CheckAuth, CheckRole, variant)

// Discount Management
router.use('/discount-management/vouchers', CheckAuth, CheckRole, voucher)
router.use('/discount-management/discounts', CheckAuth, CheckRole, discount)

// Inventory Management
router.use('/inventory-management/inventories', CheckAuth, CheckRole, inventory)
router.use('/inventory-management/purchases', CheckAuth, CheckRole, purchase)
router.use('/inventory-management/adjustments', CheckAuth, CheckRole, adjustment)
router.use('/inventory-management/mutations', CheckAuth, CheckRole, mutation)

// Order Management

// Cashier
router.use('/cashier/orders', order)

// Report


module.exports = router
