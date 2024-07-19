const { Adjustment, AdjustmentVariant, Store } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Inventory/AdjustmentMessage')

class AdjustmentRepository {

  async FindAll() {
    
    try {
      return await Adjustment.findAll({ 
        where: { isDeleted: false }, 
        include: [
          { model: Store, as: 'store' },
          { model: AdjustmentVariant, as: 'variants' }
        ]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindAllByStore(storeId) {
    
    try {
      return await Adjustment.findAll({ 
        where: { storeId: storeId, isDeleted: false }, 
        include: [
          { model: Store, as: 'store' },
          { model: AdjustmentVariant, as: 'variants' }
        ]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await Adjustment.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }
}

module.exports = new AdjustmentRepository()