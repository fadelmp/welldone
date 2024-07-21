const BaseRepository = require('../BaseRepository')
const message = require('../../message/Product/VariantMessage')
const { Category, Product, Variant, Inventory } = require('../../model')

const getFailed = message.GET_FAILED
const include = [
  { model: Product, as: 'product', include: [{ model: Category, as: 'category' }]},
  { model: Inventory, as: 'inventories' }
]

class VariantRepository extends BaseRepository {

  async FindAll() {
    
    return await this._FindAllAvailable(Variant, include, getFailed)
  }

  async FindById(id) {
    
    return await this._FindById(Variant, id, include, getFailed)
  }

  async FindByProductId(productId) {

    let where = { ...(await this._False()), productId }

    return await this._FindAll(Variant, where, include, getFailed)
  }

  async FindBySku(sku) {

    let where = { ...(await this._False()), sku }

    return await this._FindOne(Variant, where, include, getFailed)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(Variant, data, error)
  }

  async Update(data) {

    let error = message.UPDATE_FAILED
    
    return await this._Update(Variant, data, error)
  }

  async Delete(data) {
    
    let error = message.DELETE_FAILED

    return await this._Delete(Variant, data, error)
  }
}

module.exports = new VariantRepository()