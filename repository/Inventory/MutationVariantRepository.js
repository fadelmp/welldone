const BaseRepository = require('../BaseRepository')
const message = require('../../message/Inventory/MutationMessage')
const { Mutation, MutationVariant, Store, Variant, Product, Category } = require('../../model')

class MutationVariantRepository extends BaseRepository {

  async FindAll() {

    let error = message.GET_FAILED
    let where = await this._False()
    let include = [
      { model: Mutation, as: 'mutation', include: 
        [{ model: Store, as: 'fromStore'}, { model: Store, as: 'toStore' }]
      },
      { model: Variant, as: 'variant', include: [
        { model: Product, as: 'product', include: [
          { model: Category, as: 'category'}
        ]}
      ]}
    ]
    
    return await this._FindAll(MutationVariant, where, include, error)
  }

  async Create(data) {

    let error = message.CREATE_FAILED

    return await this._Create(MutationVariant, data, error)
  }
}

module.exports = new MutationVariantRepository()