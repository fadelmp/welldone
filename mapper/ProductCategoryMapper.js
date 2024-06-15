class ProductCategoryMapper {

	async ToCategory(category_dto) {

		return {
			id: category_dto.id,
			name: category_dto.name,
			description: category_dto.description
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
			is_actived: category.is_actived,
			created_at: category.created_at,
			created_by: category.created_by,
			updated_at: category.updated_at,
			updated_by: category.updated_by
		}
	}
}

module.exports = ProductCategoryMapper