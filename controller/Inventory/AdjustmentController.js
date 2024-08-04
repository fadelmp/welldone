const AdjustmentDto = require('../../dto/Inventory/AdjustmentDto')
const response = require('../../helper/Response')
const service = require('../../service/Inventory/AdjustmentService')
const message = require('../../message/Inventory/AdjustmentMessage')

class AdjustmentController {
  
  async FindAll(req, res, next) {

    try {
      let dto = new AdjustmentDto(req)
      let adjustments = await service.FindAll(dto)

      return (adjustments.length === 0)
        ? response.NotFound(req, res, message.NOT_FOUND)
        : response.Success(req, res, message.GET_SUCCESS, adjustments)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindAllVariant(req, res, next) {

    try {
      let dto = new AdjustmentDto(req)
      let adjustments = await service.FindAllVariant(dto)

      return (adjustments.length == 0)
          ? response.NotFound(req, res, message.NOT_FOUND)
          : response.Success(req, res, message.GET_SUCCESS, adjustments)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let dto = new AdjustmentDto(req)

      dto = await service.Create(dto)

      return response.Success(req, res, message.ADJUSTMENT_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new AdjustmentController()