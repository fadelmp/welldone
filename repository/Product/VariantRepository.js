const { Category, Product, Variant, Inventory } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/VariantMessage')

class VariantRepository {

  async FindAll() {
    
    try {
      return await Variant.findAll({ 
        where: { isDeleted: false },
        include: [
          { model: Product, as: 'product', include: [{ model: Category, as: 'category' }]},
          { model: Inventory, as: 'inventories' }]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByProductId(productId) {

    try {
      return await Variant.findAll({ where: { productId: productId, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindById(id) {
    
    try {
      return await Variant.findOne({ 
        where: { id: id, isDeleted: false },
        include: { model: Inventory, as: 'inventories' }
      })

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindBySku(sku) {

    try {
      return await Variant.findOne({ where: { sku: sku, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await Variant.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await Variant.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await Variant.update(
        { isActived: false, isDeleted: true, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED) 
    }
  }
}

module.exports = new VariantRepository()