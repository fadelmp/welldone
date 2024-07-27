const moment = require('moment')
const itemService = require('./OrderItemService')
const mapper = require('../../mapper/Order/OrderMapper')
const voucherService = require('../Discount/VoucherService')
const comparator = require('../../comparator/Order/OrderComparator')
const repository = require('../../repository/Order/OrderRepository')

class OrderService {

  async Create(dto) {

    await comparator.CheckStock(dto)
    let voucher = await comparator.CheckVoucher(dto)

    let number = await this._generateNumber()
    let invoice = await this._generateInvoice(dto.storeName)

    let order = await mapper.ToOrder(dto, number, invoice)
    await mapper.Create(order, dto.activedUser)

    let orderRow = await repository.Create(order)
    let totals = await itemService.CreateAll(orderRow, dto)

    let discount = await voucherService.Calculate(voucher, totals)
    totals.discount += discount
    totals.final -= discount

    await repository.Update(orderRow, totals)
  }

  async _generateNumber() {

    let today = this._today()
    let start = this._startDay()
    let end = this._endDay()

    let totalOrder = await repository.FindByDate(start, end)

    return `${today}${String(totalOrder.length + 1).padStart(5, '0')}`
  }

  async _generateInvoice(storeName) {

    let today = this._today()
    let start = this._startDay()
    let end = this._endDay()

    let totalOrder = await repository.FindByDate(start, end)
    let storeAbbreviation = storeName.substring(0, 5).toUpperCase()
    
    return `${storeAbbreviation}/${today}/${String(totalOrder.length + 1).padStart(5, '0')}`
  }

  _today() {

    return moment().format('DDMMYY')
  }

  _startDay() {

    return moment().startOf('day').toDate()
  }

  _endDay() {

    return moment().endOf('day').toDate()
  }
}

module.exports = new OrderService()