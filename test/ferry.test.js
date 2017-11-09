const assert = require('assert');

const Car = require('../car.js');
const Ferry = require('../ferry.js');
// const Board = require('../board.js');

describe('The Car constructor', function() {

  it('should specify the color of the car and the number of passangers in the car', function() {

    // var greenCar = new Car('green', 4);
    assert.equal = new Car('green', 4);

  })
});


describe('The Ferry constructor', function() {

  it('Should specify the amount of passangers and the amount of cars allowed on the Ferry', function() {

    // var numOfCars = new Car(20, 25);
    assert.equal = new Car(20, 25);

  })

});
