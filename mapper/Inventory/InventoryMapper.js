const BaseMapper = require("../BaseMapper")

class InventoryMapper extends BaseMapper {

  async ToInventory(storeId, variantId) {

    return {
      storeId: storeId,
      variantId: variantId,
      total: 0
    }
  }

  async ToInventoryDtoList(inventories) {
    
    return Promise.all(
      inventories.map(
        inventory => this.toInventoryDto(inventory)))
  }

  async toInventoryDto(inventory) {

    let productName = (inventory.variant)
        ? (inventory.variant.product)
            ? inventory.variant.product.name : ""
        : ""

    let productUnit = (inventory.variant)
        ? (inventory.variant.product)
            ? inventory.variant.product.unit : ""
        : ""

    let categoryName = (inventory.variant) 
        ? (inventory.variant.product)
            ? (inventory.variant.category)
                ? inventory.variant.product.category.name : ""
            : ""
        : ""

    let track = await this.countInventoryTrack(inventory.total, inventory.tracks)

    return {
      id: inventory.id,
      sku: (inventory.variant) ? inventory.variant.sku : "",
      product_name: productName,
      category_name: categoryName,
      store_name: (inventory.store) ? inventory.store.name : "",
      beginning: track.beginning,
      entry: track.entry,
      sales: track.sales,
      transferIn: track.in,
      transferOut: track.out,
      adjustment: track.adjustment,
      ending: inventory.total,
      unit: product.unit
    }
    
  }

  async countInventoryTrack(total, tracks) {

    const totals = {
      in: 0,
      out: 0,
      sales: 0,
      entry: 0,
      adjustment: 0
    }

    for (const { type, total: itemTotal } of tracks)
      if (totals.hasOwnProperty(type))
        totals[type] += itemTotal

    return {
      beginning: total - totals.entry + totals.sales + totals.adjustment - totals.in + totals.out,
      ...totals
    }
  }

}

module.exports = new InventoryMapper()