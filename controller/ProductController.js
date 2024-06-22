const dto = require('../dto/ProductDto')
const response = require('../helper/Response')
const service = require('../service/ProductService')
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
      let dropdowns = await service.FindDropdown()

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
      let productDto = new dto(req)
      productDto.username = await getUsername.getUsername(req)

      productDto = await service.Create(productDto)
      return response.Success(res, message.CREATE_SUCCESS, productDto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let productDto = new dto(req)
      productDto.username = await getUsername.getUsername(req)

      productDto = await service.Update(productDto)
      return response.Success(res, message.UPDATE_SUCCESS, productDto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let productDto = new dto(req)
      productDto.username = await getUsername.getUsername(req)

      await service.Delete(productDto)
      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new ProductController()