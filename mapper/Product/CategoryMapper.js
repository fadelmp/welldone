const BaseMapper = require("../BaseMapper")

class CategoryMapper extends BaseMapper {

  async ToCategory(dto) {

    return {
      id: dto.id,
      name: dto.name,
      description: dto.description
    }
  }

  async ToCategoryDtoList(categories) {

    return Promise.all(
      categories.map(
        category => this.ToCategoryDto(category)))
  }

  async ToCategoryDto(category) {

    return {
			id: category.id,
			name: category.name,
			description: category.description,
      total_product: category.products.map(product => product.toJSON()).length,
			created_at: category.createdAt,
			created_by: category.createdBy,
			updated_at: category.updatedAt,
			updated_by: category.updatedBy
    }
  }
	
}

module.exports = new CategoryMapper()