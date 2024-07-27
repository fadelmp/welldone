const { Op } = require('sequelize');
const BaseRepository = require('../BaseRepository');
const { Discount, Product, Store, DiscountProduct } = require('../../model')
const message = require('../../message/Discount/DiscountMessage');

const getFailed = message.GET_FAILED
const include = [{ model: Store, as: 'stores' }, { model: Product, as: 'products' }]

class DiscountRepository extends BaseRepository {

  async FindAllVoucher() {

    let where = { ...(await this._False()), isVoucher: true }

    return await this._FindAll(Discount, where, voucherInclude, getFailed)
  }

  async FindAllDiscount() {
    
    let where = { ...(await this._False()), isVoucher: false }

    return await this._FindAll(Discount, where, include, getFailed)
  }

  async FindById(id) {

    return await this._FindById(Discount, id, [], getFailed)
  }

  async FindByVoucherName(name) {

    let where = { ...(await this._False()), name, isVoucher: true }

    return await this._FindAll(Discount, where, [], getFailed)
  }

  async FindByVoucherCode(code) {

    let where = { ...(await this._False()), code, isVoucher: true }

    return await this._FindAll(Discount, where, [], getFailed)
  }

  async FindByDiscountName(name) {

    let where = { ...(await this._False()), name, isVoucher: false }

    return await this._FindAll(Discount, where, [], getFailed)
  }

  async FindActivedVoucher() {
    
    let where = this._False()
    where.isVoucher = true
    where.startDate = { [Op.lte]: new Date() }
    where.endDate = { [Op.lte]: new Date() }

    return await this._FindAll(Discount, where, [], getFailed)
  }

  async FindActivedDiscount(productId) {
    
    let where = this._False()
    where.isVoucher = false
    where.startDate = { [Op.lte]: new Date() }
    where.endDate = { [Op.lte]: new Date() }

    let include = [{ model: DiscountProduct, as: 'discount_products', where: { productId: productId } }]

    return await this._FindAll(Discount, where, include, getFailed)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(Discount, data, error)
  }

  async Update(data) {

    let error = message.UPDATE_FAILED

    return await this._Update(Discount, data, error)
  }

  async Delete(data) {
    
    let error = message.DELETE_FAILED
    
    return await this._Delete(Discount, data, error)
  }
}

module.exports = new DiscountRepository()