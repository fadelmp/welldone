const BaseRepository = require('../BaseRepository')
const message = require('../../message/Inventory/PurchaseMessage')
const { Purchase, PurchaseVariant, Store } = require('../../model')

class PurchaseRepository extends BaseRepository {

  async FindAll(storeId) {

    let error = message.GET_FAILED
    let where = { ...(await this._False()), ...(storeId && { storeId })}
    let include = [{ model: Store, as: 'store' }, { model: PurchaseVariant, as: 'variants' }] 
    
    return await this._FindAll(Purchase, where, include, error)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(Purchase, data, error)
  }
}

module.exports = new PurchaseRepository()