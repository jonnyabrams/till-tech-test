const Order = require('./order.js');


describe('Order', () => {
  beforeEach(() => {
    order = new Order;
  });

  it('is an instance of the Order class', () => {
    expect(order).toBeInstanceOf(Order);
  });
});