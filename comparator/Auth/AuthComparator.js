const crypt = require('../../helper/Crypt')
const message = require('../../message/Auth/AuthMessage')
const roleRepo = require('../../repository/User/RoleRepository')
const repository = require('../../repository/User/UserRepository')

const NotFound = require('../../error/NotFound')
const Forbidden = require('../../error/Forbidden')
const InternalServer = require('../../error/InternalServer')

class AuthComparator {

  async CheckUsername(user) {

    if (!user)
      throw new NotFound(message.USER_NOT_FOUND)
  }

  async CheckPassword(user, password) {

    let hashPass = await crypt.HashPass(password)

    if (user.password === hashPass)
      return

    user.tryAttempt -= 1

    if (user.tryAttempt === 0)
      user.isBlocked = true

    await repository.ChangeAttempt(user)

    throw new InternalServer(message.WRONG_PASSWORD)
  }

  async CheckBlock(user) {

    if (user.isBlocked)
      throw new InternalServer(message.USER_BLOCKED)
  }

  async CheckAccess(roleId, uri) {

    let role = await roleRepo.FindById(roleId)
    let privileges = role.privileges

    return privileges.some(privilege => uri.includes(privilege.url))
  }

}

module.exports = new AuthComparator()