const voucherComparator = require('../Discount/VoucherComparator')
const inventoryComparator = require('../Inventory/InventoryComparator')

class OrderComparator {

  async CheckVoucher(dto) {

    return await voucherComparator.Validate(
      dto.voucherId, dto.total)
  }

  async CheckStock(dto) {

    let storeId = dto.store
    let items = dto.items
    
    for (const item of items)
      await this.checkItem(storeId, item)
  }

  async checkItem(storeId, item) {

    let variantId = item.variantId
    let quantity = item.quantity

    await inventoryComparator.CheckStock(storeId, variantId, quantity)
  }
}

module.exports = new OrderComparator()