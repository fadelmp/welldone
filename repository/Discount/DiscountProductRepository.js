const { DiscountProduct } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/DiscountMessage')

class DiscountProductRepository {

  async Create(data) {

    try {
      return await DiscountProduct.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async Delete(discountId) {

    try {
      return await Inventory.destroy({ where: { discountId: discountId }})
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED)
    } 
  }
}

module.exports = new DiscountProductRepository()