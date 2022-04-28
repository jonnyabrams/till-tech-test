class Order {
  constructor() {
    this.items = []
  };

  printBill() {
    console.log(this.#formatBill().join('\n'));
  }

  calculateTotal() {
    return this.items.map((orderItem) => {
      return orderItem.quantity * orderItem.price;
    })
    .reduce((a, b) => a + b);
  };

  #formatBill() {
    return this.items.map((orderItem) => {
      return `${orderItem.item}: ${orderItem.quantity} x ${orderItem.price}`
    });
  };
};

module.exports = Order;
