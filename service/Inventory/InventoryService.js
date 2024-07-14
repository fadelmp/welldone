const trackService = require('./InventoryTrackService')
const mapper = require('../../mapper/Inventory/InventoryMapper')
const storeRepo = require('../../repository/Store/StoreRepository')
const variantRepo = require('../../repository/Product/VariantRepository')
const repository = require('../../repository/Inventory/InventoryRepository')
const comparator = require('../../comparator/Inventory/InventoryComparator')

class InventoryService {

  async FindAll() {

    let inventories = await repository.FindAll()

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

    let inventory = await this.update(dto, stock, action)
    
    await trackService.Entry(inventory, dto, stock.total)
  }

  async create(storeId, variantId) {

    let inventory = await mapper.ToInventory(storeId, variantId)
    await mapper.Create(inventory, "SYSTEM")

    await repository.Create(inventory)
  }

  async update(dto, stock, action) {

    let inventory = await comparator.CheckStoreVariant(dto.storeId, stock.variant_id)
    await mapper.Update(inventory, "SYSTEM")
    inventory.total += (action === "ADD") ? stock.total : -stock.total

    await repository.Update(inventory)
    return inventory
  }
}

module.exports = new InventoryService()