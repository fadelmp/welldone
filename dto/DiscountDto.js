const BaseDto = require('./BaseDto')

class DiscountDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.code = req.body.code
    this.name = req.body.name
    this.description = req.body.description
    this.startDate = req.body.start_date
    this.endDate = req.body.end_date
    this.isNominal = req.body.isNominal
    this.value = req.body.value
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
      stores: this.stores,
      products: this.products
    }
  }
}

module.exports = CategoryDto
