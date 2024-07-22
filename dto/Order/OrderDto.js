const BaseDto = require('../BaseDto')
const OrderItemDto = require('./OrderItemDto')

class OrderDto extends BaseDto {

  constructor(req) {
    super(req)
    this.storeId = req.body.store_id
    this.storeName = req.body.store_name
    this.paymentId = req.body.payment_id
    this.paymentName = req.body.payment_name
    this.voucherId = req.body.voucher_id
    this.voucherName = req.body.voucher_name
    this.items = this.parseItem(req.body.items)
  }

  parseItem(items) {
    
    return items.map(item => new OrderItemDto(item))
  }
}

module.exports = OrderDto
