const BaseMapper = require('./BaseMapper')
//const sizeMapper = require('./SizeMapper')

class ProductMapper extends BaseMapper {

  async ToProduct(dto) {

    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      category_id: dto.categoryId,
      image_1: dto.image_1,
      image_2: dto.image_2,
      image_3: dto.image_3,
      unit: dto.unit,
      tags: dto.tags
    }
  }

  async ToProductDtoList(products) {

    return Promise.all(
      products.map(
        product => this.toProductDto(product)))
  }

  async toProductDto(product) {

    return {
			id: product.id,
      name: product.name,
      description: product.description,
      category_id: product.category_id,
      image_1: product.image_1,
      image_2: product.image_2,
      image_3: product.image_3,
      unit: productDto.unit,
      tags: productDto.tags,
      //sizes: sizeMapper.ToSizeDtoList(product.sizes),
			createdAt: category.createdAt,
			createdBy: category.createdBy,
			updatedAt: category.updatedAt,
			updatedBy: category.updatedBy
    }
  }
	
}

module.exports = new ProductMapper()