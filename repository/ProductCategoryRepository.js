const category = require('../model/category');
const query_failed = require('../error/query_failed');
const config = require('../config/categoryMessage')

class CategoryRepository {

  async FindAll() {
    
    try {
      return await category.findAll({ where: { is_deleted: false }})
    
    } catch (error) {
      // Error Handling
      throw new query_failed(config.messages.GET_FAILED)
    }
  }

  async FindActived() {

    try {
      return await category.findAll({ where: { is_actived: true, is_deleted: false }})

    } catch (error) {
      // Error Handling
      throw new query_failed(config.messages.DROPDOWN_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await category.findOne({ where: { id: id, is_deleted: false }})
      
    } catch (error) {
      // Error Handling
      throw new query_failed(config.messages.GET_FAILED)
    }
  }

  async FindByName(name) {

    try {
      return await category.findOne({ where: { name: name, is_deleted: false }})

    } catch (error) {
      // Error Handling
      throw new query_failed(config.messages.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await category.create(data)
      
    } catch (error) {
      // Error Handling
      throw new query_failed(config.messages.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await category.update(data, { where: { id: data.id, is_deleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new query_failed(config.messages.UPDATE_FAILED) 
    }
  }

  async Delete(data) {

    try {
      return await category.update(data, { where: { id: data.id, is_deleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new query_failed(config.messages.DELETE_FAILED) 
    }
  }

  async Status(data) {

    try {
      return await Category.update(data, { where: {id: data.id, is_deleted: false }})

    } catch (error) {
      // Error Handling
      throw new query_failed(config.messages.STATUS_FAILED)
    }
  }
}

module.exports = CategoryRepository