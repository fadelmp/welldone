const product = require('../model/Product')
const QueryFailed = require('../error/QueryFailed')
const message = require('../config/ProductMessage')

class ProductRepository {

  async FindById(id) {

    try {
      return await product.findOne({ where: { id: id, isDeleted: false }})
      
    } catch (error) {
      // Error Handling
      console.log(error)
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async FindByName(name) {

    try {
      return await product.findOne({ where: { name: name, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await product.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await product.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await product.update(
        { isActived: false, isDeleted: true, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(message.DELETE_FAILED) 
    }
  }
}

module.exports = new ProductRepository()