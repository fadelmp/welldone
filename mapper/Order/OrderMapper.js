const BaseMapper = require("../BaseMapper")

class OrderMapper extends BaseMapper {

  async ToOrder(dto, number, invoice) {

    return {
      number: number,
      invoice: invoice,
      storeId: dto.store,
      storeName: dto.storeName,
      paymentId: dto.paymentId,
      paymentName: dto.paymentName,
      voucherId: dto.voucherId,
      voucherName: dto.voucherName,
      isActived: false
    }
  }
	
}

module.exports = new OrderMapper()