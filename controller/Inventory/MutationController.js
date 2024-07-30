const response = require('../../helper/Response')
const MutationDto = require('../../dto/Inventory/MutationDto')
const service = require('../../service/Inventory/MutationService')
const message = require('../../message/Inventory/MutationMessage')

class MutationController {
  
  async FindAll(req, res, next) {

    try {
      let dto = new MutationDto(req)
      let mutations = await service.FindAll()

      return (mutations.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SUCCESS, mutations)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindAllVariant(req, res, next) {

    try {
      let dto = new MutationDto(req)
      let mutations = await service.FindAllVariant(dto)

      return (mutations.length == 0)
          ? response.NotFound(res, message.NOT_FOUND)
          : response.Success(res, message.GET_SUCCESS, mutations)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async FindShipment(req, res, next) {

    try {
      let storeId = req.params.storeId
      let mutations = await service.FindShipment(storeId)

      return (mutations.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SHIPMENT_SUCCESS, mutations)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async FindApproval(req, res, next) {

    try {
      let storeId = req.params.storeId
      let mutations = await service.FindApproval(storeId)

      return (mutations.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_APPROVAL_SUCCESS, mutations)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let dto = new MutationDto(req)

      dto = await service.Create(dto)

      return response.Success(res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Approve(req, res, next) {

    try {
      let dto = new MutationDto(req)

      dto = await service.Approval(dto)

      return response.Success(res, message.APPROVE_SUCCESS, dto)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new MutationController()