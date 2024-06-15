class BaseMapper {

	async Create(data, dto) {

		data.is_actived = true
    data.is_deleted = false
    data.created_at = new Date()
    data.created_by = dto.created_by
    data.updated_at = new Date()
    data.updated_by = dto.updated_by

    return data
	}

  async Update(data, dto) {

    data.is_deleted = false
    data.updated_at = new Date()
    data.updated_by = dto.updated_by

    return data
  }

  async Delete(data, dto) {

    data.is_actived = false
    data.is_deleted = true
    data.updated_at = new Date()
    data.updated_by = dto.updated_by

    return data
  }
	
}

module.exports = BaseMapper