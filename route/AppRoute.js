// approute.js

const express = require('express')
const router = express.Router()
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

// Authentication
router.use('/auth', auth)

// Store Management
router.use('/location', CheckRole, location)
router.use('/store-management/stores', CheckRole, store)

// User Management
router.use('/user-management/users', CheckRole, user)

// Product Management
router.use('/product-management/categories', CheckRole, category)
router.use('/product-management/products', CheckRole, product)
router.use('/product-management/variants', CheckRole, variant)

// Discount Management
router.use('/discount-management/vouchers', CheckRole, voucher)
router.use('/discount-management/discounts', CheckRole, discount)

// Inventory Management
router.use('/inventory-management/inventories', CheckRole, inventory)
router.use('/inventory-management/purchases', CheckRole, purchase)
router.use('/inventory-management/adjustments', CheckRole, adjustment)
router.use('/inventory-management/mutations', CheckRole, mutation)

// Order Management

// Report


module.exports = router
