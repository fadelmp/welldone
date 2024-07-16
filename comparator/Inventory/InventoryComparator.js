const repository = require('../../repository/Inventory/InventoryRepository')
const mutationRepo = require('../../repository/Inventory/MutationRepository')
const message = require('../../message/Inventory/InventoryMessage')
const mutationMessage = require('../../message/Inventory/MutationMessage')
const NotFound = require('../../error/NotFound')
const InternalServer = require('../../error/InternalServer')

class InventoryComparator {

  async CheckStoreVariant(storeId, variantId) {

    let inventory = await repository.FindByStoreAndVariant(storeId, variantId)

    if (!inventory) throw new NotFound(message.NOT_FOUND)

    return inventory
  }

  async CheckMutation(mutationId) {

    let mutation = await mutationRepo.FindById(mutationId)

    if (!mutation) throw new NotFound(mutationMessage.NOT_FOUND)

    if (mutation.status) throw new InternalServer(mutationMessage.ALREADY_APPROVED)

    return mutation
  }

}

module.exports = new InventoryComparator()