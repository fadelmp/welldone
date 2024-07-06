const VoucherDto = require('../../dto/VoucherDto')
const response = require('../../helper/Response')
const service = require('../../service/Discount/VoucherService')
const message = require('../../message/Discount/VoucherMessage')

class VoucherController {
  
  async FindAll(req, res, next) {

    try {
      let vouchers = await service.FindAll()

      return (vouchers.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SUCCESS, vouchers)

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
      let dto = new VoucherDto(req)

      dto = await service.Create(dto)

      return response.Success(res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let dto = new VoucherDto(req)

      dto = await service.Update(dto)

      return response.Success(res, message.UPDATE_SUCCESS, dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let dto = new VoucherDto(req)

      await service.Delete(dto)
      
      return response.Success(res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new VoucherController()