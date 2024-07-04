const { Inventory, InventoryTrack } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/InventoryMessage')

class InventoryTrackRepository {

  async Create(data) {

    try {
      return await InventoryTrack.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async DeleteByStore(storeId) {

    try {
      return await InventoryTrack.destroy({include: [{ model: Inventory, where: { storeId: storeId } }]})
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED)
    } 
  }

  async DeleteByVariant(variantId) {

    try {
      return await InventoryTrack.destroy({include: [{ model: Inventory, where: { variantId: variantId } }]})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED)
    }
  }
}

module.exports = new InventoryTrackRepository()