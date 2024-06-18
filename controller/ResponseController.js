const ResponseDto = require('../dto/ResponseDto')

class ResponseController {

  async Success(res, message, data) {

    return this.response(res, 200, message, data)
  }

  async Failed(res, message) {

    return this.response(res, 500, message, {})
  }

  async NotFound(res, message) {

    return this.response(res, 404, message, {})
  }

  async BadRequest(res) {

    return this.response(res, 400, "Bad Request", {})
  }

  async response(res, httpCode, message, data) {

    let response = new ResponseDto(message, data)

    return res.status(httpCode).json(response)
  }
}

module.exports = new ResponseController()