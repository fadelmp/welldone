const BaseDto = require('../BaseDto')

class MutationVariantDto extends BaseDto {

  toJSON() {
    return {
      id: this.id,
      number: this.number,
      date: this.date,
      approve_date: this.approve_date,
      sku: this.sku,
      from_store_name: this.fromStoreName,
      to_store_name: this.toStoreName,
      product_name: this.productName,
      category_name: this.category,
      total_stock: this.totalStock,
      unit: this.unit,
      status: this.status
    }
  }
}

module.exports = MutationVariantDto
