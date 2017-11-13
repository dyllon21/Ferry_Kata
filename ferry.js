var Ferry = function(carLimit, passangersLimit) {

  this.car_count = [];
  this.people_count = 0;
  this.car_colors = {};

  this.onBoard = function(car) {
    if (this.car_count.length + 1 <= carLimit && this.people_count + car.passangers <= passangersLimit) {

      this.people_count += car.passangers;
      this.car_count.push(car);

      if (this.car_colors[car.color] === undefined) {
        this.car_colors[car.color] = 1;
      } else {
        this.car_colors[car.color]++;
       }

      if(this.car_colors[car.regNumber] === [car.regNumber]){
        this.car_colors[car.regNumber];
        return "'Half-Price For You!'";
      }else{
      }
      return "'Accepted'";
    } else {
      return "'Rejected'";
    }
  };

  this.offBoard = function(car) {
    if (this.car_count.length - 1 >= carLimit && this.people_count - car.passangers >= passangersLimit) {
      this.people_count -= car.passangers;
      this.car_count.push(car);
    } else {
      return this.people_count -= car.passangers;
    }
  };
};


var ferryTotal = new Ferry(15, 20);

var Car = require('./car');
console.log(ferryTotal.onBoard(new Car('blue', 4, "CA 111")));
console.log(ferryTotal.onBoard(new Car('red', 1, "CJ 777")));
console.log(ferryTotal.onBoard(new Car('white', 2, "CA 222")));
console.log(ferryTotal.onBoard(new Car('red', 1, "CJ 333")));
console.log(ferryTotal.onBoard(new Car('white', 4, "CJ 333")));
console.log(ferryTotal.onBoard(new Car('white', 1, "CY 333")));
console.log(ferryTotal.onBoard(new Car('blue', 1)));


// console.log(ferryTotal.offBoard(new Car('white', 2, "CJ 444")));
// console.log(ferryTotal.offBoard(new Car('yellow', 1)));
// console.log(ferryTotal.onBoard(new Car('yellow', 1)));

console.log(ferryTotal);

module.exports = Ferry;
