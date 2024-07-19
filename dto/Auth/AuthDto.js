const BaseDto = require('../BaseDto')

class AuthDto extends BaseDto{

  constructor(req) {
    super(req)
    this.username = req.body.username
    this.password = req.body.password
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      url: this.url
    }
  }
}

module.exports = AuthDto
