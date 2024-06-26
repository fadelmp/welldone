const repository = require('../repository/Product/ProductRepository')
const message = require('../message/ProductMessage')
const DataExists = require('../error/DataExists')
const NotFound = require('../error/NotFound')

class ProductComparator {

  async CheckId(id) {

    let product = await repository.FindById(id)

    if (!product) throw new NotFound(message.NOT_FOUND)

    return product
  }

  async CheckName(data) {

    let product = await repository.FindByName(data.name)

    if (product && product.name == data.name && product.id != data.id)
      throw new DataExists(message.NAME_EXISTS)
  }

  async CheckVariant(data) {

    let product = await repository.FindById(data.id)
    let variants = product.variants

    for (let variant of variants)
      if (!variant.isDeleted) throw new InternalServer(message.VARIANT_EXISTS)
  }
}

module.exports = new ProductComparator()