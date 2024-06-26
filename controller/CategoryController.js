const CategoryDto = require('../dto/CategoryDto')
const response = require('../helper/Response')
const service = require('../service/Product/CategoryService')
const message = require('../message/CategoryMessage')

class CategoryController {
  
  async FindAll(req, res, next) {

    try {
      let categories = await service.FindAll()

      return (categories.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SUCCESS, categories)

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
      let dto = new CategoryDto(req)

      dto = await service.Create(dto)

      return response.Success(res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let dto = new CategoryDto(req)

      dto = await service.Update(dto)

      return response.Success(res, message.UPDATE_SUCCESS, dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let dto = new CategoryDto(req)

      await service.Delete(dto)
      
      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new CategoryController()