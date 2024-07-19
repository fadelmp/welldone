const UserDto = require('../../dto/User/UserDto')
const response = require('../../helper/Response')
const service = require('../../service/User/UserService')
const message = require('../../message/User/UserMessage')

class UserController {
  
  async FindAll(req, res, next) {

    try {
      let userDto = new UserDto(req)
      let users = await service.FindAll(userDto)

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
      let userDto = new UserDto(req)

      userDto = await service.Create(userDto)

      return response.Success(res, message.CREATE_SUCCESS, userDto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let userDto = new UserDto(req)

      userDto = await service.Update(userDto)

      return response.Success(res, message.UPDATE_SUCCESS, userDto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res, next) {

    try {
      let userDto = new UserDto(req)

      await service.Delete(userDto)
      
      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async ChangePassword(req, res, next) {

    try {
      let userDto = new UserDto(req)

      await service.ChangePassword(userDto)
      
      return response.Success(res, message.CHANGE_PASSWORD_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async ResetPassword(req, res, next) {

    try {
      let userDto = new UserDto(req)

      await service.ResetPassword(userDto)
      
      return response.Success(res, message.RESET_PASSWORD_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Unblock(req, res, next) {

    try {
      let userDto = new UserDto(req)

      await service.Unblock(userDto)
      
      return response.Success(res, message.UNBLOCK_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new UserController()