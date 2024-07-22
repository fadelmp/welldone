const Token = require('../../helper/Token')
const mapper = require('../../mapper/User/PrivilegeMapper')
const repository = require('../../repository/User/UserRepository')
const comparator = require('../../comparator/Auth/AuthComparator')

class AuthService {

  async Login(dto) {

    let user = await repository.FindByUsername(dto.username)

    await comparator.CheckUsername(user)
    await comparator.CheckBlock(user)
    await comparator.CheckPassword(user, dto.password)

    user.tryAttempt = 3
    user.isBlocked = false
    
    await repository.ChangeAttempt(user)

    let token = await Token.Generate(user.id, user.username, user.roleId, user.store.id, user.store.name)
    let privileges = await mapper.ToPrivilegeDtoList(user.role.privileges)
    
    return { token, privileges }
  }

  
}

module.exports = new AuthService()