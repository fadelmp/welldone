const { Category, Product } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/CategoryMessage')

class CategoryRepository {

  async FindAll() {
    
    try {
      return await Category.findAll({ 
        where: { isDeleted: false }, 
        include: { model: Product, as: 'products' }
      })
    
    } catch (error) {
      // Error Handling
      console.log(error)
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await Category.findOne({ 
        where: { id: id, isDeleted: false },
        include: { model: Product, as: 'products' }
      })
      
    } catch (error) {
      // Error Handling
      console.log(error)
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByName(name) {

    try {
      return await Category.findOne({ where: { name: name, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await Category.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await Category.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await Category.update(
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