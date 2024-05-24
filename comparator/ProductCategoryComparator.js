const repository = require('../repository/ProductCategoryRepository');
const config = require('../config/ProductCategoryMessage')
const DataExists = require('../error/DataExists')
const NotFound = require('../error/NotFound')

class ProductCategoryComparator {

  async CheckId(id) {

    category = repository.FindById(id);

    if (category == null)
      throw new NotFound(config.messages.NOT_FOUND)

    return category;
  }

  async CheckName(data) {

    category = repository.FindByName(data.name);

    if (category.name == data.name && category.id != data.id)
      throw new DataExists(config.messages.NAME_EXISTS)
  }
}

module.exports = ProductCategoryComparator;