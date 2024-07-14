const BaseDto = require('./BaseDto')

class PurchaseDto extends BaseDto {

  constructor(req) {
    super(req)
    this.deliveryNote = req.body.delivery_note
    this.date = req.body.date
    this.supplier = req.body.supplier
    this.storeId = req.body.store_id
    this.stocks = req.body.stocks
  }

  toJSON() {
    return {
      id: this.id,
      date: this.date,
      delivery_note: this.deliveryNote,
      supplier: this.supplier,
      store_name: this.storeName,
      total_variant: this.totalVariant,
      total_stock: this.totalStock
    }
  }
}

module.exports = PurchaseDto
