class OrderItemDto {

  constructor(item) {
    this.variantId = item.variant_id
    this.discountId = item.discount_id
    this.quantity = item.quantity
  }
}

module.exports = OrderItemDto
