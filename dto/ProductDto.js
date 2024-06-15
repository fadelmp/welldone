// ProductDto.js

const BaseDto = require('./BaseDto');

class ProductDto extends BaseDto {
  /**
   * @param {string} id - The unique identifier for the product.
   * @param {string} name - The name of the product.
   * @param {string} description - The description of the product.
   * @param {string} product_category_id - The category ID of the product.
   * @param {number} unit_price - The unit price of the product.
   * @param {number} sale_price - The sale price of the product.
   * @param {string[]} tags - An array of tags associated with the product.
   * @param {string[]} image - An array of image URLs associated with the product.
   * @param {Array<{ size: string, sku: string }>} variant - An array of variants for the product.
   */

  constructor(id, name, description, product_category_id, unit_price, sale_price, tags, image, variant) {
    super(id);
    this.name = name;
    this.description = description;
    this.product_category_id = product_category_id;
    this.unit_price = unit_price;
    this.sale_price = sale_price;
    this.tags = tags;
    this.image = image;
    this.variant = variant;
  }
}

module.exports = ProductDto;
