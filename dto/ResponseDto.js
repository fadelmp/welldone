class ResponseDto {
  constructor(message, token, data) {
    this.message = message
    this.token = token
    this.data = data
  }
}

module.exports = ResponseDto