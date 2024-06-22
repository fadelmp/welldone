const city = require('../../model/Store/City')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/LocationMessage')

class CityRepository {

  async FindAll(provinceId) {
    
    try {
      return await city.findAll({ where: { provinceId: provinceId }})
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_CITY_FAILED)
    }
  }
}

module.exports = new CityRepository()