const inventoryService = require('./InventoryService')
const mapper = require('../../mapper/Inventory/MutationMapper')
const repository = require('../../repository/Inventory/MutationRepository')
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

  async Create(dto) {

    let mutation = await mapper.ToMutation(dto)
    await mapper.Create(mutation, dto.activedUser)

    await repository.Create(mutation)

    dto.stocks.forEach(stock => this.createVariant(dto, mutation, stock))
  }

  async createVariant(dto, mutation, stock) {

    let mutationVariant = await mapper.ToMutationVariant(mutation, stock)
    await mapper.Create(mutationVariant, dto.activedUser)

    await variantRepo.Create(mutationVariant)
    await inventoryService.TransferOut(dto, stock)
  }
}

module.exports = new MutationService()