const dropdownMapper = require('../mapper/DropdownMapper')
const repository = require('../repository/ProductRepository')
const comparator = require('../comparator/ProductComparator')
const mapper = require('../mapper/ProductMapper')
const baseMapper = require('../mapper/BaseMapper')

class ProductService {

  async FindAll() {

    let products = await repository.FindAll()

    return mapper.ToProductDtoList(products)
  }

  async FindDropdown() {

    let products = await repository.FindAll()

    return dropdownMapper.ToDropdownDtoList(products)
  }

  async Create(ProductDto) {

    await comparator.CheckName(ProductDto)

    let Product = await mapper.ToProduct(ProductDto)
    Product.updatedBy = ProductDto.username
    Product.updatedBy = ProductDto.username

    await repository.Create(Product)
    return ProductDto
  }

  async Update(ProductDto) {

    await comparator.CheckId(ProductDto.id)
    await comparator.CheckName(ProductDto)

    let Product = await mapper.ToProduct(ProductDto)
    Product.updatedBy = ProductDto.username

    await repository.Update(Product)
    return ProductDto 
  }

  async Delete(ProductDto) {

    let Product = await comparator.CheckId(ProductDto.id)
    Product.updatedBy = ProductDto.username

    await repository.Delete(Product)
    return ""
  }
}

module.exports = new ProductService()