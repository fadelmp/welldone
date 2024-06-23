const { Inventory } = require('../../model')
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

  async DeleteByStore(storeId) {

    try {
      return await Inventory.destroy({ where: { storeId: storeId }})
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED)
    } 
  }

  async DeleteByVariant(variantId) {

    try {
      return await Inventory.destroy({ where: { variantId: variantId }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED)
    }
  }
}

module.exports = new InventoryRepository()