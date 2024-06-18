class DropdownMapper {

  async ToDropdownDtoList(arrays) {
	
		return Promise.all(arrays.map(data => this.toDropdownDto(data)))
	}

	async toDropdownDto(data) {

		return {
			id: data.id,
			name: data.name
		}
	}
}

module.exports = new DropdownMapper()