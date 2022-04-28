const fs = require('fs');

class Till {
  constructor() {
    this.cafeName = '';
    this.cafeAddress = '';
    this.cafePhone = '';
    this.cafeMenu = {};
  };

  getCafeData() {
    const jsonString = fs.readFileSync('./cafeData.json');
    const cafeData = JSON.parse(jsonString);
    this.cafeName = cafeData[0].shopName;
    this.cafeAddress = cafeData[0].address;
    this.cafePhone = cafeData[0].phone;
    this.cafeMenu = cafeData[0].prices[0];
  } 
};

module.exports = Till;
