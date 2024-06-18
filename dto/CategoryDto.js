const BaseDto = require('./BaseDto')

class CategoryDto extends BaseDto {

  constructor(id, name, description, username) {
    super()
    this.id = id
    this.name = name
    this.description = description
    this.username = username
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      total_product: 0
    };
  }
}

module.exports = CategoryDto
