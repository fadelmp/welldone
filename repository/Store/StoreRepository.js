const { Op } = require('sequelize')
const { Store, City, Province, Inventory } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/StoreMessage')


class StoreRepository {

  async FindAll() {
    
    try {
      return await Store.findAll({ 
        where: { isDeleted: false },
        include: [{ model: City, as: 'city', include: [{ model: Province, as: 'province' }]}]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await Store.findOne({ 
        where: { id: id, isDeleted: false },
        include: { model: Inventory, as: 'inventories' }
      })
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByNameOrCode(data) {

    try {
      return await Store.findAll({
        where: { [Op.and]: [
          { [Op.or]: [{ name: data.name }, { code: data.code }] },
          { isDeleted: false }
        ]}
      })

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await Store.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await Store.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await Store.update(
        { isActived: false, isDeleted: true, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED) 
    }
  }
}

module.exports = new StoreRepository()