const BaseMapper = require("../BaseMapper")

class AdjustmentMapper extends BaseMapper {

  async ToAdjustment(dto) {

    return {
      note: dto.note,
      storeId: dto.storeId,
      createdAt: dto.date
    }
  }

  async ToAdjustmentVariant(adjustment, stock) {

    return {
      adjustmentId: adjustment.id,
      variantId: stock.variant_id,
      stock: stock.total,
      note: stock.note
    }
  }

  async ToAdjustmentDtoList(adjustments) {

    return Promise.all(
      adjustments.map(
        adjustment => this.toAdjustmentDto(adjustment)))
  }

  async ToAdjustmentVariantDtoList(variants) {

    return Promise.all(
      variants.map(
        variant => this.toAdjustmentVariantDto(variant)
      )
    )
  }

  async toAdjustmentDto(adjustment) {

    return {
      id: adjustment.id,
      note: adjustment.note,
      storeId: adjustment.storeId,
      totalVariant: adjustment.variants.map(variant => variant.toJSON()).length,
      totalStock: await this.totalStock(adjustment.variants),
      createdAt: adjustment.createdAt,
			createdBy: adjustment.createdBy,
			updatedAt: adjustment.updatedAt,
			updatedBy: adjustment.updatedBy
    }
  }

  async toAdjustmentVariantDto(adjustmentVariant) {

    return {
      id: adjustmentVariant.id,
      date: adjustmentVariant.adjustment.createdAt,
      sku: adjustmentVariant.variant.sku,
      storeName: adjustmentVariant.adjustment.store.name,
      productName: adjustmentVariant.variant.product.name,
      categoryName: adjustmentVariant.variant.product.category.name,
      note: adjustmentVariant.adjustment.note,
      totalStock: adjustmentVariant.stock,
      unit: adjustmentVariant.variant.product.unit
    }
  }

  async totalStock(variants) {

    let total = 0

    variants.forEach(variant => total += variant.stock)

    return total
  }
	
}

module.exports = new AdjustmentMapper()