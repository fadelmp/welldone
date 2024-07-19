const { Op } = require('sequelize')
const { User, Role, Store, Privilege } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/User/UserMessage')
const authMess = require('../../message/Auth/AuthMessage')

class UserRepository {

  async FindAll(roleId) {
    
    try {
      return await User.findAll({ 
        where: { isDeleted: false, roleId: { [Op.gt]: roleId }},
        include: [{ model: Role, as: 'role' }, { model: Store, as: 'store' }]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await User.findOne({ where: { id: id, isDeleted: false }})
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByUsername(username) {

    try {
      return await User.findOne({ 
        where: { username: username, isDeleted: false },
        include: [
          { model: Store, as: 'store' },
          { model: Role, as: 'role', include: [{ model: Privilege, as: 'privileges' }]}
        ]
      })

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async FindByFullname(fullname) {

    try {
      return await User.findOne({ where: { fullname: fullname, isDeleted: false }})

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await User.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }

  async Update(data) {

    try {
      return await User.update(data, { where: { id: data.id, isDeleted: false }})
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.UPDATE_FAILED) 
    }
  }

  async Delete(data) {
    
    try {
      return await User.update(
        { isActived: false, isDeleted: true, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.DELETE_FAILED) 
    }
  }

  async ChangeAttempt(data) {

    try {
      return await User.update(
        { tryAttempt: data.tryAttempt, isBlocked: data.isBlocked, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, authMess.LOGIN_FAILED) 
    }
  }

  async ChangePassword(data) {

    try {
      return await User.update(
        { password: data.password, isBlocked: false, tryAttempt: 3, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )
      
    } catch(error) {
      // Error Handling
      throw new QueryFailed(error, message.UPDATE_FAILED) 
    }
  }
}

module.exports = new UserRepository()