const mapper = require('../mapper/InventoryMapper')
const storeRepo = require('../repository/Store/StoreRepository')
const variantRepo = require('../repository/Product/VariantRepository')
const inventoryRepo = require('../repository/Inventory/InventoryRepository')

class InventoryService {

  async CreateByStore(storeId) {

    let variants = await variantRepo.FindAll()

    variants.forEach(variant => this.create(storeId, variant.id))
  }

  async CreateByVariant(variantId) {

    let stores = await storeRepo.FindAll()

    stores.forEach(store => this.create(store.id, variantId))
  }

  async DeleteByStore(storeId) {

    inventoryRepo.DeleteByStore(storeId)
  }

  async DeleteByVariant(variantId) {

    inventoryRepo.DeleteByVariant(variantId)
  }

  async create(storeId, variantId) {

    let inventory = await mapper.CreateInventory(storeId, variantId)
    await mapper.CreateData(inventory, "SYSTEM")

    await inventoryRepo.Create(inventory)
  }
}

module.exports = new InventoryService()