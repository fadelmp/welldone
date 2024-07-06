const StoreDto = require('../../dto/StoreDto')
const response = require('../../helper/Response')
const service = require('../../service/Store/StoreService')
const message = require('../../message/StoreMessage')

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
      let dto = new StoreDto(req)

      dto = await service.Create(dto)

      return response.Success(res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let dto = new StoreDto(req)

      dto = await service.Update(storeDto)

      return response.Success(res, message.UPDATE_SUCCESS, dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let dto = new StoreDto(req)

      await service.Delete(dto)
      
      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new StoreController()