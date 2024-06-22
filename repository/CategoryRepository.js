const category = require('../model/Product/Category')
const product = require('../model/Product/Product')
const QueryFailed = require('../error/QueryFailed')
const message = require('../message/CategoryMessage')

class CategoryRepository {

  async FindAll() {
    
    try {
      return await category.findAll({ 
        where: { isDeleted: false }, 
        include: { model: product, as: 'products' }
      })
    
    } catch (error) {
      // Error Handling
      console.log(error)
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await category.findOne({ where: { id: id, isDeleted: false }})
      
    } catch (error) {
      // Error Handling
      console.log(error)
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByName(name) {

    try {
      return await category.findOne({ where: { name: name, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await category.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await category.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await category.update(
        { isActived: false, isDeleted: true, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED) 
    }
  }
}

module.exports = new CategoryRepository()