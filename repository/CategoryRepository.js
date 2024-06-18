const category = require('../model/Category')
const QueryFailed = require('../error/QueryFailed')
const message = require('../config/CategoryMessage')

class CategoryRepository {

  async FindAll() {
    
    try {
      return await category.findAll({ where: { is_deleted: false }})
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async FindActived() {

    try {
      return await category.findAll({ where: { is_actived: true, is_deleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.DROPDOWN_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await category.findOne({ where: { id: id, is_deleted: false }})
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async FindByName(name) {

    try {
      return await category.findOne({ where: { name: name, is_deleted: false }})

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
      return await category.update(data, { where: { id: data.id, is_deleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {

    console.log("data")
    console.log(data)

    try {
      return await category.update(data, { where: { id: data.id, is_deleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(message.DELETE_FAILED) 
    }
  }
}

module.exports = new CategoryRepository()