const response = require('../helper/Response')
const service = require('../service/Store/LocationService')
const message = require('../message/LocationMessage')

class LocationController {
  
  async FindProvince(req, res, next) {

    try {
      let provinces = await service.FindProvince()

      return (provinces.length === 0)
        ? response.NotFound(res, message.PROVINCE_NOT_FOUND)
        : response.Success(res, message.GET_PROVINCE_SUCCESS, provinces)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindCity(req, res, next) {

    try {
      let provinceId = req.params.provinceId
      let cities = await service.FindCity(provinceId)

      return (cities.length == 0)
          ? response.NotFound(res, message.CITY_NOT_FOUND)
          : response.Success(res, message.GET_CITY_SUCCESS, cities)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }
}

module.exports = new LocationController()