const { DiscountStore } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Discount/DiscountMessage')

class DiscountStoreRepository {

  async Create(data) {

    try {
      return await DiscountStore.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async Delete(discountId) {

    try {
      return await DiscountStore.destroy({ where: { discountId: discountId }})
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED)
    } 
  }
}

module.exports = new DiscountStoreRepository()