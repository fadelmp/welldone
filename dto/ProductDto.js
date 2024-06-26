// ProductDto.js

const BaseDto = require('./BaseDto')
const VariantDto = require('./VariantDto')

class ProductDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.name = req.body.name
    this.description = req.body.description
    this.categoryId = req.body.category_id
    this.pathImage1 = req.body.path_image_1
    this.pathImage2 = req.body.path_image_2
    this.pathImage3 = req.body.path_image_3
    this.unit = req.body.unit
    this.tags = req.body.tags
    this.variants = req.body.variants
  }
}

module.exports = ProductDto
