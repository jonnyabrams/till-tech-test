const cafeData = require("./cafeData");

class Till {
  constructor(cafe = cafeData) {
    this.cafeName = cafe.shopName;
    this.cafeAddress = cafe.address;
    this.cafePhone = cafe.phone;
    this.cafePrices = cafe.prices;
  }

 
}

module.exports = Till;
