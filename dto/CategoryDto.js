const BaseDto = require('./BaseDto')

class CategoryDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.name = req.body.name
    this.description = req.body.description
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      total_product: 0
    }
  }
}

module.exports = CategoryDto
