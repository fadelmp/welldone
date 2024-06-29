const mapper = require('../mapper/ProductMapper')
const variantService = require('./VariantService')
const comparator = require('../comparator/ProductComparator')
const repository = require('../repository/Product/ProductRepository')

class ProductService {

  async FindAll() {

    let products = await repository.FindAll()

    return mapper.ToProductDtoList(products)
  }

  async FindDropdown(categoryId) {

    let products = await repository.FindByCategoryId(categoryId)

    return mapper.ToDropdownDtoList(products)
  }

  async Create(dto) {

    await comparator.CheckName(dto)

    let product = await mapper.ToProduct(dto)
    await mapper.CreateData(product, dto.activedUser)

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
    await mapper.UpdateData(product, dto.activedUser)

    await repository.Update(product)
    return dto 
  }

  async Delete(dto) {

    await comparator.CheckVariant(dto)

    let product = await comparator.CheckId(dto.id)
    await mapper.DeleteData(product, dto.activedUser)

    await repository.Delete(product)
    return ""
  }
}

module.exports = new ProductService()