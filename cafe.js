const fs = require('fs');
const jsonString = fs.readFileSync('./cafeData.json');
const cafeData = JSON.parse(jsonString);

class Cafe {
  constructor(data = cafeData[0]) {
    this.name = data.shopName;
    this.address = data.address;
    this.phone = data.phone;
    this.prices = data.prices[0];
  };
};

module.exports = Cafe;
