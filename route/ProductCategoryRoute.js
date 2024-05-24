const express = require('express')
const CategoryController = require('../controller/ProductCategoryController')

const router = express.Router()

router.get('/product_categories/', CategoryController.FindAll.bind(CategoryController))
router.get('/product_categories/dropdown', CategoryController.FindDropdown.bind(CategoryController))

module.exports = router