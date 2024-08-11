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
        user => this.ToUserDto(user)))
  }

  async ToUserDto(user) {

    return {
			id: user.id,
			username: user.username,
			fullname: user.fullname,
      role_id: (user.role) ? user.role.id : "",
      role_name: (user.role) ? user.role.name : "",
      store_id: (user.store) ? user.store.id : "",
      store_name: (user.store) ? user.store.name : "",
			created_at: user.createdAt,
			created_by: user.createdBy,
			updated_at: user.updatedAt,
			updated_by: user.updatedBy
    }
  }
	
}

module.exports = new UserMapper()