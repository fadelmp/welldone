class BaseDto {

  constructor() {
    this.activedUser = ''
    this.isActived = true
    this.isDeleted = false
    this.createdAt = new Date()
    this.createdBy = ''
    this.updatedAt = new Date()
    this.updatedBy = ''
  }

  toJSON() {
    return {
      created_at: this.createdAt,
      created_by: this.createdBy,
      updated_at: this.updatedAt,
      updated_by: this.updatedBy
    };
  }
}

module.exports = BaseDto