var Ferry = function(carLimit, passangersLimit) {

  this.car_count = [];
  this.people_count = 0;
  this.car_colors = {};
  this.regNumbers = {};

  this.onBoard = function(car) {

    if (this.car_count.length + 1 <= carLimit && this.people_count + car.passangers <= passangersLimit) {

      this.people_count += car.passangers;
      this.car_count.push(car);

      if (this.car_colors[car.color] === undefined) {
        this.car_colors[car.color] = 1;
      } else {
        this.car_colors[car.color]++;
      }

      if (this.regNumbers[car.regNumber]) {
        this.regNumbers[car.regNumber]++;

      } else {
        this.regNumbers[car.regNumber] = 1;
      }
      switch (this.regNumbers[car.regNumber]) {
        case 3:
          return "Half-Price!"
          break;
        case 7:
          return "you go free!"
          break;
        default:
          return "'Accepted'";
      }

    } else {
      return "'Rejected'";
    }
  };
  this.offBoard = function() {
    var regNumbers = ['CA 111', 'CA 333'];
    regNumbers.pop();
  }
};

var ferryTotal = new Ferry(15, 20);

var Car = require('./car');
console.log(ferryTotal.onBoard(new Car('blue', 4, "CA 111")));
console.log(ferryTotal.onBoard(new Car('blue', 4, "CA 111")));
console.log(ferryTotal.onBoard(new Car('blue', 4, "CA 111")));
console.log(ferryTotal.onBoard(new Car('blue', 1, "CA 111")));
console.log(ferryTotal.onBoard(new Car('blue', 2, "CA 111")));
console.log(ferryTotal.onBoard(new Car('blue', 2, "CA 111")));
console.log(ferryTotal.onBoard(new Car('blue', 1, "CA 111")));

// console.log(ferryTotal.offBoard('white', 1, "CA 333"));

console.log(ferryTotal);

module.exports = Ferry;
