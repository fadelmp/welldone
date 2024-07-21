const BaseRepository = require('../BaseRepository')
const { Inventory, InventoryTrack } = require('../../model')
const message = require('../../message/Inventory/InventoryMessage')

class InventoryTrackRepository extends BaseRepository {

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(InventoryTrack, data, error)
  }

  async DeleteByStore(storeId) {

    let where = { storeId }
    let error = message.DELETE_FAILED
    let include = [{ model: Inventory, where: where }]

    return await this._Destroy(InventoryTrack, where, include, error)
  }

  async DeleteByVariant(variantId) {


    let where = { variantId }
    let error = message.DELETE_FAILED
    let include = [{ model: Inventory, where: where }]

    return await this._Destroy(InventoryTrack, where, include, error)
  }
}

module.exports = new InventoryTrackRepository()