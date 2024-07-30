const BaseRepository = require('../BaseRepository')
const message = require('../../message/Inventory/MutationMessage')
const { Mutation, MutationVariant, Store } = require('../../model')

const getFailed = message.GET_FAILED
const include = [
  { model: Store, as: 'fromStore' },
  { model: Store, as: 'toStore' },
  { model: MutationVariant, as: 'variants' }]

class MutationRepository extends BaseRepository {

  async FindAll(storeId) {
    
    let where = { ...(await this._False()), ...(storeId && { storeId })}

    return await this._FindAll(Mutation, where, include, getFailed)
  }

  async FindAllFromStore(storeId) {

    let where = await this._False()
    where.fromStoreId = storeId

    return await this._FindAll(Mutation, where, include, getFailed)
  }

  async FindAllToStore(storeId) {

    let where = await this._False()
    where.toStoreId = storeId

    return await this._FindAll(Mutation, where, include, getFailed)
  }

  async FindById(id) {

    return await this._FindById(Mutation, id, [], getFailed)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(Mutation, data, error)
  }

  async Update(data) {

    let error = message.APPROVE_FAILED
    let condition = { total: data.total, updatedBy: data.updatedBy }

    return await this._SpecificUpdate(MutationRepository, data.id, condition, error)
  }
}

module.exports = new MutationRepository()