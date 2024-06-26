const { Category, Product, Variant } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/ProductMessage')

class ProductRepository {

  async FindAll() {
    
    try {
      return await Product.findAll({ 
        where: { isDeleted: false },
        include: [
          { model: Category, as: 'category'},
          { model: Variant, as: 'variants' }]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await Product.findOne({ where: { id: id, isDeleted: false }})
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async FindByName(name) {

    try {
      return await Product.findOne({ where: { name: name, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await Product.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await Product.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await Product.update(
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