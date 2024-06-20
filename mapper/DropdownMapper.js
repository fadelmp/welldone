class DropdownMapper {

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

module.exports = new DropdownMapper()