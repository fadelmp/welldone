const { fn, col } = require('sequelize')
const { Inventory, InventoryTrack, Store, Variant, Product, Category } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Inventory/InventoryMessage')

class InventoryRepository {

  async FindAll() {
    
    try {
      return await Inventory.findAll({ 
        where: { isDeleted: false }, 
        include: [
          { model: InventoryTrack, as: 'tracks' },
          { model: Store, as: 'store' }, 
          { model: Variant, as: 'variant', include: [
            { model: Product, as: 'product', include: [
              { model: Category, as: 'category'}
            ]}
          ]}
        ]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

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