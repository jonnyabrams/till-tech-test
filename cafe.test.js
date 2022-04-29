const Cafe = require('./cafe.js');

describe('Cafe', () => {
  const data = {
    "shopName": "Caffiends",
    "address": "10 Bean Street",
    "phone": "123123123",
    "prices": [
      {
        "coffee": 2.50,
        "tea": 2.25,
        "chips": 4.50
      }
    ]
  };

  const order = { items: [] };

  beforeEach(() => {
    cafe = new Cafe(data, order);
  });

  it('is an instance of the Cafe class', () => {
    expect(cafe).toBeInstanceOf(Cafe);
  });

  it('takes a name from imported data', () => {
    expect(cafe.name).toEqual('Caffiends');
  });

  it('takes an address from imported data', () => {
    expect(cafe.address).toEqual('10 Bean Street');
  });

  it('takes a name from imported data', () => {
    expect(cafe.phone).toEqual('123123123');
  });

  it('takes a name from imported data', () => {
    expect(cafe.prices).toHaveProperty('chips');
  });

  describe('viewMenu', () => {
    it('lists all available items and their prices', () => {
      expect(cafe.viewMenu()).toEqual({
        "coffee": 2.50,
        "tea": 2.25,
        "chips": 4.50
        }
      );
    });
  });

  describe('orderItems', () => {
    it('add items to the order', () => {
      cafe.orderItems('coffee', 2)
      cafe.orderItems('chips', 1)
      expect(cafe.order.items.length).toEqual(2);
      expect(cafe.order.items).toEqual( [
        { item: 'coffee', price: 2.50, quantity: 2 },
        { item: 'chips', price: 4.50, quantity: 1 }
      ]);
    });

    it('will not let you order an item not on the menu', () => {
      expect(() => { cafe.orderItems('pizza', 3) }).toThrowError('Item unavailable');
    });

    it('will not let you order a quantity that is not a number', () => {
      expect(() => { cafe.orderItems('chips', '3') }).toThrowError('Quantity is not a number');
    });
  });
});