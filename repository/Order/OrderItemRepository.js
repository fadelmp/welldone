const BaseRepository = require('../BaseRepository')
const { OrderItem } = require('../../model')
const message = require('../../message/Order/OrderMessage')

class OrderItemRepository extends BaseRepository {

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(OrderItem, data, error)
  }
}

module.exports = new OrderItemRepository()