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

  beforeEach(() => {
    cafe = new Cafe(data);
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
});