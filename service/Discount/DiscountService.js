const mapper = require('../../mapper/DiscountMapper')
const storeService = require('./DiscountStoreService')
const productService = require('./DiscountProductService')
const comparator = require('../../comparator/DiscountComparator')
const repository = require('../../repository/Discount/DiscountRepository')

class DiscountService {

  async FindAll() {

    let discounts = await repository.FindAll()

    return mapper.ToDiscountDtoList(discounts)
  }

  async FindDropdown() {

    let discounts = await repository.FindAll()

    return mapper.ToDropdownDtoList(discounts)
  }

  async Create(dto) {

    await comparator.CheckName(dto)

    let discount = await mapper.ToDiscount(dto, false)
    await mapper.CreateData(discount, dto.activedUser)

    await repository.Create(discount)
    await storeService.CreateAll(dto, discount)
    await productService.CreateAll(dto, discount)

    return dto
  }

  async Update(dto) {

    await comparator.CheckId(dto.id)
    await comparator.CheckName(dto)

    let discount = await mapper.ToDiscount(dto, false)
    await mapper.UpdateData(discount, dto.activedUser)

    await repository.Update(discount)
    await storeService.Update(dto, discount)
    await productService.Update(dto, discount)

    return dto
  }

  async Delete(dto) {

    await comparator.CheckProduct(dto)

    let discount = await comparator.CheckId(dto.id)
    await mapper.DeleteData(discount, dto.activedUser)

    await repository.Delete(discount)
    await storeService.Delete(discount, dto)
    await productService.Delete(discount, dto)

    return ""
  }
}

module.exports = new DiscountService()