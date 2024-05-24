const dropdownMapper = require('../mapper/DropdownMapper');
const repository = require('../repository/ProductCategoryRepository');
const comparator = require('../comparator/ProductCategoryComparator');
const categoryMapper = require('../mapper/ProductCategoryMapper');

class ProductCategoryService {

  async FindAll() {

    categories = repository.FindAll()

    return categoryMapper.ToProductCategoryDtoList(categories)
  }

  async FindDropdown() {

    categories = repository.FindActived()

    return dropdownMapper.ToDropdownDtoList(categories)
  }

  async Create(categoryDto) {

    comparator.CheckName(categoryDto)

    category = mapper.ToProductCategory(categoryDto)
    category.createdBy = categoryDto.createdBy

    categoryRow = repository.Create(category)
    return categoryrow
  }

  async Update(categoryDto) {

    comparator.CheckId(categoryDto.id)
    comparator.CheckName(categoryDto)

    category = mapper.ToProductCategory(categoryDto)

    categoryRow = repository.Update(category)
    return categoryRow
  }

  async Delete(categoryDto) {

    category = comparator.CheckId(categoryDto.id)
    category.isActived = false
    category.isDeleted = true
    category.updatedBy = categoryDto.deletedBy

    categoryRow = repository.Delete(category)
    return categoryRow
  }
}

module.exports = ProductCategoryService