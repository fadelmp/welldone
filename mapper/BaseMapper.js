const { v4: uuidv4 } = require('uuid')

class BaseMapper {

	async Create(data, dto) {

    data.id = uuidv4()
    data.createdAt = new Date()
    data.createdBy = dto.activedUser
    data.updatedAt = new Date()
    data.updatedBy = dto.activedUser
	}

  async Update(data, dto) {

    data.updatedAt = new Date()
    data.updatedBy = dto.activedUser
  }

  async Delete(data, dto) {

    data.updatedAt = new Date()
    data.updatedBy = dto.activedUser
  }

  async ToDropdownDtoList(datas) {

    return Promise.all(datas.map(data => this.toDropdownDto(data)))
  }

  async toDropdownDto(data) {

    return {
			id: data.id,
			name: data.name
    }
  }
	
}

module.exports = BaseMapper