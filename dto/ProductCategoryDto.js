const BaseDto = require('./BaseDto');

class ProductCategoryDto extends BaseDto {
  constructor(id, name, description) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

module.exports = ProductCategoryDto;
