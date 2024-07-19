const BaseDto = require('../BaseDto')

class UserDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.username = req.body.username
    this.fullname = req.body.fullname
    this.password = req.body.password
    this.roleId = req.body.role_id
    this.storeId = req.body.store_id
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
      role_id: this.roleId,
      role_name: "",
      store_id: this.storeId,
      store_name: "",
    }
  }
}

module.exports = UserDto
