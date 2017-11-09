var Ferry = function(carLimit, passangersLimit) {

  this.car_count = [];
  this.people_count = 0;

  // this.carLimit = carLimit;
  // this.passangersLimit = passangersLimit;

  this.onBoard = function(car) {

    if (this.car_count.length + 1 <= carLimit && this.people_count + car.passangers <= passangersLimit) {
      this.people_count += car.passangers;
      this.car_count.push(car);
      return "'Accepted'";
    } else {
      return "'Rejected'";
    }
  };

  this.offBoard = function(car) {

    if (this.car_count.length - 1 >= carLimit && this.people_count - car.passangers >= passangersLimit) {
      this.people_count -= car.passangers;
      this.car_count.push(car);
      // this.car_count.length -1;
    } else {
      return this.people_count -= car.passangers;
    }

  };
};


var ferryTotal = new Ferry(10, 15);

var Car = require('./car');
console.log(ferryTotal.onBoard(new Car('blue', 4)));
console.log(ferryTotal.onBoard(new Car('white', 2)));
console.log(ferryTotal.onBoard(new Car('red', 1)));
console.log(ferryTotal.onBoard(new Car('yellow', 1)));

console.log(ferryTotal.offBoard(new Car('white', 2)));
// console.log(ferryTotal.offBoard(new Car('yellow', 1)));


// console.log(ferryTotal.onBoard(new Car('yellow', 1)));

console.log(ferryTotal);

module.exports = Ferry;
