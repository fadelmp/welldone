// approute.js

const express = require('express')
const router = express.Router()

const category = require('./CategoryRoute')
const product = require('./ProductRoute')
const variant = require('./VariantRoute')
const user = require('./UserRoute')
const location = require('./LocationRoute')
const store = require('./StoreRoute')
const voucher = require('./VoucherRoute')
const discount = require('./DiscountRoute')

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

// Order Management

// Report


module.exports = router
