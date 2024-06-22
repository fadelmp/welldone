// approute.js

const express = require('express')
const router = express.Router()

const category = require('./CategoryRoute')
const product = require('./ProductRoute')
const user = require('./UserRoute')
const location = require('./LocationRoute')
const store = require('./StoreRoute')

// Define routes in approute.js
router.get('/', (req, res) => {
  res.send('Welcome to the main app route')
})

// Mount other routes
router.use('/location', location)
router.use('/store-management/stores', store)
router.use('/product-management/categories', category)
router.use('/product-management/products', product)
router.use('/user-management/users', user)

module.exports = router
