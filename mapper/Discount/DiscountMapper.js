const BaseMapper = require("../BaseMapper")

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
      value: dto.value,
      maximum: dto.maximum,
      minimum: dto.minimum
    }
  }

  async ToDiscountDtoList(discounts) {

    return Promise.all(
      discounts.map(
        discount => this.ToDiscountDto(discount)))
  }

  async ToDiscountStore(discountId, storeId) {

    return {
      discountId: discountId,
      storeId: storeId
    }
  }

  async ToDiscountProduct(discountId, productId) {

    return {
      discountId: discountId,
      productId: productId
    }
  }

  async ToDiscountDto(discount) {

    return {
      id: discount.id,
      code: discount.code,
      name: discount.name,
      description: discount.description,
      start_date: discount.startDate,
      end_date: discount.endDate,
      is_nominal: discount.isNominal,
      value: discount.value,
      maximum: discount.maximum,
      minimum: discount.minimum,
      stores: discount.stores,
      products: discount.products,
      created_at: discount.createdAt,
      created_by: discount.createdBy,
      updated_at: discount.updatedAt,
      updated_by: discount.updatedBy
    }
  }
	
}

module.exports = new DiscountMapper()