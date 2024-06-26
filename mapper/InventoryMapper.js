const BaseMapper = require("./BaseMapper")

class InventoryMapper extends BaseMapper {

  async Create(storeId, variantId) {

    return {
      storeId: storeId,
      variantId: variantId,
      total: 0
    }
  }

}

module.exports = new InventoryMapper()