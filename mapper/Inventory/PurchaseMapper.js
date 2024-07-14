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
      storeId: purchase.storeId,
      totalVariant: purchase.variants.map(variant => variant.toJSON()).length,
      totalStock: await this.totalStock(purchase.variants),
      createdAt: purchase.createdAt,
			createdBy: purchase.createdBy,
			updatedAt: purchase.updatedAt,
			updatedBy: purchase.updatedBy
    }
  }

  async toPurchaseVariantDto(purchaseVariant) {

    return {
      id: purchaseVariant.id,
      date: purchaseVariant.purchase.createdAt,
      sku: purchaseVariant.variant.sku,
      storeName: purchaseVariant.purchase.store.name,
      productName: purchaseVariant.variant.product.name,
      categoryName: purchaseVariant.variant.product.category.name,
      deliveryNote: purchaseVariant.purchase.deliveryNote,
      totalStock: purchaseVariant.stock,
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