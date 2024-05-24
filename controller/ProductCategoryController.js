const dto = require('../dto/ProductCategoryDto')
const service = require('../service/ProductCategoryService')

class ProductCategoryController {
  
  async FindAll(req, res) {

    const productCategories = await servicesVersion.FindAll()
    
    res.status(200).json(productCategories)
  }

  async FindDropdown(req, res) {

    const dropdownDtos = await service.FindDropdown()

    res.status(200).json(dropdownDtos)
  }

}

module.exports = new ProductCategoryController();