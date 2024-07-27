const repository = require('../../repository/Discount/DiscountRepository')
const message = require('../../message/Discount/VoucherMessage')
const DataExists = require('../../error/DataExists')
const NotFound = require('../../error/NotFound')
const InternalServer = require('../../error/InternalServer')

class VoucherComparator {

  async Validate(voucherId, total) {

    if (voucherId === "")
      return

    let voucher = await this.CheckId(voucherId)

    await this.checkDate(voucher.startDate, voucher.endDate)
    await this.checkMinimum(voucher.minimum, total)

    return voucher
  }

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

  async checkDate(start, end) {

    let today = new Date()

    if (today < start || today > end)
      throw new InternalServer(message.EXPIRED) 
  }

  async checkMinimum(minimum, total) {

    if (total < minimum)
      throw new InternalServer(message.UNDER_MINIMUM)
  }

}

module.exports = new VoucherComparator()