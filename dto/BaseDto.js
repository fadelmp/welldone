const GetHeader = require('../helper/GetHeader')

class BaseDto {

  constructor(req) {
    this.activedUser = GetHeader.Username(req)
    this.userId = GetHeader.UserId(req)
    this.role = GetHeader.RoleId(req)
    this.store = GetHeader.StoreId(req)
    this.storeName = GetHeader.StoreName(req)
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