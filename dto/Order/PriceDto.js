class PriceDto {

  constructor() { super() }

  toJSON() {
    return {
      totalDiscount: this.totalDiscount,
      totalCapital: this.totalCapital,
      totalRevenue: this.totalRevenue,
      totalAmount: this.totalAmount
    }
  }
}

module.exports = PriceDto