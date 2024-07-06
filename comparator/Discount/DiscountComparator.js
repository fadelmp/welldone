const repository = require('../../repository/Discount/DiscountRepository')
const message = require('../../message/Discount/DiscountMessage')
const DataExists = require('../../error/DataExists')
const NotFound = require('../../error/NotFound')

class DiscountComparator {

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

}

module.exports = new DiscountComparator()