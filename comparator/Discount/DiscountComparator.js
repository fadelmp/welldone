const repository = require('../../repository/Discount/DiscountRepository')
const message = require('../../message/Discount/DiscountMessage')
const DataExists = require('../../error/DataExists')
const NotFound = require('../../error/NotFound')
const InternalServer = require('../../error/InternalServer')

class DiscountComparator {

  async Validate(discountId) {

    if (discountId === "")
      return
  
    let discount = await this.CheckId(discountId)
  
    await this.checkDate(discount.startDate, discount.endDate)
  
    return discount
  }

  async CheckId(id) {

    let discount = await repository.FindById(id)

    if (!discount) throw new NotFound(message.NOT_FOUND)

    return discount
  }

  async CheckName(data) {

    let discount = await repository.FindByDiscountName(data.name)

    if (discount && discount.name == data.name && discount.id != data.id) 
      throw new DataExists(message.NAME_EXISTS)
  }

  async checkDate(start, end) {

    let today = new Date()

    if (today < start || today > end)
      throw new InternalServer(message.EXPIRED) 
  }

}

module.exports = new DiscountComparator()