const BaseRepository = require('../BaseRepository')
const message = require('../../message/Inventory/InventoryMessage')
const { Inventory, InventoryTrack, Store, Variant, Product, Category } = require('../../model')

const getFailed = message.GET_FAILED

class InventoryRepository extends BaseRepository {

  async FindAll(storeId) {

    let where = { ...(await this._False()), ...(storeId && { storeId })}
    let include = [
      { model: InventoryTrack, as: 'tracks' },
      { model: Store, as: 'store' }, 
      { model: Variant, as: 'variant', include: [
        { model: Product, as: 'product', include: [{ model: Category, as: 'category'}]}
      ]}
    ]
    
    return await this._FindAll(Inventory, where, include, getFailed)
  }

  async FindByStoreAndVariant(storeId, variantId) {

    let where = { ...(await this._False()), storeId, variantId }

    return await this._FindOne(Inventory, where, [], getFailed)
  }

  async Create(data) {

    let error = message.CREATE_FAILED
    
    return await this._Create(Inventory, data, error)
  }

  async Update(data) {

    let error = message.UPDATE_FAILED
    let condition = { total: data.total, updatedBy: data.updatedBy }

    return await this._SpecificUpdate(Inventory, data.id, condition, error)
  }

  async DeleteByStore(storeId) {

    let error = message.DELETE_FAILED
    let where = { storeId }

    return await this._Destroy(Inventory, where, error)
  }

  async DeleteByVariant(variantId) {

    let error = message.DELETE_FAILED
    let where = { variantId }

    return await this._Destroy(Inventory, where, error)
  }
}

module.exports = new InventoryRepository()