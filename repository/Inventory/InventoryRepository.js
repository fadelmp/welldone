const Inventory = require('../../model/Inventory/Inventory')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/InventoryMessage')

class InventoryRepository {

  async Create(data) {

    try {
      return await Inventory.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }
}

module.exports = new InventoryRepository()