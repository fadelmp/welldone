const dropdownMapper = require('../mapper/DropdownMapper')
const repository = require('../repository/CategoryRepository')
const comparator = require('../comparator/CategoryComparator')
const mapper = require('../mapper/CategoryMapper')
const baseMapper = require('../mapper/BaseMapper')

class CategoryService {

  async FindAll() {

    let categories = await repository.FindAll()

    return mapper.ToCategoryDtoList(categories)
  }

  async FindDropdown() {

    let categories = await repository.FindAll()

    return dropdownMapper.ToDropdownDtoList(categories)
  }

  async Create(categoryDto) {

    await comparator.CheckName(categoryDto)

    let category = await mapper.ToCategory(categoryDto)
    category.updatedBy = categoryDto.username
    category.updatedBy = categoryDto.username

    await repository.Create(category)
    return categoryDto
  }

  async Update(categoryDto) {

    await comparator.CheckId(categoryDto.id)
    await comparator.CheckName(categoryDto)

    let category = await mapper.ToCategory(categoryDto)
    category.updatedBy = categoryDto.username

    await repository.Update(category)
    return categoryDto 
  }

  async Delete(categoryDto) {

    let category = await comparator.CheckId(categoryDto.id)
    category.updatedBy = categoryDto.username

    await repository.Delete(category)
    return ""
  }
}

module.exports = new CategoryService()