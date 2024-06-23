const repository = require('../repository/Product/CategoryRepository')
const message = require('../message/CategoryMessage')
const DataExists = require('../error/DataExists')
const NotFound = require('../error/NotFound')

class CategoryComparator {

  async CheckId(id) {

    let category = await repository.FindById(id)

    if (!category)
      throw new NotFound(message.NOT_FOUND)

    return category
  }

  async CheckName(data) {

    let category = await repository.FindByName(data.name)

    if (category)
      if (category.name == data.name && category.id != data.id)
        throw new DataExists(message.NAME_EXISTS)
  }
}

module.exports = new CategoryComparator()