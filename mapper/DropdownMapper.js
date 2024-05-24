class ProductCategoryMapper {

  async ToDropdownDtoList(arrays) {
	
		return Promise.all(arrays.map(toDropdown));
	}

	async toDropdown(data) {

		return {
			id: data.id,
			name: data.name
		}
	}
}

module.exports = ProductCategoryMapper