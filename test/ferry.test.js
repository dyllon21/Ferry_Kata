const assert = require('assert');
const Car = require('../car.js');
console.log(Car);

describe('It should', function() {


  it('specify the color of the car', function() {

    var greenCar = new Car('green', 20);

  })
  assert.equal('green', 20);

});
