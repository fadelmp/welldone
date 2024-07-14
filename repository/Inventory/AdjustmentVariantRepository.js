const { Adjustment, AdjustmentVariant, Store, Variant, Product, Category } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Inventory/AdjustmentMessage')

class AdjustmentVariantRepository {

  async FindAll() {
    
    try {
      return await AdjustmentVariant.findAll({ 
        where: { isDeleted: false }, 
        include: [
          { model: Adjustment, as: 'adjustment', include: [{model: Store, as: 'store'}]},
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
      return await AdjustmentVariant.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }
}

module.exports = new AdjustmentVariantRepository()