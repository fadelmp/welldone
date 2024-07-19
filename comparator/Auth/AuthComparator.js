const crypt = require('../../helper/Crypt')
const NotFound = require('../../error/NotFound')
const message = require('../../message/Auth/AuthMessage')
const InternalServer = require('../../error/InternalServer')
const repository = require('../../repository/User/UserRepository')

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

}

module.exports = new AuthComparator()