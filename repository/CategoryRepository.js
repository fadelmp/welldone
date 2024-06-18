const category = require('../model/Category')
const product = require('../model/Product')
const QueryFailed = require('../error/QueryFailed')
const message = require('../config/CategoryMessage')

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
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await category.findOne({ where: { id: id, isDeleted: false }})
      
    } catch (error) {
      // Error Handling
      console.log(error)
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async FindByName(name) {

    try {
      return await category.findOne({ where: { name: name, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await category.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await category.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await category.update({ 
        isActived: false, isDeleted: true, updatedBy: data.updatedBy
      }, { 
        where: { id: data.id, isDeleted: false }
      })
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(message.DELETE_FAILED) 
    }
  }
}

module.exports = new CategoryRepository()