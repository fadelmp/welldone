const BaseMapper = require("./BaseMapper")

class StoreMapper {

  async ToStore(storeDto) {

    return {
      id: storeDto.id,
      name: storeDto.name,
      address: storeDto.address,
      cityId: storeDto.cityId
    }
  }

  async ToStoreDtoList(stores) {

    return Promise.all(stores.map(store => this.toStoreDto(store)))
  }

  async toStoreDto(store) {

    return {
			id: store.id,
			name: store.name,
			address: store.address,
      cityId: store.city.id,
      cityName: store.city.name,
      provinceId: store.city.province.id,
      provinceName: store.city.province.name,
			createdAt: store.createdAt,
			createdBy: store.createdBy,
			updatedAt: store.updatedAt,
			updatedBy: store.updatedBy
    }
  }
	
}

module.exports = new StoreMapper()