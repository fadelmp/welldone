const { Province } = require('../../model')
const BaseRepository = require('../BaseRepository')
const message = require('../../message/Store/LocationMessage')

class ProvinceRepository extends BaseRepository {

  async FindAll() {
    
    let error = message.GET_PROVINCE_FAILED

    return await this._FindAll(Province, {}, {}, error)
  }
}

module.exports = new ProvinceRepository()