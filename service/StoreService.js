const dropdownMapper = require('../mapper/DropdownMapper')
const repository = require('../repository/Store/StoreRepository')
const comparator = require('../comparator/StoreComparator')
const mapper = require('../mapper/StoreMapper')

class StoreService {

  async FindAll() {

    let stores = await repository.FindAll()

    return mapper.ToStoreDtoList(stores)
  }

  async FindDropdown() {

    let stores = await repository.FindAll()

    return dropdownMapper.ToDropdownDtoList(stores)
  }

  async Create(storeDto) {

    await comparator.CheckName(storeDto)

    let store = await mapper.ToStore(storeDto)
    await mapper.Create(store, storeDto)

    await repository.Create(store)
    return storeDto
  }

  async Update(storeDto) {

    await comparator.CheckId(storeDto.id)
    await comparator.CheckName(storeDto)

    let store = await mapper.ToStore(storeDto)
    await mapper.Update(store, storeDto)

    await repository.Update(store)
    return storeDto 
  }

  async Delete(storeDto) {

    let store = await comparator.CheckId(storeDto.id)
    await mapper.Delete(store, storeDto)

    await repository.Delete(store)
    return ""
  }
}

module.exports = new StoreService()