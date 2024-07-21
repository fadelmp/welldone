const BaseRepository = require('../BaseRepository')
const { Category, Product, Variant } = require('../../model')
const message = require('../../message/Product/ProductMessage')

const getFailed = message.GET_FAILED
const include = [{ model: Category, as: 'category'}, { model: Variant, as: 'variants' }]

class ProductRepository extends BaseRepository {

  async FindAll() {

    return await this._FindAllAvailable(Product, include, getFailed)
  }

  async FindById(id) {

    return await this._FindById(Product, id, include, getFailed)
  }

  async FindByName(name) {

    return await this._FindByName(Product, name, include, getFailed)
  }

  async FindByCategoryId(categoryId) {

    let where = { ...(await this._False()), categoryId }

    return await this._FindAll(Product, where, include, getFailed)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(Product, data, error)
  }

  async Update(data) {

    let error = message.UPDATE_FAILED
    
    return await this._Update(Product, data, error)
  }

  async Delete(data) {
    
    let error = message.DELETE_FAILED
    
    return await this._Delete(Product, data, error)
  }
}

module.exports = new ProductRepository()