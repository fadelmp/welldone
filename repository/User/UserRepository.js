const { Op } = require('sequelize')
const BaseRepository = require('../BaseRepository')
const message = require('../../message/User/UserMessage')
const authMess = require('../../message/Auth/AuthMessage')
const { User, Role, Store, Privilege } = require('../../model')

const getFailed = message.GET_FAILED
const include = [
  { model: Store, as: 'store' },
  { model: Role, as: 'role', include: [
    { model: Privilege, as: 'privileges' }
  ]}
]
class UserRepository extends BaseRepository {

  async FindAll(roleId, storeId) {

    let where = { ...(await this._False()), roleId: { [Op.gt]: roleId }, ...(storeId && { storeId }) }

    return await this._FindAll(User, where, include, getFailed)
  }

  async FindById(id) {

    return await this._FindById(User, id, {}, getFailed)
  }

  async FindByUsername(username) {

    let where = { ...(await this._False()), username }

    return await this._FindOne(User, where, include, getFailed)
  }

  async FindByFullname(fullname) {

    let where = { ...(await this._False()), fullname }

    return await this._FindAll(User, where, {}, getFailed)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(User, data, error)
  }

  async Update(data) {

    let error = message.UPDATE_FAILED

    return await this._Update(User, data, error)
  }

  async Delete(data) {
    
    let error = message.DELETE_FAILED

    return await this._Delete(User, data, error)
  }

  async ChangeAttempt(data) {

    let error = authMess.LOGIN_FAILED
    let condition = { tryAttempt: data.tryAttempt, isBlocked: data.isBlocked, updatedBy: data.updatedBy }

    return await this._SpecificUpdate(User, data.id, condition, error)
  }

  async ChangePassword(data) {

    let error = message.CHANGE_PASSWORD_FAILED
    let condition = { password: data.password, isBlocked: false, tryAttempt: 3, updatedBy: data.updatedBy }

    return await this._SpecificUpdate(User, data.id, condition, error)
  }
}

module.exports = new UserRepository()