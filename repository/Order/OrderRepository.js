const { Op } = require('sequelize')
const BaseRepository = require('../BaseRepository')
const { Order } = require('../../model')
const message = require('../../message/Order/OrderMessage')

class OrderRepository extends BaseRepository {

  async FindByDate(start, end) {

    let error = message.GET_FAILED
    let where = { createdAt: { [Op.between]: [start, end] } }

    return await this._FindAll(Order, where, [], error)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(Order, data, error)
  }

  async Update(data, totals) {

    let error = message.CREATE_FAILED
    let condition = { 
      totalDiscount: totals.discount, 
      totalCapital: totals.capital, 
      totalRevenue: totals.revenue,
      totalAmount: totals.amount,
      total: totals.final,
      isActived: true
    }

    return await this._SpecificUpdate(Order, data.id, condition, error)
  }
}

module.exports = new OrderRepository()