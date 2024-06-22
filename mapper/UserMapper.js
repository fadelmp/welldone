const BaseMapper = require("./BaseMapper")

class UserMapper extends BaseMapper {

  async ToUser(userDto) {

    return {
      id: userDto.id,
      username: userDto.username,
      fullname: userDto.fullname,
      password: userDto.password,
      roleId: userDto.roleId,
      storeId: userDto.storeId
    }
  }

  async ToUserDtoList(users) {

    return Promise.all(users.map(user => this.toUserDto(user)))
  }

  async toUserDto(user) {

    return {
			id: user.id,
			username: user.username,
			fullname: user.fullname,
      password: user.password,
      roleId: user.role.id,
      roleName: user.role.name,
      storeId: user.store.id,
      storeName: user.store.name,
			createdAt: user.createdAt,
			createdBy: user.createdBy,
			updatedAt: user.updatedAt,
			updatedBy: user.updatedBy
    }
  }
	
}

module.exports = new UserMapper()