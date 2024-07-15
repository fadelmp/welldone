const { Mutation, MutationVariant, Store } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Inventory/MutationMessage')

class MutationRepository {

  async FindAll() {
    
    try {
      return await Mutation.findAll({ 
        where: { isDeleted: false }, 
        include: [
          { model: Store, as: 'fromStore' },
          { model: Store, as: 'toStore' },
          { model: MutationVariant, as: 'variants' }
        ]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await Mutation.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }
}

module.exports = new MutationRepository()