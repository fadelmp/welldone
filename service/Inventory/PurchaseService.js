const inventoryService = require('./InventoryService')
const mapper = require('../../mapper/Inventory/PurchaseMapper')
const repository = require('../../repository/Inventory/PurchaseRepository')
const variantRepo = require('../../repository/Inventory/PurchaseVariantRepository')

class PurchaseService {

  async FindAll() {

    let purchases = await repository.FindAll()

    return mapper.ToPurchaseDtoList(purchases)
  }

  async FindAllVariant() {

    let variants = await variantRepo.FindAll()

    return mapper.ToPurchaseVariantDtoList(variants)
  }

  async Create(dto) {

    let purchase = await mapper.ToPurchase(dto)
    await mapper.Create(purchase, dto.activedUser)
    purchase.createdAt = dto.date

    await repository.Create(purchase)

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