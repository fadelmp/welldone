class OrderItemDto {

  constructor(item) {
    this.variantId = item.variant_id
    this.discountId = item.discount_id
    this.discountName = item.discount_name
    this.quantity = item.quantity
  }
}

module.exports = OrderItemDto
