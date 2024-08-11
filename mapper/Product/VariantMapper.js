const BaseMapper = require("../BaseMapper")

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
        variant => this.ToVariantDto(variant)))
  }

  async ToVariantDto(variant) {

    return {
      id: variant.id,
      category_id: (variant.product) ? (variant.product.category) ? variant.product.category.id : "" : "",
      category_name: (variant.product) ? (variant.product.category) ? variant.product.category.name : "" : "",
      product_id: variant.productId,
      product_name: (variant.product) ? variant.product.name : "",
      sku: variant.sku,
      size: variant.size,
      capital_price: variant.capitalPrice,
      unit_price: variant.unitPrice,
      total_inventory: variant.inventories.map(inventory => inventory.toJSON()).length,
      created_at: variant.createdAt,
      created_by: variant.createdBy,
      updated_at: variant.updatedAt,
      updated_by: variant.updatedBy
    }
  }
	
}

module.exports = new VariantMapper()