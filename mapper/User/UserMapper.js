const BaseMapper = require("../BaseMapper")

class UserMapper extends BaseMapper {

  async ToUser(dto) {

    return {
      id: dto.id,
      username: dto.username,
      fullname: dto.fullname,
      roleId: dto.roleId,
      storeId: dto.storeId
    }
  }

  async ToUserDtoList(users) {

    return Promise.all(
      users.map(
        user => this.toUserDto(user)))
  }

  async toUserDto(user) {

    return {
			id: user.id,
			username: user.username,
			fullname: user.fullname,
      roleId: (user.role) ? user.role.id : "",
      roleName: (user.role) ? user.role.name : "",
      storeId: (user.store) ? user.store.id : "",
      storeName: (user.store) ? user.store.name : "",
			createdAt: user.createdAt,
			createdBy: user.createdBy,
			updatedAt: user.updatedAt,
			updatedBy: user.updatedBy
    }
  }
	
}

module.exports = new UserMapper()