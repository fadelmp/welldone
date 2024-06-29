const { Discount, Product, Store } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/DiscountMessage')

class DiscountRepository {

  async FindAllVoucher() {
    
    try {
      return await Discount.findAll({ 
        where: { isVoucher: true, isDeleted: false }, 
        include: [{ model: Store, as: 'stores' }, { model: Product, as: 'products' }]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindAllDiscount() {
    
    try {
      return await Discount.findAll({ 
        where: { isVoucher: false, isDeleted: false }, 
        include: [{ model: Store, as: 'stores' }, { model: Product, as: 'products' }]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await Discount.findOne({ where: { id: id, isDeleted: false } })
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByVoucherName(name) {

    try {
      return await Discount.findOne({ where: { name: name, isVoucher: true, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByVoucherCode(code) {

    try {
      return await Discount.findOne({ where: { code: code, isVoucher: true, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByDiscountName(name) {

    try {
      return await Discount.findOne({ where: { name: name, isVoucher: false, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await Discount.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await Discount.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await Discount.update(
        { isActived: false, isDeleted: true, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED) 
    }
  }
}

module.exports = new DiscountRepository()