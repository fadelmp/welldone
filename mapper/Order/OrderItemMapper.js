const BaseMapper = require("../BaseMapper")

class OrderItemMapper extends BaseMapper {

  async ToOrderItem(order, variant, quantity, discount, capital, amount) {

    let revenue = amount - capital
    let final = amount - discount

    return {
      orderId: order.id,
      variantId: variant.id,
      size: variant.size,
      sku: variant.sku,
      productId: variant.product.id,
      productName: variant.product.name,
      categoryId: variant.product.category.id,
      categoryName: variant.product.category.name,
      discountPrice: discount,
      capitalPrice: capital,
      revenuePrice: revenue,
      amountPrice: amount,
      finalPrice: final,
      quantity: quantity,
      totalDiscount: discount * quantity,
      totalCapital: capital * quantity,
      totalRevenue: revenue * quantity,
      totalAmount: amount * quantity,
      total: final * quantity
    }
  }
	
}

module.exports = new OrderItemMapper()