const response = require('../../helper/Response')
const OrderDto = require('../../dto/Order/OrderDto')
const service = require('../../service/Order/OrderService')
const message = require('../../message/Order/OrderMessage')

class OrderController {

  async Create(req, res, next) {

    try {
      let dto = new OrderDto(req)

      dto = await service.Create(dto)

      return response.Success(req, res, message.CREATE_SUCCESS, dto)
    
    } catch (error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new OrderController()