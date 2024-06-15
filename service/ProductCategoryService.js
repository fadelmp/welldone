const dropdown_mapper = require('../mapper/DropdownMapper');
const repository = require('../repository/ProductCategoryRepository');
const comparator = require('../comparator/ProductCategoryComparator');
const mapper = require('../mapper/ProductCategoryMapper');
const base_mapper = require('../mapper/BaseMapper');

class ProductCategoryService {

  async FindAll() {

    categories = repository.FindAll()

    return categoryMapper.ToProductCategoryDtoList(categories)
  }

  async FindDropdown() {

    categories = repository.FindActived()

    return dropdown_mapper.ToDropdownDtoList(categories)
  }

  async Create(category_dto) {

    comparator.CheckName(category_dto)

    category = mapper.ToProductCategory(category_dto)
    category = base_mapper.Create(category, category_dto)

    category_row = repository.Create(category)
    return category_row
  }

  async Update(category_dto) {

    comparator.CheckId(category_dto.id)
    comparator.CheckName(category_dto)

    category = mapper.ToProductCategory(category_dto)
    category = base_mapper.Update(category, category_dto)

    category_row = repository.Update(category)
    return category_row
  }

  async Delete(category_dto) {

    category = comparator.CheckId(category_dto.id)
    category = base_mapper.Delete(category, category_dto)

    category_row = repository.Delete(category)
    return category_row
  }

  async Status(category_dto) {

    category = comparator.CheckId(category_dto.id)
    category = base_mapper.Update(category, category_dto)

    category_row = repository.Status(category)
    return category_row
  }
}

module.exports = ProductCategoryService