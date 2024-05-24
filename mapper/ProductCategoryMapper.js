class ProductCategoryMapper {

	async ToCategory(categoryDto) {

		return {
			id: categoryDto.id,
			name: categoryDto.name,
			description: categoryDto.description,
			updatedBy: categoryDto.updatedBy
		}
	}
	
	async ToCategoryDtoList(categories) {
	
		return Promise.all(categories.map(toCategoryDto));
	}
	
	async toCategoryDto(category) {
	
		return {
			id: category.id,
			name: category.name,
			description: category.description,
			isActived: category.isActived,
			createdAt: category.createdAt,
			createdBy: category.createdBy,
			updatedAt: category.updatedAt,
			updatedBy: category.updatedBy
		}
	}
}

module.exports = ProductCategoryMapper