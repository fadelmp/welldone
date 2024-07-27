const trackService = require('./InventoryTrackService')
const mapper = require('../../mapper/Inventory/InventoryMapper')
const storeRepo = require('../../repository/Store/StoreRepository')
const variantRepo = require('../../repository/Product/VariantRepository')
const repository = require('../../repository/Inventory/InventoryRepository')
const comparator = require('../../comparator/Inventory/InventoryComparator')

class InventoryService {

  async FindAll(dto) {

    let inventories = await repository.FindAll(dto.store)

    return mapper.ToInventoryDtoList(inventories)
  }

  async CreateByStore(storeId) {

    let variants = await variantRepo.FindAll()

    variants.forEach(variant => this.create(storeId, variant.id))
  }

  async CreateByVariant(variantId) {

    let stores = await storeRepo.FindAll()

    stores.forEach(store => this.create(store.id, variantId))
  }

  async DeleteByStore(storeId) {

    repository.DeleteByStore(storeId)
  }

  async DeleteByVariant(variantId) {

    repository.DeleteByVariant(variantId)
  }

  async Purchase(dto, stock) {

    let action = "ADD"

    let inventory = await this.update(dto.storeId, stock.variant_id, stock.total, action)
    
    await trackService.Entry(inventory, dto, stock.total)
  }

  async Adjustment(dto, stock) {

    let action = "SUBSTRACT"

    let inventory = await this.update(dto.storeId, stock.variant_id, stock.total, action)

    await trackService.Adjustment(inventory, dto, stock.total)
  }

  async TransferOut(dto, stock) {

    let action = "SUBSTRACT"

    let inventory = await this.update(dto.storeId, stock.variant_id, stock.total, action)

    await trackService.TransferOut(inventory, dto, stock.total)
  }

  async TransferIn(dto, stock) {

    let action = "ADD"

    let inventory = await this.update(dto.storeId, stock.variant_id, stock.total, action)

    await trackService.TransferIn(inventory, dto, stock.total)
  }

  async Sales(storeId, variantId, total, date) {

    let action = "SUBSTRACT"

    let inventory = await this.update(storeId, variantId, total, action)

    await trackService.Sales(inventory, date, total)
  }

  async create(storeId, variantId) {

    let inventory = await mapper.ToInventory(storeId, variantId)
    await mapper.Create(inventory, "SYSTEM")

    await repository.Create(inventory)
  }

  async update(storeId, variantId, total, action) {

    let inventory = await comparator.CheckStoreVariant(storeId, variantId)
    await mapper.Update(inventory, "SYSTEM")

    inventory.total += (action === "ADD") ? total : -total
    await repository.Update(inventory)

    return inventory
  }
}

module.exports = new InventoryService()