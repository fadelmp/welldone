const repository = require('../repository/UserRepository')
const comparator = require('../comparator/UserComparator')
const mapper = require('../mapper/UserMapper')
const crypt = require('../helper/Crypt')
const baseMapper = require('../mapper/BaseMapper')

class UserService {

  async FindAll() {

    let users = await repository.FindAll()

    return mapper.ToUserDtoList(users)
  }

  async Create(userDto) {

    let key = "welldone123456789012345678901234"
    let password = await crypt.DecryptPass(userDto.password, key)

    await comparator.CheckUsername(userDto)
    await comparator.CheckFullname(userDto)

    let user = await mapper.ToUser(userDto)
    await baseMapper.Create(user, userDto)
    user.password = await crypt.HashPass(password)

    await repository.Create(user)
    return userDto
  }

  async Update(userDto) {

    await comparator.CheckId(userDto.id)
    await comparator.CheckUsername(userDto)
    await comparator.CheckFullname(userDto)

    let user = await mapper.ToUser(userDto)
    await baseMapper.Update(user, userDto)

    await repository.Update(user)
    return userDto 
  }

  async Delete(userDto) {

    let user = await comparator.CheckId(userDto.id)
    await baseMapper.Delete(user, userDto)

    await repository.Delete(user)
    return ""
  }
}

module.exports = new UserService()