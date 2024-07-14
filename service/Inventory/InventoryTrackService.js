const mapper = require('../../mapper/Inventory/InventoryTrackMapper')
const repository = require('../../repository/Inventory/InventoryTrackRepository')

class InventoryTrackService {

  async Entry(inventory, dto, total) {

    let type = "entry"
    let supplier = dto.supplier
    let notes = "Purchase Stock From " + supplier

    await this.create(inventory, total, type, notes)
  }

  async create(inventory, total, type, notes) {

    let track = await mapper.ToInventoryTrack(inventory, type, total, notes)
    await mapper.Create(track, "SYSTEM")

    await repository.Create(track)
  }
}

module.exports = new InventoryTrackService()