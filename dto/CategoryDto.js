const BaseDto = require('./BaseDto')

class CategoryDto extends BaseDto {
    /**
   * @param {string} id - The unique identifier for the product.
   * @param {string} name - The name of the product.
   * @param {string} description - The description of the product.
   * @param {number} total_product - The unit price of the product.
   */

  constructor(id, name, description, username) {
    super()
    this.id = id
    this.name = name
    this.description = description
    this.username = username
  }
}

module.exports = CategoryDto
