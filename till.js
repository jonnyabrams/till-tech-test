const Cafe = require('./cafe.js');

class Till {
  constructor(cafe = new Cafe) {
    this.cafe = cafe;
    this.tax = 0.0864;
  };

  getOrderTotal() {
    return this.cafe.order.calculateTotal();
  };

  getTax() {
    const taxCharge = this.getOrderTotal() * this.tax;
    return Number(taxCharge.toFixed(2));
  };
};

module.exports = Till;
