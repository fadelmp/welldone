const BaseMapper = require("./BaseMapper")

class CategoryMapper extends BaseMapper {

  async ToCategory(categoryDto) {

    return {
      id: categoryDto.id,
      name: categoryDto.name,
      description: categoryDto.description
    }
  }

  async ToCategoryDtoList(categories) {

    return Promise.all(categories.map(category => this.toCategoryDto(category)))
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