const response = require('../../helper/Response')
const DiscountDto = require('../../dto/Discount/DiscountDto')
const service = require('../../service/Discount/DiscountService')
const message = require('../../message/Discount/DiscountMessage')

class DiscountController {
  
  async FindAll(req, res, next) {

    try {
      let discounts = await service.FindAll()

      return (discounts.length === 0)
        ? response.NotFound(req, res, message.NOT_FOUND)
        : response.Success(req, res, message.GET_SUCCESS, discounts)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindDropdown(req, res, next) {

    try {
      let productId = req.params.productId
      let dropdowns = await service.FindDropdown(productId)

      return (dropdowns.length == 0)
          ? response.NotFound(req, res, message.NOT_FOUND)
          : response.Success(req, res, message.DROPDOWN_SUCCESS, dropdowns)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let dto = new DiscountDto(req)

      dto = await service.Create(dto)

      return response.Success(req, res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let dto = new DiscountDto(req)

      dto = await service.Update(dto)

      return response.Success(req, res, message.UPDATE_SUCCESS, dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let dto = new DiscountDto(req)

      await service.Delete(dto)
      
      return response.Success(req, res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new DiscountController()