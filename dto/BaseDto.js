const getusername = require('../middleware/GetUser')

class BaseDto {

  constructor(req) {
    this.activedUser = getusername(req)
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