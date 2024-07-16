const BaseMapper = require("../BaseMapper")

class MutationMapper extends BaseMapper {

  async ToMutation(dto) {

    return {
      number: dto.number,
      fromStoreId: dto.fromStoreId,
      toStoreId: dto.toStoreId,
      createdAt: dto.date, 
      status: false
    }
  }

  async ToMutationVariant(mutation, stock) {

    return {
      mutationId: mutation.id,
      variantId: stock.variant_id,
      stock: stock.total
    }
  }

  async ToMutationDtoList(mutations) {

    return Promise.all(
      mutations.map(
        mutation => this.toMutationDto(mutation)))
  }

  async ToMutationVariantDtoList(variants) {

    return Promise.all(
      variants.map(
        variant => this.toMutationVariantDto(variant)
      )
    )
  }

  async toMutationDto(mutation) {

    return {
      id: mutation.id,
      number: mutation.number,
      fromStoreName: mutation.fromStore.name,
      toStoreName: mutation.toStore.name,
      totalVariant: mutation.variants.map(variant => variant.toJSON()).length,
      totalStock: await this.totalStock(mutation.variants),
      createdAt: mutation.createdAt,
			createdBy: mutation.createdBy,
			updatedAt: mutation.updatedAt,
			updatedBy: mutation.updatedBy
    }
  }

  async toMutationVariantDto(mutationVariant) {

    return {
      id: mutationVariant.id,
      date: mutationVariant.mutation.createdAt,
      sku: mutationVariant.variant.sku,
      fromStoreName: mutationVariant.mutation.fromStore.name,
      toStoreName: mutationVariant.mutation.toStore.name,
      productName: mutationVariant.variant.product.name,
      categoryName: mutationVariant.variant.product.category.name,
      totalStock: mutationVariant.stock,
      unit: mutationVariant.variant.product.unit
    }
  }

  async totalStock(variants) {

    let total = 0

    variants.forEach(variant => total += variant.stock)

    return total
  }
	
}

module.exports = new MutationMapper()