const user = require('../model/User')
const QueryFailed = require('../error/QueryFailed')
const message = require('../config/UserMessage')

class UserRepository {

  async FindAll() {
    
    try {
      return await user.findAll({ where: { isDeleted: false } })
    
    } catch (error) {
      // Error Handling
      console.log(error)
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await user.findOne({ where: { id: id, isDeleted: false }})
      
    } catch (error) {
      // Error Handling
      console.log(error)
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async FindByUsername(username) {

    try {
      return await user.findOne({ where: { username: username, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async FindByFullname(fullname) {

    try {
      return await user.findOne({ where: { fullname: fullname, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await user.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await user.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await user.update(
        { isActived: false, isDeleted: true, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(message.DELETE_FAILED) 
    }
  }
}

module.exports = new UserRepository()