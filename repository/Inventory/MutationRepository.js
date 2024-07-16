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

  async FindAllFromStore(storeId) {

    try {
      return await Mutation.findAll({ 
        where: { fromStoreId: storeId, status: false, isDeleted: false }, 
        include: [
          { model: Store, as: 'fromStore' },
          { model: Store, as: 'toStore' },
          { model: MutationVariant, as: 'variants' }
        ]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_SHIPMENT_FAILED)
    }
  }

  async FindAllToStore(storeId) {

    try {
      return await Mutation.findAll({ 
        where: { toStoreId: storeId, status: false, isDeleted: false }, 
        include: [
          { model: Store, as: 'fromStore' },
          { model: Store, as: 'toStore' },
          { model: MutationVariant, as: 'variants' }
        ]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_APPROVAL_FAILED)
    }
  }

  async FindById(id) {

    try {
      return await Mutation.findOne({ where: { id: id, isDeleted: false }})
      
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

  async Update(data) {

    try {
      return await Mutation.update(
        { status: true, updatedBy: data.updatedBy }, 
        { where: { id: data.id, isDeleted: false }}
      )

    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.APPROVE_FAILED)
    }
  }
}

module.exports = new MutationRepository()