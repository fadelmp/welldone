const { DiscountStore } = require('../../model')
const BaseRepository = require('../BaseRepository')
const message = require('../../message/Discount/DiscountMessage')

class DiscountStoreRepository extends BaseRepository {

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(DiscountStore, data, error)
  }

  async Delete(discountId) {

    let error = message.DELETE_FAILED
    let where = { discountId: discountId }

    return await this._Destroy(DiscountStore, where, error)
  }
}

module.exports = new DiscountStoreRepository()