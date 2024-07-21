const BaseRepository = require('../BaseRepository')
const { Category, Product } = require('../../model')
const message = require('../../message/Product/CategoryMessage')

const getFailed = message.GET_FAILED 
const include = { model: Product, as: 'products' }

class CategoryRepository extends BaseRepository {

  async FindAll() {

    return this._FindAllAvailable(Category, include, getFailed)
  }

  async FindById(id) {

    return this._FindById(Category, id, include, getFailed)
  }

  async FindByName(name) {

    return this._FindByName(Category, name, include, getFailed)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(Category, data, error)
  }

  async Update(data) {

    let error = message.UPDATE_FAILED

    return await this._Update(Category, data, error)
  }

  async Delete(data) {
    
    let error = message.DELETE_FAILED

    return await this._Delete(Category, data, error)
  }
}

module.exports = new CategoryRepository()