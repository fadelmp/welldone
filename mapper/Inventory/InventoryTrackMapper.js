const BaseMapper = require("../BaseMapper")

class InventoryTrackMapper extends BaseMapper {

  async ToInventoryTrack(inventory, type, total, notes) {

    return {
      inventoryId: inventory.id,
      type: type,
      total: total,
      notes: notes
    }
  }

}

module.exports = new InventoryTrackMapper()