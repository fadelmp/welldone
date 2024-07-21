const { City } = require('../../model')
const BaseRepository = require('../BaseRepository')
const message = require('../../message/Store/LocationMessage')

class CityRepository extends BaseRepository {

  async FindAll(provinceId) {
    
    let error = message.GET_CITY_FAILED
    let where = { provinceId }

    return await this._FindAll(City, where, {}, error)
  }
}

module.exports = new CityRepository()