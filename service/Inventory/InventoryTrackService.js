const mapper = require('../../mapper/Inventory/InventoryTrackMapper')
const repository = require('../../repository/Inventory/InventoryTrackRepository')

class InventoryTrackService {

  async Entry(inventory, dto, total) {

    let type = "entry"
    let notes = "Purchase Stock From " + dto.supplier

    await this.create(inventory, total, type, notes)
  }

  async Adjustment(inventory, total) {

    let type = "adjustment"
    let notes = "Adjustment Stock"

    await this.create(inventory, total, type, notes)
  }

  async TransferOut(inventory, dto, total) {

    let type = "transfer_out"
    let notes = "Mutation From Store " + dto.fromStoreName + " To Store " + dto.toStoreName

    await this.create(inventory, total, type, notes)
  }

  async TransferIn(inventory, dto, total) {

    let type = "transfer_in"
    let notes = "Mutation From Store " + dto.fromStoreName + " To Store " + dto.toStoreName

    await this.create(inventory, total, type, notes)
  }

  async Sales(inventory, date, total) {

    let type = "sales"
    let notes = "Sold at " + date

    await this.create(inventory, total, type, notes)
  }

  async create(inventory, total, type, notes) {

    let track = await mapper.ToInventoryTrack(inventory, type, total, notes)
    await mapper.Create(track, "SYSTEM")

    await repository.Create(track)
  }
}

module.exports = new InventoryTrackService()