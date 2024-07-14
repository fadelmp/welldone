const { fn, col } = require('sequelize')
const { Purchase, PurchaseVariant, Store, Variant, Product, Category } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Inventory/PurchaseMessage')

class PurchaseVariantRepository {

  async FindAll() {
    
    try {
      return await PurchaseVariant.findAll({ 
        where: { isDeleted: false }, 
        include: [
          { model: Purchase, as: 'purchase', include: [{model: Store, as: 'store'}]},
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
      return await PurchaseVariant.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }
}

module.exports = new PurchaseVariantRepository()