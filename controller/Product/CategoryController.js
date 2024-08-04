const CategoryDto = require('../../dto/Product/CategoryDto')
const response = require('../../helper/Response')
const service = require('../../service/Product/CategoryService')
const message = require('../../message/Product/CategoryMessage')

class CategoryController {
  
  async FindAll(req, res, next) {

    try {
      let categories = await service.FindAll()

      return (categories.length === 0)
        ? response.NotFound(req, res, message.NOT_FOUND)
        : response.Success(req, res, message.GET_SUCCESS, categories)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindDropdown(req, res, next) {

    try {
      let dropdowns = await service.FindDropdown()

      return (dropdowns.length == 0)
          ? response.NotFound(req, res, message.NOT_FOUND)
          : response.Success(req, res, message.DROPDOWN_SUCCESS, dropdowns)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let dto = new CategoryDto(req)

      dto = await service.Create(dto)

      return response.Success(req, res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let dto = new CategoryDto(req)

      dto = await service.Update(dto)

      return response.Success(req, res, message.UPDATE_SUCCESS, dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let dto = new CategoryDto(req)

      await service.Delete(dto)
      
      return response.Success(req, res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new CategoryController()