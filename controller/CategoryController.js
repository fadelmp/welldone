const dto = require('../dto/CategoryDto')
const response = require('./ResponseController')
const service = require('../service/CategoryService')
const message = require('../config/CategoryMessage')
const getUser = require('../middleware/GetUser')

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
      let username = await getUser.getUsername(req)
      let categoryDto = new dto("", name, description, username)

      categoryDto = await service.Create(categoryDto)
      return response.Success(res, message.CREATE_SUCCESS, categoryDto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let { id } = req.params
      let { name, description } = req.body
      let username = await getUser.getUsername(req)
      let categoryDto = new dto(id, name, description, username)

      categoryDto = await service.Update(categoryDto)
      return response.Success(res, message.UPDATE_SUCCESS, categoryDto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let { id } = req.params
      let username = await getUser.getUsername(req)
      let categoryDto = new dto(id, "", "", username)

      await service.Delete(categoryDto)
      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new CategoryController()