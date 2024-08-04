const response = require('../../helper/Response')
const PurchaseDto = require('../../dto/Inventory/PurchaseDto')
const service = require('../../service/Inventory/PurchaseService')
const message = require('../../message/Inventory/PurchaseMessage')

class PurchaseController {
  
  async FindAll(req, res, next) {

    try {
      let dto = new PurchaseDto(req)
      let purchases = await service.FindAll(dto)

      return (purchases.length === 0)
        ? response.NotFound(req, res, message.NOT_FOUND)
        : response.Success(req, res, message.GET_SUCCESS, purchases)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindAllVariant(req, res, next) {

    try {
      let dto = new PurchaseDto(req)
      let purchases = await service.FindAllVariant(dto)

      return (purchases.length == 0)
          ? response.NotFound(req, res, message.NOT_FOUND)
          : response.Success(req, res, message.GET_SUCCESS, purchases)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let dto = new PurchaseDto(req)

      dto = await service.Create(dto)

      return response.Success(req, res, message.CREATE_PURCHASE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new PurchaseController()