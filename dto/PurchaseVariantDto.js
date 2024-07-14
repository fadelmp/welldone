const BaseDto = require('./BaseDto')

class PurchaseVariantDto extends BaseDto {

  toJSON() {
    return {
      id: this.id,
      date: this.date,
      sku: this.sku,
      store_name: this.storeName,
      product_name: this.productName,
      category_name: this.category,
      delivery_note: this.deliveryNote,
      total_stock: this.totalStock,
      unit: this.unit
    }
  }
}

module.exports = PurchaseVariantDto
