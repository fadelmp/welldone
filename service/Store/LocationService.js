const mapper = require('../../mapper/Store/LocationMapper')
const cityRepo = require('../../repository/Store/CityRepository')
const provinceRepo = require('../../repository/Store/ProvinceRepository')

class LocationService {

  async FindProvince() {

    let provinces = await provinceRepo.FindAll()

    return await mapper.ToDropdownDtoList(provinces)
  }

  async FindCity(provinceId) {

    let cities = await cityRepo.FindAll(provinceId)

    return mapper.ToDropdownDtoList(cities)
  }
}

module.exports = new LocationService()