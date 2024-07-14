const BaseDto = require('./BaseDto')

class AdjustmentDto extends BaseDto {

  constructor(req) {
    super(req)
    this.date = req.body.date
    this.storeId = req.body.store_id
    this.note = req.body.note
    this.stocks = req.body.stocks
  }

  toJSON() {
    return {
      id: this.id,
      date: this.date,
      note: this.note,
      store_name: this.storeName,
      total_variant: this.totalVariant,
      total_stock: this.totalStock
    }
  }
}

module.exports = AdjustmentDto
