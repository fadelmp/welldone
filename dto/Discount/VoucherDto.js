const BaseDto = require('../BaseDto')

class VoucherDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.code = req.body.code
    this.name = req.body.name
    this.description = req.body.description
    this.startDate = req.body.start_date
    this.endDate = req.body.end_date
    this.isNominal = req.body.is_nominal
    this.value = req.body.value
    this.maximum = req.body.maximum
    this.minimum = req.body.minimum
    this.stores = req.body.stores
    this.products = req.body.products
  }

  toJSON() {
    return {
      id: this.id,
      code: this.code,
      name: this.name,
      description: this.description,
      start_date: this.startDate,
      end_date: this.endDate,
      is_nominal: this.isNominal,
      value: this.value,
      maximum: this.maximum,
      minimum: this.minimum,
      stores: this.stores,
      products: this.products
    }
  }
}

module.exports = VoucherDto
