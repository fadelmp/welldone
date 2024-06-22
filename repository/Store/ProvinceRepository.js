const province = require('../../model/Store/Province')
const QueryFailed = require('../error/QueryFailed')
const message = require('../message/UserMessage')

class ProvinceRepository {

  async FindAll() {
    
    try {
      return await province.findAll()
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }
}

module.exports = new ProvinceRepository()