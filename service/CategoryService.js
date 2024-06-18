const dropdown_mapper = require('../mapper/DropdownMapper')
const repository = require('../repository/CategoryRepository')
const comparator = require('../comparator/CategoryComparator')
const mapper = require('../mapper/CategoryMapper')
const base_mapper = require('../mapper/BaseMapper')

class CategoryService {

  async FindAll() {

    let categories = await repository.FindAll()

    return mapper.ToCategoryDtoList(categories)
  }

  async FindDropdown() {

    let categories = await repository.FindActived()

    return dropdown_mapper.ToDropdownDtoList(categories)
  }

  async Create(category_dto) {

    await comparator.CheckName(category_dto)

    let category = await mapper.ToCategory(category_dto)
    await base_mapper.Create(category, category_dto)

    await repository.Create(category)
    return mapper.toCategoryDto(category)
  }

  async Update(category_dto) {

    await comparator.CheckId(category_dto.id)
    await comparator.CheckName(category_dto)

    let category = await mapper.ToCategory(category_dto)
    await base_mapper.Update(category, category_dto)

    await repository.Update(category)
    return mapper.toCategoryDto(category) 
  }

  async Delete(category_dto) {

    let category = await comparator.CheckId(category_dto.id)
    await base_mapper.Delete(category, category_dto)

    await repository.Delete(category)
    return ""
  }
}

module.exports = new CategoryService()