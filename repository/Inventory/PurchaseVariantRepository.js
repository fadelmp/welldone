const BaseRepository = require('../BaseRepository')
const message = require('../../message/Inventory/PurchaseMessage')
const { Purchase, PurchaseVariant, Store, Variant, Product, Category } = require('../../model')

class PurchaseVariantRepository extends BaseRepository {

  async FindAll() {

    let error = message.GET_FAILED
    let where = await this._False()
    let include = [
      { model: Purchase, as: 'purchase', include: [{model: Store, as: 'store'}]},
      { model: Variant, as: 'variant', include: [
        { model: Product, as: 'product', include: [
          { model: Category, as: 'category'}
        ]}
      ]}
    ] 
    
    return await this._FindAll(PurchaseVariant, where, include, error)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(PurchaseVariant, data, error)
  }
}

module.exports = new PurchaseVariantRepository()