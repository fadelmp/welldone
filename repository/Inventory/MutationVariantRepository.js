const { Mutation, MutationVariant, Store, Variant, Product, Category } = require('../../model')
const QueryFailed = require('../../error/QueryFailed')
const message = require('../../message/Inventory/MutationMessage')

class MutationVariantRepository {

  async FindAll() {
    
    try {
      return await MutationVariant.findAll({ 
        where: { isDeleted: false }, 
        include: [
          { model: Mutation, as: 'mutation', include: 
            [{ model: Store, as: 'fromStore'}, { model: Store, as: 'toStore' }]
          },
          { model: Variant, as: 'variant', include: [
            { model: Product, as: 'product', include: [
              { model: Category, as: 'category'}
            ]}
          ]}
        ]
      })
    
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.GET_FAILED)
    }
  }

  async Create(data) {

    try {
      return await MutationVariant.create(data)
      
    } catch (error) {
      // Error Handling
      throw new QueryFailed(error, message.CREATE_FAILED)
    }
  }
}

module.exports = new MutationVariantRepository()