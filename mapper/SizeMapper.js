class SizeMapper {

  async ToSize(sizeDto) {

    return {
      name: sizeDto.name,
      sku: sizeDto.sku,
      unit_price: sizeDto.unit_price,
      capital_price: sizeDto.capital_price
    }
  }

  async ToSizeDtoList(sizes) {

    return Promise.all(sizes.map(size => this.toSizeDto(size)))
  }

  async toSizeDto(size) {

    return {
      name: size.name,
      sku: size.sku,
      unit_price: size.unit_price,
      capital_price: size.capital_price
    }
  }
	
}

module.exports = new SizeMapper()