const GetUser = require('../middleware/GetUser')

class BaseDto {

  constructor(req) {
    this.activedUser = GetUser.ActivedUser(req)
    this.roleId = GetUser.RoleId(req)
    this.userId = GetUser.UserId(req)
    this.storeId = GetUser.StoreId(req)
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