const Till = require('./till.js');

describe('Till', () => {
  beforeEach(() => {
    till = new Till;
  });

  it('is an instance of the Till class', () => {
    expect(till).toBeInstanceOf(Till);
  });
  
  describe('getCafeData', () => {
    it('gets the cafe name from the json data', () => {
      till.getCafeData();
      expect(till.cafeName).toEqual('The Coffee Connection');
    });
  });
});