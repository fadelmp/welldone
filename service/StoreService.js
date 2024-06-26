const mapper = require('../mapper/StoreMapper')
const inventoryService = require('./InventoryService')
const comparator = require('../comparator/StoreComparator')
const repository = require('../repository/Store/StoreRepository')

class StoreService {

  async FindAll() {

    let stores = await repository.FindAll()

    return mapper.ToStoreDtoList(stores)
  }

  async FindDropdown() {

    let stores = await repository.FindAll()

    return mapper.ToDropdownDtoList(stores)
  }

  async Create(dto) {

    await comparator.CheckData(dto)

    let store = await mapper.ToStore(dto)
    await mapper.CreateData(store, dto.activedUser)

    await repository.Create(store)
    await inventoryService.CreateByStore(store.id)

    return dto
  }

  async Update(dto) {

    await comparator.CheckId(dto.id)
    await comparator.CheckData(dto)

    let store = await mapper.ToStore(dto)
    await mapper.UpdateData(store, dto.activedUser)

    await repository.Update(store)
    return dto 
  }

  async Delete(dto) {

    await comparator.CheckInventory(dto.id)

    let store = await comparator.CheckId(dto.id)
    await mapper.DeleteData(store, dto.activedUser)

    await repository.Delete(store)
    await inventoryService.DeleteByStore(dto.id)

    return ""
  }
}

module.exports = new StoreService()