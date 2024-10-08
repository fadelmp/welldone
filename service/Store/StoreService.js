const mapper = require('../../mapper/Store/StoreMapper')
const inventoryService = require('../Inventory/InventoryService')
const comparator = require('../../comparator/Store/StoreComparator')
const repository = require('../../repository/Store/StoreRepository')

class StoreService {

  async FindAll() {

    let stores = await repository.FindAll()

    return mapper.ToStoreDtoList(stores)
  }

  async FindById(dto) {

    let store = await comparator.CheckId(dto.id)
    
    return mapper.ToStoreDto(store)
  }

  async FindDropdown() {

    let stores = await repository.FindAll()

    return mapper.ToDropdownDtoList(stores)
  }

  async Create(dto) {

    await comparator.CheckData(dto)

    let store = await mapper.ToStore(dto)
    await mapper.Create(store, dto.activedUser)

    await repository.Create(store)
    await inventoryService.CreateByStore(store.id)

    return dto
  }

  async Update(dto) {

    await comparator.CheckId(dto.id)
    await comparator.CheckData(dto)

    let store = await mapper.ToStore(dto)
    await mapper.Update(store, dto.activedUser)

    await repository.Update(store)
    return dto 
  }

  async Delete(dto) {

    await comparator.CheckInventory(dto.id)

    let store = await comparator.CheckId(dto.id)
    await mapper.Delete(store, dto.activedUser)

    await repository.Delete(store)
    await inventoryService.DeleteByStore(dto.id)

    return ""
  }
}

module.exports = new StoreService()