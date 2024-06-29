const BaseDto = require('./BaseDto')

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
    this.variants = (req.body.variants) ? this.parseVariant(req.body.variants) : []
  }

  parseVariant(variants) {
    
    return variants.map(variant => this.variant(variant))
  }

  variant(variant) {

    return {
      id: variant.id,
      sku: variant.sku,
      size: variant.size,
      capitalPrice: variant.capital_price,
      unitPrice: variant.unit_price,
      categoryId: variant.category_id,
      action: variant.action
    }
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      category_id: this.categoryId,
      path_image_1: this.pathImage1,
      path_image_2: this.pathImage2,
      path_image_3: this.pathImage3,
      unit: this.unit,
      tags: this.tags,
      total_variant: 0,
      variants: this.variants
    }
  }
}

module.exports = ProductDto
