const dropdownMapper = require('../mapper/DropdownMapper')
const cityRepo = require('../repository/Store/CityRepository')
const provinceRepo = require('../repository/Store/ProvinceRepository')

class LocationService {

  async FindProvince() {

    let provinces = await provinceRepo.FindAll()

    return dropdownMapper.ToDropdownDtoList(provinces)
  }

  async FindCity(provinceId) {

    let cities = await cityRepo.FindAll(provinceId)

    return dropdownMapper.ToDropdownDtoList(cities)
  }
}

module.exports = new LocationService()