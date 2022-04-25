const Till = require('../src/till')

describe('Till', () => {
  let cafe = {
    "shopName": "Caffiends",
    "address": "10 Bean Street",
    "phone": "123123123",
    "prices": [
      {
        "Coffee": 2.50,
        "Tea": 2.20,
        "Chips": 4.50,
      }
    ]
  }

  beforeEach(() => {
    till = new Till(cafe);
  })

  it('initializes with data of a cafe', () => {
    expect(till.cafeName).toEqual('Caffiends');
    expect(till.cafeAddress).toEqual('10 Bean Street');
    expect(till.cafePhone).toEqual('123123123');
    expect(till.cafePrices).toEqual([
      {
        "Coffee": 2.50,
        "Tea": 2.20,
        "Chips": 4.50,
      }
    ])
  })
})