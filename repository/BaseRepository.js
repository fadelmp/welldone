const QueryFailed = require('../error/QueryFailed')

class BaseRepository {

  constructor() {}
  
  async _False() {

    return { isDeleted: false }
  }

  async _FindAllAvailable(model, include, message) {

    let where = await this._False()

    return await this._FindAll(model, where, include, message)
  }

  async _FindById(model, id, include, message) {

    let where = await this.#id(id)

    return await this._FindOne(model, where, include, message)
  }

  async _FindByName(model, name, include, message) {

    let where = await this.#name(name)

    return await this._FindOne(model, where, include, message)
  }

  async _FindAll(model, where, include, message) {

    let query = model.findAll({ where: where, include: include })

    return await this.#exec(async() => query, message)
  }

  async _FindOne(model, where, include, message) {

    let query = model.findOne({ where: where, include: include })

    return await this.#exec(async() => query, message)
  }

  async _Create(model, data, message) {

    let query = model.create(data)

    return await this.#exec(async() => query, message)
  }

  async _Update(model, data, message) {

    let where = await this.#id(data.id)
    let query = model.update(data, { where: where })

    return await this.#exec(async() => query, message)
  }

  async _SpecificUpdate(model, id, condition, message) {

    let where = await this.#id(id)
    let query = model.update(condition, { where: where })

    return await this.#exec(async() => query, message)
  }

  async _Delete(model, data, message) {

    let where = await this.#id(data.id)
    let condition = { isActived: false, isDeleted: true, updatedBy: data.updatedBy }
    let query = model.update(condition, { where: where })

    return await this.#exec(async() => query, message)
  }

  async _Destroy(model, where, message) {

    let query = model.destroy({ where: where })

    return await this.#exec(async() => query, message)
  }

  async #id(id) {

    return { id: id, isDeleted: false }
  }

  async #name(name) {

    return { name: name, isDeleted: false }
  }

  async #exec(operation, message) {

    try {
      return await operation()

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message)
    }
  }
}

module.exports = BaseRepository