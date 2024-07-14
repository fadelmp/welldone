const inventoryService = require('./InventoryService')
const mapper = require('../../mapper/Inventory/PurchaseMapper')
const purchaseRepo = require('../../repository/Inventory/PurchaseRepository')
const variantRepo = require('../../repository/Inventory/PurchaseVariantRepository')

class PurchaseService {

  async Create(dto) {

    let purchase = await mapper.ToPurchase(dto)
    await mapper.Create(purchase, dto.activedUser)
    purchase.createdAt = dto.date

    await purchaseRepo.Create(purchase)

    dto.stocks.forEach(stock => this.createVariant(dto, purchase, stock))
  }

  async createVariant(dto, purchase, stock) {

    let purchaseVariant = await mapper.ToPurchaseVariant(purchase, stock)
    await mapper.Create(purchaseVariant, dto.activedUser)

    await variantRepo.Create(purchaseVariant)
    await inventoryService.Purchase(dto, stock)
  }
}

module.exports = new PurchaseService()