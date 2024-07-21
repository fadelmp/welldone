const crypt = require('../../helper/Crypt')
const mapper = require('../../mapper/User/UserMapper')
const repository = require('../../repository/User/UserRepository')
const comparator = require('../../comparator/User/UserComparator')

const password = "Welldone_12345"

class UserService {

  async FindAll(dto) {

    let users = await repository.FindAll(dto.role, dto.store) 

    return mapper.ToUserDtoList(users)
  }

  async Create(dto) {

    await comparator.CheckUsername(dto)
    await comparator.CheckFullname(dto)

    let user = await mapper.ToUser(dto)
    await mapper.Create(user, dto.activedUser)
    user.password = await crypt.HashPass(password)

    await repository.Create(user)
    return dto
  }

  async Update(dto) {

    let existingUser = await comparator.CheckId(dto.id)
    await comparator.CheckUsername(dto)
    await comparator.CheckFullname(dto)

    let user = await mapper.ToUser(dto)
    user.password = existingUser.password

    await mapper.Update(user, dto.activedUser)
    await repository.Update(user)
    
    return dto 
  }

  async Delete(dto) {

    let user = await comparator.CheckId(dto.id)
    await mapper.Delete(user, dto.activedUser)

    await repository.Delete(user)
    return ""
  }

  async ChangePassword(dto) {

    let user = await comparator.CheckId(dto.id)
    user.password = await crypt.HashPass(dto.password)
    await mapper.Update(user, dto.activedUser)

    await repository.ChangePassword(user)
    return ""
  }

  async ResetPassword(dto) {

    let user = await comparator.CheckId(dto.id)
    user.password = await crypt.HashPass(password)
    await mapper.Update(user, dto.activedUser)

    await repository.ChangePassword(user)
    return ""
  }

  async Unblock(dto) {

    let user = await comparator.CheckId(dto.id)
    await mapper.Update(user, dto.activedUser)

    await repository.ChangePassword(user)
    return ""
  }
}

module.exports = new UserService()