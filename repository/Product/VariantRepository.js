const { Category, Product, Variant } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/ProductMessage')

class VariantRepository {

  async FindAll() {
    
    try {
      return await Variant.findAll({ where: { isDeleted: false }})
    
    } catch (error) {
      // Error Handling
      console.log(error)
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }
}

module.exports = new VariantRepository()