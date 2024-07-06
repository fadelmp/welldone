// approute.js

const express = require('express')
const router = express.Router()

const category = require('./Product/CategoryRoute')
const product = require('./Product/ProductRoute')
const variant = require('./Product/VariantRoute')
const user = require('./User/UserRoute')
const location = require('./Store/LocationRoute')
const store = require('./Store/StoreRoute')
const voucher = require('./Discount/VoucherRoute')
const discount = require('./Discount/DiscountRoute')
const inventory = require('./Inventory/InventoryRoute')

// Define routes in approute.js
router.get('/', (req, res) => {
  res.send('Welcome to the main app route')
})

// Mount other routes

// Location API
router.use('/location', location)

// Store Management
router.use('/store-management/stores', store)

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

// Order Management

// Report


module.exports = router
