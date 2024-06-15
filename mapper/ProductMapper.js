class ProductMapper {

	async ToProduct(dto) {

		return {
			id: dto.id,
			name: dto.name,
			description: dto.description,
			product_category_id: dto.product_category_id,
			unit_price: dto.unit_price,
			sale_price: dto.sale_price,
			tags: dto.tags
		}
	}
	
	async ToProductDtoList(products) {
	
		return Promise.all(products.map(toProductDto));
	}
	
	async toProductDto(product) {
	
		return {
			id: product.id,
			name: product.name,
			description: product.description,
			product_category_id: product.product_category_id,
			unit_price: product.unit_price,
			sale_price: product.sale_price,
			tags: product.tags,
			is_actived: product.is_actived,
			created_at: product.created_at,
			created_by: product.created_by,
			updated_at: product.updated_at,
			updated_by: product.updated_by
		}
	}
}

module.exports = ProductMapper