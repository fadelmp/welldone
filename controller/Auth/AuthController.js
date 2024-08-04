const AuthDto = require('../../dto/Auth/AuthDto')
const response = require('../../helper/Response')
const service = require('../../service/Auth/AuthService')
const message = require('../../message/Auth/AuthMessage')

class AuthController {
  
  async Login(req, res, next) {

    try {
      let dto = new AuthDto(req)
      let { token, privileges } = await service.Login(dto)

      return response.Login(req, res, message.LOGIN_SUCCESS, token, privileges)
    
    } catch(error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new AuthController()