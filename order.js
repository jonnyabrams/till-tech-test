class Order {
  constructor() {
    this.items = []
  };

  printBill() {
    console.log(this.#formatBill().join('\n'));
  }

  #formatBill() {
    return this.items.map((orderItem) => {
      return `${orderItem.item}: ${orderItem.quantity} x ${orderItem.price}`
    });
  };
};

module.exports = Order;
