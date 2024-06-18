// approute.js

const express = require('express')
const router = express.Router()

const category = require('./CategoryRoute')

// Define routes in approute.js
router.get('/', (req, res) => {
  res.send('Welcome to the main app route')
})

// Mount other routes
router.use('/categories', category)

module.exports = router
