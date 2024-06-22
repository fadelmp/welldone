const store = require('../../model/Store/Store')
const city = require('../../model/Store/City')
const province = require('../../model/Store/Province')
const QueryFailed = require('../error/QueryFailed')
const message = require('../message/StoreMessage')

class StoreRepository {

  async FindAll() {
    
    try {
      return await store.findAll({ 
        where: { isDeleted: false },
        include: [{ model: city, as: 'city', include: [{ model: province, as: 'province' }]}]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await store.findOne({ where: { id: id, isDeleted: false }})
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByName(name) {

    try {
      return await store.findOne({ where: { name: name, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await store.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await store.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await store.update(
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