const { Op } = require('sequelize')
const BaseRepository = require('../BaseRepository')
const message = require('../../message/Store/StoreMessage')
const { Store, City, Province, Inventory } = require('../../model')

const getFailed = message.GET_FAILED

class StoreRepository extends BaseRepository {

  async FindAll() {
    
    let where = await this._False()
    let include = [{ model: City, as: 'city', include: [{ model: Province, as: 'province' }]}] 
    
    return await this._FindAll(Store, where, include, getFailed)
  }

  async FindById(id) {

    let where = await this._False()
    where.id = id
    let include = { model: Inventory, as: 'inventories' } 

    return await this._FindOne(Store, where, include, getFailed)
  }

  async FindByName(name) {

    let where = { ...(await this._False()), name }

    return await this._FindOne(Store, where, {}, getFailed)
  }

  async FindByCode(code) {

    let where = { ...(await this._False()), code }

    return await this._FindOne(Store, where, {}, getFailed)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(Store, data, error)
  }

  async Update(data) {

    let error = message.UPDATE_FAILED

    return await this._Update(Store, data, error)
  }

  async Delete(data) {

    let error = message.DELETE_FAILED

    return await this._Delete(Store, data, error)
  }
}

module.exports = new StoreRepository()