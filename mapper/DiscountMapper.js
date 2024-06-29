const BaseMapper = require("./BaseMapper")

class DiscountMapper extends BaseMapper {

  async ToDiscount(dto, isVoucher) {

    return {
      id: dto.id,
      code: dto.code,
      name: dto.name,
      description: dto.description,
      startDate: dto.startDate,
      endDate: dto.endDate,
      isVoucher: isVoucher,
      isNominal: dto.isNominal,
      value: dto.value
    }
  }

  async ToDiscountDtoList(discounts) {

    return Promise.all(
      discounts.map(
        discount => this.toDiscountDto(discount)))
  }

  async toDiscountDto(discount) {

    return {
			id: discount.id,
      code: discount.code,
			name: discount.name,
			description: discount.description,
      startDate: discount.startDate,
      endDate: discount.endDate,
      isNominal: discount.isNominal,
      value: discount.value,
      stores: discount.stores,
      products: discount.products,
			createdAt: discount.createdAt,
			createdBy: discount.createdBy,
			updatedAt: discount.updatedAt,
			updatedBy: discount.updatedBy
    }
  }
	
}

module.exports = new DiscountMapper()