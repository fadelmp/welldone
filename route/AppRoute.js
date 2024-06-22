// approute.js

const express = require('express')
const router = express.Router()

const category = require('./CategoryRoute')
const product = require('./ProductRoute')
const user = require('./UserRoute')

// Define routes in approute.js
router.get('/', (req, res) => {
  res.send('Welcome to the main app route')
})

// Mount other routes
router.use('/product-management/categories', category)
router.use('/product-management/products', product)
router.use('/users', user)

module.exports = router
