const { Province } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Store/LocationMessage')

class ProvinceRepository {

  async FindAll() {
    
    try {
      return await Province.findAll()
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_PROVINCE_FAILED)
    }
  }
}

module.exports = new ProvinceRepository()