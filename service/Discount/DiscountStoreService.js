const mapper = require('../../mapper/Discount/DiscountMapper')
const repository = require('../../repository/Discount/DiscountStoreRepository')

class DiscountStoreService {

  async CreateAll(dto, data) {

    let stores = dto.stores
    
    stores.forEach(store => this.create(data, store))
  }

  async Update(dto, data) {

    await this.Delete(data.id)

    await this.CreateAll(dto, data)
  }

  async Delete(discountId) {

    await repository.Delete(discountId)
  }

  async create(data, storeId) {

    let discountStore = await mapper.ToDiscountStore(data.id, storeId)
    await mapper.Create(discountStore, "")

    await repository.Create(discountStore)
  }
}

module.exports = new DiscountStoreService()