const MutationDto = require('../../dto/MutationDto')
const response = require('../../helper/Response')
const service = require('../../service/Inventory/MutationService')
const message = require('../../message/Inventory/MutationMessage')

class MutationController {
  
  async FindAll(req, res, next) {

    try {
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
      let mutations = await service.FindAllVariant()

      return (mutations.length == 0)
          ? response.NotFound(res, message.NOT_FOUND)
          : response.Success(res, message.GET_SUCCESS, mutations)

    } catch (error) {
      // Error Handling
      next(error)
    }
  }

  async Create(req, res, next) {

    try {
      let dto = new MutationDto(req)

      dto = await service.Create(dto)

      return response.Success(res, message.CREATE_MUTATION_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new MutationController()