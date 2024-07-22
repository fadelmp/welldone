class OrderItemDto {

  constructor(item) {
    super(item)
    this.variantId = item.variant_id
    this.size = item.size
    this.sku = item.sku
    this.productId = item.product_id
    this.productName = item.product_name
    this.categoryId = item.category_id
    this.categoryName = item.category_name
    this.discountId = item.discount_id
    this.discountName = item.discount_name
    this.quantity = item.quantity
  }
}

module.exports = OrderItemDto
