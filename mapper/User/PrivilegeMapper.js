const BaseMapper = require("../BaseMapper")

class PrivilegeMapper extends BaseMapper {

  async ToPrivilegeDtoList(privileges) {

    return Promise.all(
      privileges.map(
        privilege => this.toPrivilegeDto(privilege)))
  }

  async toPrivilegeDto(privilege) {

    return {
			id: privilege.id,
			name: privilege.name,
			url: privilege.url
    }
  }
	
}

module.exports = new PrivilegeMapper()