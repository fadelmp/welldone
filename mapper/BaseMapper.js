const { v4: uuidv4 } = require('uuid')

class BaseMapper {

	async Create(data, dto) {

    data.id = uuidv4()
    data.createdBy = dto.username
    data.updatedBy = dto.username
	}

  async Update(data, dto) {

    data.updatedBy = dto.username
  }

  async Delete(data, dto) {

    data.updatedBy = dto.username
  }
	
}

module.exports = new BaseMapper()