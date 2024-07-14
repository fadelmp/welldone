const { fn, col } = require('sequelize')
const { Purchase, PurchaseVariant, Store } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Inventory/PurchaseMessage')

class PurchaseRepository {

  async FindAll() {
    
    try {
      return await Purchase.findAll({ 
        where: { isDeleted: false }, 
        include: [
          { model: Store, as: 'store' },
          { model: PurchaseVariant, as: 'variants' }
        ]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await Purchase.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }
}

module.exports = new PurchaseRepository()