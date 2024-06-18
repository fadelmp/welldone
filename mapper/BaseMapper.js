const { v4: uuidv4 } = require('uuid')

class BaseMapper {

	async Create(data, dto) {

    data.id = uuidv4()

		data.is_actived = true
    data.is_deleted = false
    data.created_at = new Date()
    data.created_by = dto.username
    data.updated_at = new Date()
    data.updated_by = dto.username
	}

  async Update(data, dto) {

    data.is_actived = true
    data.is_deleted = false
    data.updated_at = new Date()
    data.updated_by = dto.username
  }

  async Delete(data, dto) {

    data.is_actived = false
    data.is_deleted = true
    data.updated_at = new Date()
    data.updated_by = dto.username
  }
	
}

module.exports = new BaseMapper()