const BaseMapper = require("../BaseMapper")

class StoreMapper extends BaseMapper {

  async ToStore(dto) {

    return {
      id: dto.id,
      name: dto.name,
      code: dto.code,
      address: dto.address,
      cityId: dto.cityId
    }
  }

  async ToStoreDtoList(stores) {

    return Promise.all(
      stores.map(
        store => this.ToStoreDto(store)))
  }

  async ToStoreDto(store) {

    return {
			id: store.id,
			name: store.name,
      store: store.code,
			address: store.address,
      cityId: (store.city) ? store.city.id : "",
      cityName: (store.city) ? store.city.name : "",
      provinceId: (store.city) ? (store.city.province) ? store.city.province.id : "" : "",
      provinceName: (store.city) ? (store.city.province) ? store.city.province.name : "" : "",
			createdAt: store.createdAt,
			createdBy: store.createdBy,
			updatedAt: store.updatedAt,
			updatedBy: store.updatedBy
    }
  }
	
}

module.exports = new StoreMapper()