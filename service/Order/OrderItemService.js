const mapper = require('../../mapper/Order/OrderItemMapper')
const discountService = require('../Discount/DiscountService')
const inventoryService = require('../Inventory/InventoryService')
const repository = require('../../repository/Order/OrderItemRepository')
const variantRepo = require('../../repository/Product/VariantRepository')

class OrderItemService {

  async CreateAll(order, dto) {

    let totals = { discount: 0, capital: 0, revenue: 0, amount: 0, final: 0 }
  
    for (const item of dto.items) {

      let itemTotals = await this.createItem(order, item)
      let revenue = itemTotals.totalAmount - itemTotals.totalCapital
      let final = itemTotals.totalAmount - itemTotals.totalDiscount

      totals.discount += itemTotals.totalDiscount
      totals.capital += itemTotals.totalCapital
      totals.revenue += revenue
      totals.amount += itemTotals.totalAmount
      totals.final += final
    }

    return totals
  }

  async createItem(order, item) {

    let variant = await variantRepo.FindById(item.variantId)

    let discount = await discountService.Calculate(item.discountId)
    let quantity = item.quantity
    let capital = variant.capitalPrice
    let amount = variant.unitPrice

    let orderItem = await mapper.ToOrderItem(order, item, variant, quantity, discount, capital, amount)

    await mapper.Create(orderItem, "SYSTEM")
    await repository.Create(orderItem)

    await inventoryService.Sales(order.storeId, item.variantId, quantity, order.createdAt)

    let totalDiscount = discount * quantity
    let totalCapital = capital * quantity
    let totalAmount = amount * quantity
    return { totalDiscount, totalCapital, totalAmount }
  }

}

module.exports = new OrderItemService()