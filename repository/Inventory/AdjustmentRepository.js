const BaseRepository = require('../BaseRepository')
const message = require('../../message/Inventory/AdjustmentMessage')
const { Adjustment, AdjustmentVariant, Store } = require('../../model')

class AdjustmentRepository extends BaseRepository {

  async FindAll(storeId) {

    let error = message.GET_FAILED
    let where = { ...(await this._False()), ...(storeId && { storeId })}
    let include = [{ model: Store, as: 'store' }, { model: AdjustmentVariant, as: 'variants' }]
    
    return await this._FindAll(Adjustment, where, include, error)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(Adjustment, data, error)
  }
}

module.exports = new AdjustmentRepository()