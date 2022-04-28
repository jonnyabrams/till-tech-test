const Till = require('./till.js');

describe('Till', () => {
  
  beforeEach(() => {
    cafe = { name: 'Caffiends', address: '10 Bean Street', phone: '123123', prices: {
      coffee: 2.50,
      tea: 2.20,
      chips: 4.50
      }
    };
    till = new Till(cafe);
  });

  it('is an instance of the Till class', () => {
    expect(till).toBeInstanceOf(Till);
  });
  
  describe('getCafeData', () => {
    it('initializes with a cafe', () => {
      expect(till.cafe).toEqual(cafe);
      expect(till.cafe.name).toEqual('Caffiends');
      expect(till.cafe.address).toEqual('10 Bean Street');
      expect(till.cafe.phone).toEqual('123123');
      expect(till.cafe.prices).toHaveProperty('tea');
    });

  });
});