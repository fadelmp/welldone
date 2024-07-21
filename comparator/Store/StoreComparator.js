const repository = require('../../repository/Store/StoreRepository')
const message = require('../../message/Store/StoreMessage')
const DataExists = require('../../error/DataExists')
const InternalServer = require('../../error/InternalServer')
const NotFound = require('../../error/NotFound')

class StoreComparator {

  async CheckId(id) {

    let store = await repository.FindById(id)

    if (!store) throw new NotFound(message.NOT_FOUND)

    return store
  }

  async CheckData(storeDto) {

    await this.checkName(storeDto)
    await this.checkCode(storeDto)
  }

  async CheckInventory(id) {

    let store = await repository.FindById(id)
    let inventories = store.inventories

    for (let inventory of inventories)
      if (inventory.total > 0)
        throw new InternalServer(message.INVENTORY_EXISTS)
  }

  async checkName(storeDto) {

    let store = await repository.FindByName(storeDto.name)

    if (store && store.name == storeDto.name && store.id != storeDto.id)
      throw new DataExists(message.NAME_EXISTS)
  }

  async checkCode(storeDto) {

    let store = await repository.FindByCode(storeDto.code)
    
    if (store && store.code == storeDto.code && storeDto.id != store.id)
      throw new DataExists(message.CODE_EXISTS)
  }
}

module.exports = new StoreComparator()