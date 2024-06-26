const mapper = require('../mapper/CategoryMapper')
const comparator = require('../comparator/CategoryComparator')
const repository = require('../repository/Product/CategoryRepository')

class CategoryService {

  async FindAll() {

    let categories = await repository.FindAll()

    return mapper.ToCategoryDtoList(categories)
  }

  async FindDropdown() {

    let categories = await repository.FindAll()

    return mapper.ToDropdownDtoList(categories)
  }

  async Create(categoryDto) {

    await comparator.CheckName(categoryDto)

    let category = await mapper.ToCategory(categoryDto)
    await mapper.CreateData(category, categoryDto.activedUser)

    await repository.Create(category)
    return categoryDto
  }

  async Update(categoryDto) {

    await comparator.CheckId(categoryDto.id)
    await comparator.CheckName(categoryDto)

    let category = await mapper.ToCategory(categoryDto)
    await mapper.UpdateData(category, categoryDto.activedUser)

    await repository.Update(category)
    return categoryDto 
  }

  async Delete(categoryDto) {

    await comparator.CheckProduct(categoryDto)

    let category = await comparator.CheckId(categoryDto.id)
    await mapper.DeleteData(category, categoryDto.activedUser)

    await repository.Delete(category)
    return ""
  }
}

module.exports = new CategoryService()