const repository = require('../repository/Product/CategoryRepository')
const InternalServer = require('../error/InternalServer')
const message = require('../message/CategoryMessage')
const DataExists = require('../error/DataExists')
const NotFound = require('../error/NotFound')

class CategoryComparator {

  async CheckId(id) {

    let category = await repository.FindById(id)

    if (!category) throw new NotFound(message.NOT_FOUND)

    return category
  }

  async CheckName(data) {

    let category = await repository.FindByName(data.name)

    if (category && category.name == data.name && category.id != data.id) 
      throw new DataExists(message.NAME_EXISTS)
  }

  async CheckProduct(data) {

    let category = await repository.FindById(data.id)
    let products = category.products

    for (let product of products)
      if (!product.isDeleted) throw new InternalServer(message.PRODUCT_EXISTS)
  }
}

module.exports = new CategoryComparator()