const sizeMapper = require('./SizeMapper')

class ProductMapper {

  async ToProduct(productDto) {

    return {
      id: productDto.id,
      name: productDto.name,
      description: productDto.description,
      category_id: productDto.category_id,
      image_1: productDto.image_1,
      image_2: productDto.image_2,
      image_3: productDto.image_3,
      unit: productDto.unit,
      tags: productDto.tags
    }
  }

  async ToProductDtoList(products) {

    return Promise.all(products.map(product => this.toProductDto(product)))
  }

  async toProductDto(product) {

    return {
			id: product.id,
      name: product.name,
      description: product.description,
      category_id: produc.category_id,
      image_1: product.image_1,
      image_2: product.image_2,
      image_3: product.image_3,
      unit: productDto.unit,
      tags: productDto.tags,
      sizes: sizeMapper.ToSizeDtoList(product.sizes),
			createdAt: category.createdAt,
			createdBy: category.createdBy,
			updatedAt: category.updatedAt,
			updatedBy: category.updatedBy
    }
  }
	
}

module.exports = new ProductMapper()