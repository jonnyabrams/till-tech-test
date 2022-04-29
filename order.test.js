const Order = require('./order.js');


describe('Order', () => {
  beforeEach(() => {
    order = new Order([
        { item: 'chips', price: 3, quantity: 2 },
        { item: 'tea', price: 1.50, quantity: 3 }
      ]
    );
  });

  describe('printBill', () => {
    it('prints the ordered items with their quantity and price', () => {
      console.log = jest.fn();
      order.printBill();
      expect(console.log).toHaveBeenCalledWith('chips: 2 x £3.00\ntea: 3 x £1.50')
    })
  });

  describe('calculateTotal', () => {
    it('sums the total prices of the items in the order', () => {
      expect(order.calculateTotal()).toEqual(10.50);
    });
  })
});