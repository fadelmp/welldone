// ProductDto.js

const BaseDto = require('./BaseDto')

class ProductDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.name = req.body.name
    this.description = req.body.description
    this.categoryId = req.body.category_id
    this.image_1 = image_1
    this.image_2 = image_2
    this.image_3 = image_3
    this.unit = unit
    this.tags = tags
    this.sizes = sizes.map(size => new SizeDto(size.name, size.sku, size.unit_price, size.capital_price))
  }
}

module.exports = ProductDto
