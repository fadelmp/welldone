const BaseMapper = require('../BaseMapper')

class ProductMapper extends BaseMapper {

  async ToProduct(dto) {

    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      categoryId: dto.categoryId,
      pathImage1: dto.pathImage1,
      pathImage2: dto.pathImage2,
      pathImage3: dto.pathImage3,
      unit: dto.unit,
      tags: dto.tags
    }
  }

  async ToProductDtoList(products) {

    return Promise.all(
      products.map(
        product => this.ToProductDto(product)))
  }

  async ToProductDto(product) {

    return {
			id: product.id,
      name: product.name,
      description: product.description,
      category_id: product.categoryId,
      path_image_1: product.pathImage1,
      path_image_2: product.pathImage2,
      path_image_3: product.pathImage3,
      unit: product.unit,
      tags: product.tags,
      total_variant: product.variants.map(variant => variant.toJSON()).length,
      variants: await this.toVariantDtoList(product.variants),
			created_at: product.createdAt,
			created_by: product.createdBy,
			updated_at: product.updatedAt,
			updated_by: product.updatedBy
    }
  }

  async toVariantDtoList(variants) {

    return Promise.all(
      variants.map(
        variant => this.toVariantDto(variant)))
  }

  async toVariantDto(variant) {

    return {
      id: variant.id,
      sku: variant.sku,
      size: variant.size,
      capitalPrice: variant.capitalPrice,
      unitPrice: variant.unitPrice
    }
  }
	
}

module.exports = new ProductMapper()