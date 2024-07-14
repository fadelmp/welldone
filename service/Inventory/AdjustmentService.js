const inventoryService = require('./InventoryService')
const mapper = require('../../mapper/Inventory/AdjustmentMapper')
const repository = require('../../repository/Inventory/AdjustmentRepository')
const variantRepo = require('../../repository/Inventory/AdjustmentVariantRepository')

class AdjustmentService {

  async FindAll() {

    let adjustments = await repository.FindAll()

    return mapper.ToAdjustmentDtoList(adjustments)
  }

  async FindAllVariant() {

    let variants = await variantRepo.FindAll()

    return mapper.ToAdjustmentVariantDtoList(variants)
  }

  async Create(dto) {

    let adjustment = await mapper.ToAdjustment(dto)
    await mapper.Create(adjustment, dto.activedUser)
    adjustment.createdAt = dto.date

    await repository.Create(adjustment)

    dto.stocks.forEach(stock => this.createVariant(dto, adjustment, stock))
  }

  async createVariant(dto, adjustment, stock) {

    let adjustmentVariant = await mapper.ToAdjustmentVariant(adjustment, stock)
    await mapper.Create(adjustmentVariant, dto.activedUser)

    await variantRepo.Create(adjustmentVariant)
    await inventoryService.Adjustment(dto, stock)
  }
}

module.exports = new AdjustmentService()