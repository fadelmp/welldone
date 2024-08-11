const response = require('../../helper/Response')
const VoucherDto = require('../../dto/Discount/VoucherDto')
const service = require('../../service/Discount/VoucherService')
const message = require('../../message/Discount/VoucherMessage')

class VoucherController {
  
  async FindAll(req, res, next) {

    try {
      let vouchers = await service.FindAll()

      return (vouchers.length === 0)
        ? response.NotFound(req, res, message.NOT_FOUND)
        : response.Success(req, res, message.GET_SUCCESS, vouchers)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindById(req, res, next) {

    try {
      let dto = new VoucherDto(req)
      let voucher = await service.FindById(dto)

      return (voucher == null)
        ? response.NotFound(req, res, message.NOT_FOUND)
        : response.Success(req, res, message.GET_SUCCESS, voucher)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindDropdown(req, res, next) {

    try {
      let dropdowns = await service.FindDropdown()

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
      let dto = new VoucherDto(req)

      dto = await service.Create(dto)

      return response.Success(req, res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let dto = new VoucherDto(req)

      dto = await service.Update(dto)

      return response.Success(req, res, message.UPDATE_SUCCESS, dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let dto = new VoucherDto(req)

      await service.Delete(dto)
      
      return response.Success(req, res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new VoucherController()