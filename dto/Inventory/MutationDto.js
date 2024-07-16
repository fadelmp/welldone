const BaseDto = require('../BaseDto')

class MutationDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.number = req.body.number
    this.date = req.body.date
    this.fromStoreId = req.body.from_store_id
    this.fromStoreName = req.body.from_store_name
    this.toStoreId = req.body.to_store_id
    this.toStoreName = req.body.to_store_name
    this.stocks = req.body.stocks
  }

  toJSON() {
    return {
      id: this.id,
      number: this.number,
      date: this.date,
      approve_date: this.approveDate,
      from_store_name: this.fromStoreName,
      to_store_name: this.toStoreName,
      total_variant: this.totalVariant,
      total_stock: this.totalStock,
      status: this.status
    }
  }
}

module.exports = MutationDto
