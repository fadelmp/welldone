class BaseDto {
  constructor() {
    this.username = ''
    this.is_actived = true
    this.is_deleted = false
    this.created_at = new Date()
    this.created_by = ''
    this.updated_at = new Date()
    this.updated_by = ''
  }
}

module.exports = BaseDto