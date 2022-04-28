const Cafe = require('./cafe.js');

class Till {
  constructor(cafe = new Cafe) {
    this.cafe = cafe;
    this.order = [];
  };

  
};

module.exports = Till;
