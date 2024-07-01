const mapper = require('../../mapper/DiscountMapper')
const repository = require('../../repository/Discount/DiscountProductRepository')

class DiscountProductService {

  async CreateAll(dto, data) {

    let products = dto.products
    
    products.forEach(product => this.create(data, product))
  }

  async Update(dto, data) {

    await this.Delete(data.id)

    await this.CreateAll(dto, data)
  }

  async Delete(discountId) {

    await repository.Delete(discountId)
  }

  async create(data, productId) {

    let discountProduct = await mapper.ToDiscountProduct(data.id, productId)

    await repository.Create(discountProduct)
  }
}

module.exports = new DiscountProductService()