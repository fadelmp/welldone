const repository = require('../../repository/Inventory/InventoryRepository')
const message = require('../../message/Inventory/InventoryMessage')
const NotFound = require('../../error/NotFound')

class InventoryComparator {

  async CheckStoreVariant(storeId, variantId) {

    let inventory = await repository.FindByStoreAndVariant(storeId, variantId)

    if (!inventory) throw new NotFound(message.NOT_FOUND)

    return inventory
  }

}

module.exports = new InventoryComparator()