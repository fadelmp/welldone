const PurchaseDto = require('../../dto/PurchaseDto')
const response = require('../../helper/Response')
const service = require('../../service/Inventory/PurchaseService')
const message = require('../../message/Inventory/InventoryMessage')

class PurchaseController {
  
  async FindAll(req, res, next) {

    try {
      let categories = await service.FindAll()

      return (categories.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SUCCESS, categories)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindByVariant(req, res, next) {

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
      let dto = new PurchaseDto(req)

      dto = await service.Create(dto)

      return response.Success(res, message.CREATE_PURCHASE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new PurchaseController()