const repository = require('../repository/Store/StoreRepository')
const message = require('../message/StoreMessage')
const DataExists = require('../error/DataExists')
const NotFound = require('../error/NotFound')

class StoreComparator {

  async CheckId(id) {

    let store = await repository.FindById(id)

    if (!store)
      throw new NotFound(message.NOT_FOUND)

    return store
  }

  async CheckName(data) {

    let store = await repository.FindByName(data.name)

    if (store)
      if (store.name == data.name && store.id != data.id)
        throw new DataExists(message.NAME_EXISTS)
  }
}

module.exports = new StoreComparator()