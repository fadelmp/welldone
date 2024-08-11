const mapper = require('../../mapper/Product/ProductMapper')
const variantService = require('./VariantService')
const comparator = require('../../comparator/Product/ProductComparator')
const repository = require('../../repository/Product/ProductRepository')

class ProductService {

  async FindAll() {

    let products = await repository.FindAll()

    return mapper.ToProductDtoList(products)
  }

  async FindById(dto) {

    let product = await comparator.CheckId(dto.id)

    return mapper.ToProductDto(product)
  }

  async FindDropdown(categoryId) {

    let products = await repository.FindByCategoryId(categoryId)

    return mapper.ToDropdownDtoList(products)
  }

  async Create(dto) {

    await comparator.CheckName(dto)

    let product = await mapper.ToProduct(dto)
    await mapper.Create(product, dto.activedUser)

    await repository.Create(product)
    
    for (let variant of dto.variants) {
      variant.productId = product.id
      await variantService.Create(variant)
    }

    return dto
  }

  async Update(dto) {

    await comparator.CheckId(dto.id)
    await comparator.CheckName(dto)

    let product = await mapper.ToProduct(dto)
    await mapper.Update(product, dto.activedUser)

    await repository.Update(product)
    return dto 
  }

  async Delete(dto) {

    await comparator.CheckVariant(dto)

    let product = await comparator.CheckId(dto.id)
    await mapper.Delete(product, dto.activedUser)

    await repository.Delete(product)
    return ""
  }
}

module.exports = new ProductService()