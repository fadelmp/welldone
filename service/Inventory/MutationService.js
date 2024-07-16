const inventoryService = require('./InventoryService')
const mapper = require('../../mapper/Inventory/MutationMapper')
const repository = require('../../repository/Inventory/MutationRepository')
const comparator = require('../../comparator/Inventory/InventoryComparator')
const variantRepo = require('../../repository/Inventory/MutationVariantRepository')

class MutationService {

  async FindAll() {

    let mutations = await repository.FindAll()

    return mapper.ToMutationDtoList(mutations)
  }

  async FindAllVariant() {

    let variants = await variantRepo.FindAll()

    return mapper.ToMutationVariantDtoList(variants)
  }

  async FindShipment(storeId) {

    let mutations = await repository.FindAllFromStore(storeId)

    return mapper.ToMutationDtoList(mutations)
  }

  async FindApproval(storeId) {

    let mutations = await repository.FindAllToStore(storeId)

    return mapper.ToMutationDtoList(mutations)
  }

  async Create(dto) {

    let mutation = await mapper.ToMutation(dto)
    await mapper.Create(mutation, dto.activedUser)

    await repository.Create(mutation)

    dto.stocks.forEach(stock => this.createVariant(dto, mutation, stock))
  }

  async Approval(dto) {

    let mutation = await comparator.CheckMutation(dto.id)
    await mapper.Update(mutation, dto.activedUser)

    await repository.Update(mutation)

    dto.stocks.forEach(stock => this.approveVariant(dto, mutation, stock))
  }

  async createVariant(dto, mutation, stock) {

    let mutationVariant = await mapper.ToMutationVariant(mutation, stock)
    await mapper.Create(mutationVariant, dto.activedUser)

    await variantRepo.Create(mutationVariant)
    await inventoryService.TransferOut(dto, stock)
  }

  async approveVariant(dto, mutation, stock) {

    let mutationVariant = await mapper.ToMutationVariant(mutation, stock)
    await mapper.Update(mutationVariant, dto.activedUser)

    await inventoryService.TransferIn(dto, stock)
  }
}

module.exports = new MutationService()