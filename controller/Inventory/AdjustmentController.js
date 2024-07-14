const AdjustmentDto = require('../../dto/AdjustmentDto')
const response = require('../../helper/Response')
const service = require('../../service/Inventory/AdjustmentService')
const message = require('../../message/Inventory/AdjustmentMessage')

class AdjustmentController {
  
  async FindAll(req, res, next) {

    try {
      let adjustments = await service.FindAll()

      return (adjustments.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SUCCESS, adjustments)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindAllVariant(req, res, next) {

    try {
      let adjustments = await service.FindAllVariant()

      return (adjustments.length == 0)
          ? response.NotFound(res, message.NOT_FOUND)
          : response.Success(res, message.GET_SUCCESS, adjustments)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let dto = new AdjustmentDto(req)

      dto = await service.Create(dto)

      return response.Success(res, message.ADJUSTMENT_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new AdjustmentController()