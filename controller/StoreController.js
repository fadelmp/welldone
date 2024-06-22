const StoreDto = require('../dto/StoreDto')
const response = require('../helper/Response')
const service = require('../service/StoreService')
const message = require('../message/StoreMessage')

class StoreController {
  
  async FindAll(req, res, next) {

    try {
      let stores = await service.FindAll()

      return (stores.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SUCCESS, stores)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindDropdown(req, res, next) {

    try {
      let dropdowns = await service.FindDropdown()

      return (dropdowns.length == 0)
          ? response.NotFound(res, message.NOT_FOUND)
          : response.Success(res, message.DROPDOWN_SUCCESS, dropdowns)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let storeDto = new StoreDto(req)

      storeDto = await service.Create(storeDto)

      return response.Success(res, message.CREATE_SUCCESS, storeDto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let storeDto = new StoreDto(req)

      storeDto = await service.Update(storeDto)

      return response.Success(res, message.UPDATE_SUCCESS, storeDto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let storeDto = new StoreDto(req)

      await service.Delete(storeDto)
      
      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new StoreController()