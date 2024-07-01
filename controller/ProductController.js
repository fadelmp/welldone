const ProductDto = require('../dto/ProductDto')
const response = require('../helper/Response')
const service = require('../service/Product/ProductService')
const message = require('../message/ProductMessage')

class ProductController {
  
  async FindAll(req, res, next) {

    try {
      let products = await service.FindAll()

      return (products.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SUCCESS, products)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindDropdown(req, res, next) {

    try {
      let categoryId = req.params.categoryId
      let dropdowns = await service.FindDropdown(categoryId)

      return (dropdowns.length == 0)
          ? response.NotFound(res, message.NOT_FOUND)
          : response.Success(res, message.DROPDOWN_SUCCESS, dropdowns)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let dto = new ProductDto(req)

      dto = await service.Create(dto)
      
      return response.Success(res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let dto = new ProductDto(req)

      dto = await service.Update(dto)

      return response.Success(res, message.UPDATE_SUCCESS, dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let dto = new ProductDto(req)

      await service.Delete(dto)

      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new ProductController()