const BaseDto = require('./BaseDto')

class InventoryDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.name = req.body.name
    this.description = req.body.description
  }

  toJSON() {
    return {
      id: this.id,
      sku: this.sku,
      product_name: this.productName,
      category_name: this.categoryName,
      store_name: this.storeName,
      beginning: this.beginning,
      entry: this.entry,
      adjustment: this.adjustment,
      transfer_in: this.transferIn,
      transfer_out: this.transferOut,
      sales: this.sales,
      ending: this.ending,
      unit: this.unit
    }
  }
}

module.exports = CategoryDto
