const ResponseDto = require('../dto/ResponseDto')
const Token = require('./Token')

class Response {

  async Success(req, res, message, data) {

    return this.response(res, 200, message, token, data)
  }

  async Failed(req, res, message) {

    return this.response(res, 500, message, token, {})
  }

  async NotFound(req, res, message) {

    return this.response(res, 404, message, token, {})
  }

  async BadRequest(req, res) {

    return this.response(res, 400, "Bad Request", token, {})
  }

  async Login(res, message, token, data) {
    
    return this.response(res, 200, message, token, data)
  }

  async response(res, httpCode, message, token, data) {

    let response = new ResponseDto(message, token, data)

    return res.status(httpCode).json(response)
  }
}

module.exports = new Response()