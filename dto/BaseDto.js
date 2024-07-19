const GetUser = require('../middleware/GetUser')

class BaseDto {

  constructor(req) {
    this.activedUser = GetUser.ActivedUser(req)
    this.userId = GetUser.UserId(req)
    this.role = GetUser.RoleId(req)
    this.store = GetUser.StoreId(req)
  }

  toJSON() {
    return {
      created_at: this.createdAt,
      created_by: this.createdBy,
      updated_at: this.updatedAt,
      updated_by: this.updatedBy
    }
  }
}

module.exports = BaseDto