const repository = require('../repository/User/UserRepository')
const message = require('../message/User/UserMessage')
const DataExists = require('../error/DataExists')
const NotFound = require('../error/NotFound')

class UserComparator {

  async CheckId(id) {

    let user = await repository.FindById(id)

    if (!user)
      throw new NotFound(message.NOT_FOUND)

    return user
  }

  async CheckUsername(data) {

    let user = await repository.FindByUsername(data.username)

    if (user)
      if (user.username == data.username && user.id != data.id)
        throw new DataExists(message.USERNAME_EXISTS)
  }

  async CheckFullname(data) {

    let user = await repository.FindByFullname(data.fullname)

    if (user)
      if (user.fullname == data.fullname && user.id != data.id)
        throw new DataExists(message.FULLNAME_EXISTS)
  }
}

module.exports = new UserComparator()