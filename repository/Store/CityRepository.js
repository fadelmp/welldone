const city = require('../../model/Store/City')
const QueryFailed = require('../error/QueryFailed')
const message = require('../message/UserMessage')

class CityRepository {

  async FindAll(provinceId) {
    
    try {
      return await city.findAll({ where: { provinceId: provinceId }})
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }
}

module.exports = new CityRepository()