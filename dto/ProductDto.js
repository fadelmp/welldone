// ProductDto.js

const BaseDto = require('./BaseDto')

class ProductDto extends BaseDto {

  constructor(id, name, description, category_id, image_1, image_2, image_3, unit, tags, sizes, username) {
    super(id)
    this.name = name
    this.description = description
    this.category_id = category_id
    this.image_1 = image_1
    this.image_2 = image_2
    this.image_3 = image_3
    this.unit = unit
    this.tags = tags
    this.sizes = sizes.map(size => new SizeDto(size.name, size.sku, size.unit_price, size.capital_price));
    this.username = username
  }
}

module.exports = ProductDto
