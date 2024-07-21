const { DiscountProduct } = require('../../model')
const BaseRepository = require('../BaseRepository')
const message = require('../../message/Discount/DiscountMessage')

class DiscountProductRepository extends BaseRepository {

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(DiscountProduct, data, error)
  }

  async Delete(discountId) {

    let error = message.DELETE_FAILED
    let where = { discountId }

    return await this._Destroy(DiscountProduct, where, error)
  }
}

module.exports = new DiscountProductRepository()