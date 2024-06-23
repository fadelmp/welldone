const mapper = require('../mapper/BaseMapper')
const cityRepo = require('../repository/Store/CityRepository')
const provinceRepo = require('../repository/Store/ProvinceRepository')

class LocationService {

  async FindProvince() {

    let provinces = await provinceRepo.FindAll()

    return mapper.ToDropdownDtoList(provinces)
  }

  async FindCity(provinceId) {

    let cities = await cityRepo.FindAll(provinceId)

    return mapper.ToDropdownDtoList(cities)
  }
}

module.exports = new LocationService()