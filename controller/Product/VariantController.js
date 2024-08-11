const VariantDto = require('../../dto/Product/VariantDto')
const response = require('../../helper/Response')
const service = require('../../service/Product/VariantService')
const message = require('../../message/Product/VariantMessage')

class VariantController {
  
  async FindAll(req, res, next) {

    try {
      let variants = await service.FindAll()

      return (variants.length === 0)
        ? response.NotFound(req, res, message.NOT_FOUND)
        : response.Success(req, res, message.GET_SUCCESS, variants)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindById(req, res, next) {

    try {
      let dto = new VariantDto(req)
      let variant = await service.FindById(dto)

      return (variant == null)
          ? response.NotFound(req, res, message.NOT_FOUND)
          : response.Success(req, res, message.GET_SUCCESS, variant)
    
    } catch (error) {
      // Error Handling
      next()
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
      let dto = new VariantDto(req)

      dto = await service.Create(dto)

      return response.Success(req, res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Update(req, res, next) {

    try {
      let dto = new VariantDto(req)

      dto = await service.Update(dto)

      return response.Success(req, res, message.UPDATE_SUCCESS, dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Delete(req, res,next) {

    try {
      let dto = new VariantDto(req)

      await service.Delete(dto)
      
      return response.Success(req, res, message.DELETE_SUCCESS, {})

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new VariantController()