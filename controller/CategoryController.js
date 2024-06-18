const dto = require('../dto/CategoryDto')
const response = require('./ResponseController')
const service = require('../service/CategoryService')
const message = require('../config/CategoryMessage')
const get_user = require('../middleware/GetUser')

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
      let { name, description } = req.body
      let username = await get_user.getUsername(req)
      let category_dto = new dto("", name, description, username)

      category_dto = await service.Create(category_dto)
      return response.Success(res, message.CREATE_SUCCESS, category_dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let { id } = req.params
      let { name, description } = req.body
      let username = await get_user.getUsername(req)
      let category_dto = new dto(id, name, description, username)

      category_dto = await service.Update(category_dto)
      return response.Success(res, message.UPDATE_SUCCESS, category_dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let { id } = req.params
      let username = await get_user.getUsername(req)
      let category_dto = new dto(id, "", "", username)

      await service.Delete(category_dto)
      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new CategoryController()