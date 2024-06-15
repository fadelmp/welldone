class ProductImageMapper {

	async ToProductImage(product, dto) {

		return {
			product_id: product.id,
			path: dto.path
		}
	}
	
	async ToProductImageDtoList(products) {
	
		return Promise.all(products.map(toProductDto));
	}
	
	async toProductImageDto(product_image) {
	
		return product_image.path
	}
}

module.exports = ProductMapper