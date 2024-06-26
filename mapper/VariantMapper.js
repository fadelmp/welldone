const BaseMapper = require("./BaseMapper")

class VariantMapper extends BaseMapper {

  async ToVariant(dto) {

    return {
      id: dto.id,
      sku: dto.sku,
      size: dto.size,
      productId: dto.productId,
      capitalPrice: dto.capitalPrice,
      unitPrice: dto.unitPrice,
    }
  }

  async ToVariantDtoList(variants) {

    return Promise.all(
      variants.map(
        variant => this.toVariantDto(variant)))
  }

  async toVariantDto(variant) {

    return {
      id: variant.id,
      categoryId: variant.product.category.id,
      categoryName: variant.product.category.name,
      productId: variant.productId,
      productName: variant.product.name,
      sku: variant.sku,
      size: variant.size,
      capitalPrice: variant.capitalPrice,
      unitPrice: variant.unitPrice,
      totalInventory: variant.inventories.map(inventory => inventory.toJSON()).length,
      createdAt: variant.createdAt,
      createdBy: variant.createdBy,
      updatedAt: variant.updatedAt,
      updatedBy: variant.updatedBy
    }
  }
	
}

module.exports = new VariantMapper()