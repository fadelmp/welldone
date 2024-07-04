const BaseMapper = require("./BaseMapper")

class InventoryMapper extends BaseMapper {

  async Create(storeId, variantId) {

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
      transferIn: track.transferIn,
      transferOut: track.transferOut,
      adjustment: track.adjustment,
      ending: inventory.total,
      unit: inventory.variant.product.unit
    }
    
  }

  async countInventoryTrack(total, tracks) {

    let entry = 0
    let sales = 0
    let adjustment = 0
    let transferIn = 0
    let transferOut = 0

    tracks.forEach(item => {
      entry += item.entry
      sales += item.sales
      adjustment += item.adjustment
      transferIn += item.transferIn
      transferOut += item.transferOut
    })

    return {
      beginning: total - entry + sales + adjustment - transferIn + transferOut,
      entry: entry,
      sales: sales,
      adjustment: adjustment,
      transferIn: transferIn,
      transferOut: transferOut
    }
    
  }

}

module.exports = new InventoryMapper()