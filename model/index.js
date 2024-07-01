const Store = require('./Store/Store')
const City = require('./Store/City')
const Province = require('./Store/Province')

const User = require('./User/User')
const Role = require('./User/Role')
const Privilege = require('./User/Privilege')
const RolePrivilege = require('./User/RolePrivilege')

const Category = require('./Product/Category')
const Product = require('./Product/Product')
const Variant = require('./Product/Variant')

const Discount = require('./Discount/Discount')
const DiscountStore = require('./Discount/DiscountStore')
const DiscountProduct = require('./Discount/DiscountProduct')

const Inventory = require('./Inventory/Inventory')

// Store Management
Store.belongsTo(City, { foreignKey: 'cityId', as: 'city' })
City.belongsTo(Province, { foreignKey: 'provinceId', as: 'province' })
Store.hasMany(Inventory, { foreignKey: "store_id", as: "inventories" })

// User Management
User.belongsTo(Role, { foreignKey: "roleId", as: "role" })
User.belongsTo(Store, { foreignKey: "storeId", as: "store" })
Role.belongsToMany(Privilege, {
  through: RolePrivilege,
  foreignKey: 'roleId',
  otherKey: 'privilegeId',
  as: 'privileges'
})

// Product Management
Category.hasMany(Product, { foreignKey: "categoryId", as: "products" })
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" })
Product.hasMany(Variant, { foreignKey: "productId", as: "variants" })
Variant.belongsTo(Product, { foreignKey: "productId", as: "product" })
Variant.hasMany(Inventory, { foreignKey: "variantId", as: "inventories" })

// Discount Management
Discount.hasMany(DiscountStore, { foreignKey: "discountId", as: "discount_stores" })
Discount.hasMany(DiscountProduct, { foreignKey: "discountId", as: "discount_products" })
Discount.belongsToMany(Store, {
  through: DiscountStore,
  foreignKey: 'discountId',
  otherKey: 'storeId',
  as: 'stores'
})
Discount.belongsToMany(Product, {
  through: DiscountProduct,
  foreignKey: 'discountId',
  otherKey: 'productId',
  as: 'products'
})

// Inventory Management
Inventory.belongsTo(Variant, { foreignKey: "variantId", as: "variant" })
Inventory.belongsTo(Store, { foreignKey: "storeId", as: "store" })

module.exports = {
  Store, City, Province,
  User, Role, RolePrivilege,
  Category, Product, Variant,
  Discount, DiscountStore, DiscountProduct,
  Inventory
}