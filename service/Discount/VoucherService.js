const mapper = require('../../mapper/Discount/DiscountMapper')
const storeService = require('./DiscountStoreService')
const productService = require('./DiscountProductService')
const comparator = require('../../comparator/Discount/VoucherComparator')
const repository = require('../../repository/Discount/DiscountRepository')

class VoucherService {

  async FindAll() {

    let vouchers = await repository.FindAllVoucher()

    return mapper.ToDiscountDtoList(vouchers)
  }

  async FindDropdown() {

    let vouchers = await repository.FindActivedVoucher()

    return mapper.ToDropdownDtoList(vouchers)
  }

  async Create(dto) {

    await comparator.CheckName(dto)
    await comparator.CheckCode(dto)

    let voucher = await mapper.ToDiscount(dto, true)
    await mapper.Create(voucher, dto.activedUser)

    await repository.Create(voucher)
    await storeService.CreateAll(dto, voucher)
    await productService.CreateAll(dto, voucher)

    return dto
  }

  async Update(dto) {

    await comparator.CheckId(dto.id)
    await comparator.CheckName(dto)
    await comparator.CheckCode(dto)

    let voucher = await mapper.ToDiscount(dto, true)
    await mapper.Update(voucher, dto.activedUser)

    await repository.Update(voucher)
    await storeService.Update(dto, voucher)
    await productService.Update(dto, voucher)

    return dto 
  }

  async Delete(dto) {

    let voucher = await comparator.CheckId(dto.id)
    await mapper.Delete(voucher, dto.activedUser)

    await repository.Delete(voucher)
    await storeService.Delete(voucher.id)
    await productService.Delete(voucher.id)

    return ""
  }

  async Calculate(voucher, totals) {

    if (voucher == null)
      return 0

    if (voucher.isNominal)
      return voucher.value
  
    let discount = (voucher.value * totals.final) / 100
  
    return (discount > voucher.maximum) ? voucher.maximum : discount
  }
}

module.exports = new VoucherService()