const mapper = require('../mapper/StoreMapper')
const repository = require('../repository/Store/StoreRepository')
const comparator = require('../comparator/StoreComparator')
const inventoryService = require('./InventoryService')

class StoreService {

  async FindAll() {

    let stores = await repository.FindAll()

    return mapper.ToStoreDtoList(stores)
  }

  async FindDropdown() {

    let stores = await repository.FindAll()

    return mapper.ToDropdownDtoList(stores)
  }

  async Create(storeDto) {

    await comparator.CheckData(storeDto)

    let store = await mapper.ToStore(storeDto)
    await mapper.CreateData(store, storeDto.activedUser)

    await repository.Create(store)
    inventoryService.CreateByStore(store.id)

    return storeDto
  }

  async Update(storeDto) {

    await comparator.CheckId(storeDto.id)
    await comparator.CheckData(storeDto)

    let store = await mapper.ToStore(storeDto)
    await mapper.UpdateData(store, storeDto.activedUser)

    await repository.Update(store)
    return storeDto 
  }

  async Delete(storeDto) {

    await comparator.CheckInventory(storeDto.id)

    let store = await comparator.CheckId(storeDto.id)
    await mapper.DeleteData(store, storeDto.activedUser)

    await repository.Delete(store)
    inventoryService.DeleteByStore(storeDto.id)

    return ""
  }
}

module.exports = new StoreService()