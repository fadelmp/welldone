const repository = require('../repository/UserRepository')
const comparator = require('../comparator/UserComparator')
const mapper = require('../mapper/UserMapper')

class UserService {

  async FindAll() {

    let users = await repository.FindAll()

    return mapper.ToUserDtoList(users)
  }

  async Create(userDto) {

    await comparator.CheckUserame(userDto)
    await comparator.CheckFullname(userDto)

    let user = await mapper.ToUser(userDto)
    user.createdBy = userDto.activedUser
    user.updatedBy = userDto.activedUser

    await repository.Create(user)
    return userDto
  }

  async Update(userDto) {

    await comparator.CheckId(userDto.id)
    await comparator.CheckUsername(userDto)
    await comparator.CheckFullname(userDto)

    let user = await mapper.ToUser(userDto)
    user.updatedBy = userDto.activedUser

    await repository.Update(user)
    return userDto 
  }

  async Delete(userDto) {

    let user = await comparator.CheckId(userDto.id)
    user.updatedBy = userDto.activedUser

    await repository.Delete(user)
    return ""
  }
}

module.exports = new UserService()