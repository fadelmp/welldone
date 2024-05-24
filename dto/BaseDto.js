class BaseDto {
  constructor() {
    this.isActived = true;
    this.isDeleted = false;
    this.createdAt = new Date();
    this.createdBy = '';
    this.updatedAt = new Date();
    this.updatedBy = '';
  }
}

module.exports = BaseDto;