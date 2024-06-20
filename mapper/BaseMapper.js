const { v4: uuidv4 } = require('uuid')

class BaseMapper {

	async Create(data, dto) {

    data.id = uuidv4()
    data.createdBy = dto.activedUser
    data.updatedBy = dto.activedUser
	}

  async Update(data, dto) {

    data.updatedBy = dto.activedUser
  }

  async Delete(data, dto) {

    data.updatedBy = dto.activedUser
  }
	
}

module.exports = new BaseMapper()