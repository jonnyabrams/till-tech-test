class Order {
  constructor(cafe = new Cafe) {
    this.cafe = cafe;
  };
};

module.exports = Order;
