const dto = require('../dto/UserDto')
const response = require('../helper/Response')
const service = require('../service/User/UserService')
const message = require('../message/UserMessage')

class UserController {
  
  async FindAll(req, res, next) {

    try {
      let users = await service.FindAll()

      return (users.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SUCCESS, users)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let userDto = new dto(req)

      userDto = await service.Create(userDto)

      return response.Success(res, message.CREATE_SUCCESS, userDto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let userDto = new dto(req)

      userDto = await service.Update(userDto)

      return response.Success(res, message.UPDATE_SUCCESS, userDto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let userDto = new dto(req)

      await service.Delete(userDto)
      
      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new UserController()