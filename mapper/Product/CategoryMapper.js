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
        category => this.toCategoryDto(category)))
  }

  async toCategoryDto(category) {

    return {
			id: category.id,
			name: category.name,
			description: category.description,
      totalProduct: category.products.map(product => product.toJSON()).length,
			createdAt: category.createdAt,
			createdBy: category.createdBy,
			updatedAt: category.updatedAt,
			updatedBy: category.updatedBy
    }
  }
	
}

module.exports = new CategoryMapper()