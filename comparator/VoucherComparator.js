const repository = require('../repository/Discount/DiscountRepository')
const message = require('../message/Discount/VoucherMessage')
const DataExists = require('../error/DataExists')
const NotFound = require('../error/NotFound')

class voucherComparator {

  async CheckId(id) {

    let voucher = await repository.FindById(id)

    if (!voucher) throw new NotFound(message.NOT_FOUND)

    return voucher
  }

  async CheckName(data) {

    let voucher = await repository.FindByVoucherName(data.name)

    if (voucher && voucher.name == data.name && voucher.id != data.id) 
      throw new DataExists(message.NAME_EXISTS)
  }

  async CheckCode(data) {

    let voucher = await repository.FindByVoucherCode(data.code)

    if (voucher && voucher.code == data.code && voucher.id != data.id)
      throw new DataExists(message.CODE_EXISTS)
  }
}

module.exports = new voucherComparator()