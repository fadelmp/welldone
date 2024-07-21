const { Role, Privilege } = require('../../model')
const BaseRepository = require('../BaseRepository')
const message = require('../../message/Auth/AuthMessage')

class RoleRepository extends BaseRepository {

  async FindById(id) {

    let where = { id }
    let error = message.CHECK_FAILED
    let include = { model: Privilege, as: 'privileges' }

    return await this._FindOne(Role, where, include, error)
  }
}

module.exports = new RoleRepository()