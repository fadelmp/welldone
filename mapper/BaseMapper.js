const { v4: uuidv4 } = require('uuid')

class BaseMapper {

  constructor() {}

	async Create(data, username) {

    data.id = uuidv4()
    data.createdAt = new Date()
    data.createdBy = username
    data.updatedAt = new Date()
    data.updatedBy = username
	}

  async Update(data, username) {

    data.updatedAt = new Date()
    data.updatedBy = username
  }

  async Delete(data, username) {

    data.updatedAt = new Date()
    data.updatedBy = username
  }

  async ToDropdownDtoList(datas) {

    return Promise.all(
      datas.map(
        data => this.toDropdownDto(data)))
  }

  async toDropdownDto(data) {

    return {
			id: data.id,
			name: data.name
    }
  }
	
}

module.exports = BaseMapper