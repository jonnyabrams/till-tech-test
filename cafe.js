const fs = require('fs');
const Order = require('./order.js');
const jsonString = fs.readFileSync('./cafeData.json');
const cafeData = JSON.parse(jsonString);

class Cafe {
  constructor(data = cafeData[0], order = new Order) {
    this.name = data.shopName;
    this.address = data.address;
    this.phone = data.phone;
    this.prices = data.prices[0];
    this.order = order;
  };

  viewMenu() {
    return this.prices;
  }

  orderItems(item, quantity) {
    this.#errorCheck(item, quantity);

    this.order.items.push({ item: item, price: this.prices[item], quantity: quantity });
  };

  #errorCheck(item, quantity) {
    if(!this.prices.hasOwnProperty(item)) throw new Error('Item unavailable');
    if(typeof quantity !== 'number') throw new Error('Quantity is not a number');
  };
};

module.exports = Cafe;
