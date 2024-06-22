const dropdownMapper = require('../mapper/DropdownMapper')
const repository = require('../repository/StoreRepository')
const comparator = require('../comparator/StoreComparator')
const mapper = require('../mapper/StoreMapper')
const baseMapper = require('../mapper/BaseMapper')

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
    await baseMapper.Create(store, storeDto)

    await repository.Create(store)
    return storeDto
  }

  async Update(storeDto) {

    await comparator.CheckId(storeDto.id)
    await comparator.CheckName(storeDto)

    let store = await mapper.ToStore(storeDto)
    await baseMapper.Update(store, storeDto)

    await repository.Update(store)
    return storeDto 
  }

  async Delete(storeDto) {

    let store = await comparator.CheckId(storeDto.id)
    await baseMapper.Delete(store, storeDto)

    await repository.Delete(store)
    return ""
  }
}

module.exports = new StoreService()