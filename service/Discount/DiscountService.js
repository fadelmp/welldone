const mapper = require('../../mapper/Discount/DiscountMapper')
const storeService = require('./DiscountStoreService')
const productService = require('./DiscountProductService')
const comparator = require('../../comparator/Discount/DiscountComparator')
const repository = require('../../repository/Discount/DiscountRepository')

class DiscountService {

  async FindAll() {

    let discounts = await repository.FindAllDiscount()

    return mapper.ToDiscountDtoList(discounts)
  }

  async FindDropdown(productId) {

    let discounts = await repository.FindActivedDiscount(productId)

    return mapper.ToDropdownDtoList(discounts)
  }

  async Create(dto) {

    await comparator.CheckName(dto)

    let discount = await mapper.ToDiscount(dto, false)
    await mapper.Create(discount, dto.activedUser)

    await repository.Create(discount)
    await storeService.CreateAll(dto, discount)
    await productService.CreateAll(dto, discount)

    return dto
  }

  async Update(dto) {

    await comparator.CheckId(dto.id)
    await comparator.CheckName(dto)

    let discount = await mapper.ToDiscount(dto, false)
    await mapper.Update(discount, dto.activedUser)

    await repository.Update(discount)
    await storeService.Update(dto, discount)
    await productService.Update(dto, discount)

    return dto
  }

  async Delete(dto) {

    let discount = await comparator.CheckId(dto.id)
    await mapper.Delete(discount, dto.activedUser)

    await repository.Delete(discount)
    await storeService.Delete(discount.id)
    await productService.Delete(discount.id)

    return ""
  }
}

module.exports = new DiscountService()