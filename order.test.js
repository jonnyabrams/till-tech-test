const Order = require('./order.js');


describe('Order', () => {
  beforeEach(() => {
    cafe = { name: 'Caffiends', address: '10 Bean Street', phone: '123123', prices: {
      coffee: 2.50,
      tea: 2.20,
      chips: 4.50
      }
    };
    order = new Order(cafe);
  });

  it('is an instance of the Order class', () => {
    expect(order).toBeInstanceOf(Order);
  });

  it('initializes with a Cafe', () => {
    expect(order.cafe).toEqual(cafe);
    expect(order.cafe.name).toEqual('Caffiends');
    expect(order.cafe.address).toEqual('10 Bean Street');
    expect(order.cafe.phone).toEqual('123123');
    expect(order.cafe.prices).toHaveProperty('coffee');
  });
});