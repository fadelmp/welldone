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
      city_id: (store.city) ? store.city.id : "",
      city_name: (store.city) ? store.city.name : "",
      province_id: (store.city) ? (store.city.province) ? store.city.province.id : "" : "",
      province_name: (store.city) ? (store.city.province) ? store.city.province.name : "" : "",
			created_at: store.createdAt,
			created_by: store.createdBy,
			updated_at: store.updatedAt,
			updated_by: store.updatedBy
    }
  }
	
}

module.exports = new StoreMapper()