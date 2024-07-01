const mapper = require('../../mapper/DiscountMapper')
const storeService = require('./DiscountStoreService')
const productService = require('./DiscountProductService')
const comparator = require('../../comparator/VoucherComparator')
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
    await mapper.CreateData(voucher, dto.activedUser)

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
    await mapper.UpdateData(voucher, dto.activedUser)

    await repository.Update(voucher)
    await storeService.Update(dto, voucher)
    await productService.Update(dto, voucher)

    return dto 
  }

  async Delete(dto) {

    let voucher = await comparator.CheckId(dto.id)
    await mapper.DeleteData(voucher, dto.activedUser)

    await repository.Delete(voucher)
    await storeService.Delete(voucher.id)
    await productService.Delete(voucher.id)

    return ""
  }
}

module.exports = new VoucherService()