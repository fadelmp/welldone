const repository = require('../repository/Product/VariantRepository')
const InternalServer = require('../error/InternalServer')
const message = require('../message/VariantMessage')
const DataExists = require('../error/DataExists')
const NotFound = require('../error/NotFound')

class VariantComparator {

  async CheckId(id) {

    let variant = await repository.FindById(id)

    if (!variant)
      throw new NotFound(message.NOT_FOUND)

    return variant
  }

  async CheckSku(data) {

    let variant = await repository.FindBySku(data.sku)

    if (variant)
      if (variant.sku == data.sku && variant.id != data.id)
        throw new DataExists(message.SKU_EXISTS)
  }

  async CheckInventory(data) {

    let variant = await repository.FindById(data.id)
    let inventories = variant.inventories

    for (let inventory of inventories)
      if (inventory.total > 0)
        throw new InternalServer(message.INVENTORY_EXISTS)
  }
}

module.exports = new VariantComparator()