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

    let track = await this.countInventoryTrack(inventory.total, inventory.tracks)
    return {
      id: inventory.id,
      sku: inventory.variant.sku,
      product_name: inventory.variant.product.name,
      category_name: inventory.variant.product.category.name,
      store_name: inventory.store.name,
      beginning: track.beginning,
      entry: track.entry,
      sales: track.sales,
      transferIn: track.in,
      transferOut: track.out,
      adjustment: track.adjustment,
      ending: inventory.total,
      unit: inventory.variant.product.unit
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