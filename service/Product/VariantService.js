const mapper = require('../../mapper/VariantMapper')
const inventoryService = require('../Inventory/InventoryService')
const comparator = require('../../comparator/VariantComparator')
const repository = require('../../repository/Product/VariantRepository')

class VariantService {

  async FindAll() {

    let variants = await repository.FindAll()

    return mapper.ToVariantDtoList(variants)
  }

  async FindDropdown(productId) {

    let variants = await repository.FindByProductId(productId)

    return mapper.ToDropdownDtoList(variants)
  }

  async Create(dto) {

    await comparator.CheckSku(dto)

    let variant = await mapper.ToVariant(dto)
    await mapper.CreateData(variant, dto.activedUser)

    await repository.Create(variant)
    await inventoryService.CreateByVariant(variant.id)

    return dto
  }

  async Update(dto) {

    await comparator.CheckId(dto.id)
    await comparator.CheckSku(dto)

    let variant = await mapper.ToVariant(dto)
    await mapper.UpdateData(variant, dto.activedUser)

    await repository.Update(variant)
    return dto 
  }

  async Delete(dto) {

    await comparator.CheckInventory(dto)

    let variant = await comparator.CheckId(dto.id)
    await mapper.DeleteData(variant, dto.activedUser)

    await repository.Delete(variant)
    await inventoryService.DeleteByVariant(dto.id)

    return ""
  }
}

module.exports = new VariantService()