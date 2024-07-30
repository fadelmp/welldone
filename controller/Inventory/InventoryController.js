const response = require('../../helper/Response')
const InventoryDto = require('../../dto/Inventory/InventoryDto')
const service = require('../../service/Inventory/InventoryService')
const message = require('../../message/Inventory/InventoryMessage')

class InventoryController {
  
  async FindAll(req, res, next) {

    try {
      let dto = new InventoryDto(req)
      let inventories = await service.FindAll(dto)

      return (inventories.length === 0)
        ? response.NotFound(res, message.NOT_FOUND)
        : response.Success(res, message.GET_SUCCESS, inventories)

    } catch(error) {
      // Error Handling
      next(error)
    }
  }

}

module.exports = new InventoryController()