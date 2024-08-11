const BaseMapper = require("../BaseMapper")

class PurchaseMapper extends BaseMapper {

  async ToPurchase(dto) {

    return {
      deliveryNote: dto.deliveryNote,
      supplier: dto.supplier,
      storeId: dto.storeId,
      createdAt: dto.date
    }
  }

  async ToPurchaseVariant(purchase, stock) {

    return {
      purchaseId: purchase.id,
      variantId: stock.variant_id,
      stock: stock.total
    }
  }

  async ToPurchaseDtoList(purchases) {

    return Promise.all(
      purchases.map(
        purchase => this.toPurchaseDto(purchase)))
  }

  async ToPurchaseVariantDtoList(variants) {

    return Promise.all(
      variants.map(
        variant => this.toPurchaseVariantDto(variant)
      )
    )
  }

  async toPurchaseDto(purchase) {

    return {
      id: purchase.id,
      deliveryNote: purchase.deliveryNote,
      supplier: purchase.supplier,
      store_id: purchase.storeId,
      total_variant: purchase.variants.map(variant => variant.toJSON()).length,
      total_stock: await this.totalStock(purchase.variants),
      created_at: purchase.createdAt,
			created_by: purchase.createdBy,
			updated_at: purchase.updatedAt,
			updated_by: purchase.updatedBy
    }
  }

  async toPurchaseVariantDto(purchaseVariant) {

    return {
      id: purchaseVariant.id,
      date: purchaseVariant.purchase.createdAt,
      sku: purchaseVariant.variant.sku,
      store_name: purchaseVariant.purchase.store.name,
      product_name: purchaseVariant.variant.product.name,
      category_name: purchaseVariant.variant.product.category.name,
      delivery_note: purchaseVariant.purchase.deliveryNote,
      total_stock: purchaseVariant.stock,
      unit: purchaseVariant.variant.product.unit
    }
  }

  async totalStock(variants) {

    let total = 0

    variants.forEach(variant => total += variant.stock)

    return total
  }
	
}

module.exports = new PurchaseMapper()