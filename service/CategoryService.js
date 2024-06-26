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

  async Create(dto) {

    await comparator.CheckName(dto)

    let category = await mapper.ToCategory(dto)
    await mapper.CreateData(category, dto.activedUser)

    await repository.Create(category)
    return dto
  }

  async Update(dto) {

    await comparator.CheckId(dto.id)
    await comparator.CheckName(dto)

    let category = await mapper.ToCategory(dto)
    await mapper.UpdateData(category, dto.activedUser)

    await repository.Update(category)
    return dto 
  }

  async Delete(dto) {

    await comparator.CheckProduct(dto)

    let category = await comparator.CheckId(dto.id)
    await mapper.DeleteData(category, dto.activedUser)

    await repository.Delete(category)
    return ""
  }
}

module.exports = new CategoryService()