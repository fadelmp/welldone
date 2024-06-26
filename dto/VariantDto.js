const BaseDto = require('./BaseDto')

class VariantDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.sku = req.body.sku
    this.size = req.body.size
    this.productId = req.body.product_id
    this.capitalPrice = req.body.capital_price
    this.unitPrice = req.body.unit_price
  }

  toJSON() {
    return {
      id: this.id,
      category_id: "",
      category_name: "",
      product_id: this.productId,
      product_name: "",
      sku: this.sku,
      size: this.size,
      capital_price: this.capitalPrice,
      unit_price: this.unitPrice,
      total_inventory: 0
    }
  }
}
  
module.exports = VariantDto