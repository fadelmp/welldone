const { v4: uuidv4 } = require('uuid')

class BaseMapper {

  constructor() {}

	async CreateData(data, username) {

    data.id = uuidv4()
    data.createdAt = new Date()
    data.createdBy = username
    data.updatedAt = new Date()
    data.updatedBy = username
	}

  async UpdateData(data, username) {

    data.updatedAt = new Date()
    data.updatedBy = username
  }

  async DeleteData(data, username) {

    data.updatedAt = new Date()
    data.updatedBy = username
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