const BaseDto = require('../BaseDto')

class StoreDto extends BaseDto {

  constructor(req) {
    super(req)
    this.id = req.params.id
    this.name = req.body.name
    this.code = req.body.code
    this.address = req.body.address
    this.cityId = req.body.city_id
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      address: this.address,
      city_id: this.cityId,
      city_name: "",
      province_id: "",
      province_name: ""
    }
  }
}

module.exports = StoreDto
