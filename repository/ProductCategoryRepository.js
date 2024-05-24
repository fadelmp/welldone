const Category = require('../model/ProductCategory');
const QueryFailed = require('../error/QueryFailed');
const config = require('../config/ProductCategoryMessage')

class ProductCategoryRepository {

  async FindAll() {
    
    try {
      return await Category.findAll({ where: { isDeleted: false }})
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(config.messages.GET_FAILED)
    }
  }

  async FindActived() {

    try {
      return await Category.findAll({ where: { isActived: true, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(config.messages.DROPDOWN_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await ProductCategory.findOne({ where: { id: id, isDeleted: false }})
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(config.messages.GET_FAILED)
    }
  }

  async FindByName(name) {

    try {
      return await ProductCategory.findOne({ where: { name: name, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(config.messages.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await Category.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(config.messages.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await ProductCategory.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(config.messages.UPDATE_FAILED) 
    }
  }

  async Delete(data) {

    try {
      return await Category.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(config.messages.DELETE_FAILED) 
    }
  }
}

module.exports = ProductCategoryRepository