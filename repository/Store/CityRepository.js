const { City } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Store/LocationMessage')

class CityRepository {

  async FindAll(provinceId) {
    
    try {
      return await City.findAll({ where: { provinceId: provinceId }})
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_CITY_FAILED)
    }
  }
}

module.exports = new CityRepository()