const BaseRepository = require('../BaseRepository')
const message = require('../../message/Inventory/AdjustmentMessage')
const { Adjustment, AdjustmentVariant, Store, Variant, Product, Category } = require('../../model')

class AdjustmentVariantRepository extends BaseRepository {

  async FindAll(storeId) {

    let error = message.GET_FAILED
    let where = await this._False()
    let include = [
      { model: Adjustment, as: 'adjustment', where: storeId ? { storeId } : {}, include: [{
        model: Store, as: 'store'}]},
      { model: Variant, as: 'variant', include: [
        { model: Product, as: 'product', include: [
          { model: Category, as: 'category'}
        ]}
      ]}
    ]

    return await this._FindAll(AdjustmentVariant, where, include, error)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(AdjustmentVariant, data, error)
  }
}

module.exports = new AdjustmentVariantRepository()